const TelegramBot = require('node-telegram-bot-api');
const pino = require('pino');
const config = require('../config');

const logger = pino({ level: config.LOGGING.LEVEL || 'info' });

let bot = null;

const initializeTelegram = () => {
  try {
    if (!config.TELEGRAM.BOT_TOKEN) {
      logger.warn('⚠️  Telegram bot token not configured, skipping Telegram initialization');
      return null;
    }

    bot = new TelegramBot(config.TELEGRAM.BOT_TOKEN, { polling: true });

    logger.info('✅ Telegram Bot Initialized Successfully!');

    // Basic message handler
    bot.on('message', (msg) => {
      const chatId = msg.chat.id;
      logger.info(`📨 Telegram message from ${msg.from.first_name}: ${msg.text}`);

      // Basic command handling
      if (msg.text.startsWith('/start')) {
        bot.sendMessage(chatId, '👋 Welcome to TYLA NOVA MD Control Panel!');
      } else if (msg.text.startsWith('/status')) {
        bot.sendMessage(chatId, '✅ Bot is running');
      }
    });

    // Error handler
    bot.on('polling_error', (error) => {
      logger.error('❌ Telegram polling error:', error);
    });

    return bot;
  } catch (error) {
    logger.error('❌ Telegram Initialization Error:', error);
    return null;
  }
};

const getBot = () => bot;

const sendTelegramMessage = async (chatId, message) => {
  try {
    if (bot) {
      await bot.sendMessage(chatId, message);
    }
  } catch (error) {
    logger.error('❌ Failed to send Telegram message:', error);
  }
};

module.exports = {
  initializeTelegram,
  getBot,
  sendTelegramMessage,
};