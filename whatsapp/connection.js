const makeWASocket = require('@whiskeysockets/baileys').default;
const {
  useMultiFileAuthState,
  DisconnectReason,
  Boom,
} = require('@whiskeysockets/baileys');
const path = require('path');
const fs = require('fs');
const pino = require('pino');
const config = require('../config');

const logger = pino({ level: config.LOGGING.LEVEL || 'info' });

let sock = null;

const initializeWhatsApp = async () => {
  try {
    const sessionPath = config.PATHS.SESSIONS;
    
    // Create session directory if it doesn't exist
    if (!fs.existsSync(sessionPath)) {
      fs.mkdirSync(sessionPath, { recursive: true });
    }

    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);

    sock = makeWASocket({
      auth: state,
      logger: pino({ level: 'silent' }),
      printQRInTerminal: true,
      browser: ['TYLA NOVA MD', 'Safari', '1.0.0'],
      syncFullHistory: false,
      markOnlineOnConnect: true,
      generateHighQualityLinkPreview: true,
      retryRequestDelayMs: 10,
      transactionOpts: { maxRetries: 1, delayMs: 100 },
    });

    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        logger.info('📱 Scan this QR code to connect WhatsApp');
      }

      if (connection === 'close') {
        const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        if (reason === DisconnectReason.badSession) {
          logger.error('❌ Bad Session File, Please Delete Sessions and Scan Again');
        } else if (reason === DisconnectReason.connectionClosed) {
          logger.error('❌ Connection closed, reconnecting....');
        } else if (reason === DisconnectReason.connectionLost) {
          logger.error('❌ Connection Lost from Server, reconnecting...');
        } else if (reason === DisconnectReason.connectionReplaced) {
          logger.error('❌ Another new connection opened, closing current connection...');
        } else if (reason === DisconnectReason.loggedOut) {
          logger.error('❌ Logged out, Please scan new QR');
        } else if (reason === DisconnectReason.restartRequired) {
          logger.error('❌ Restart required, restarting...');
        } else if (reason === DisconnectReason.timedOut) {
          logger.error('❌ Connection timedout, reconnecting...');
        } else {
          logger.error('❌ Unknown DisconnectReason', reason || lastDisconnect.error);
        }
      }

      if (connection === 'open') {
        logger.info('✅ WhatsApp Bot Connected Successfully!');
      }
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('messages.upsert', async (m) => {
      logger.info('📨 Message received');
      // Message handling logic here
    });

    return sock;
  } catch (error) {
    logger.error('❌ WhatsApp Connection Error:', error);
    throw error;
  }
};

const getSocket = () => sock;

module.exports = { initializeWhatsApp, getSocket };