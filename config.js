const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  WHATSAPP: {
    SESSION_NAME: process.env.WHATSAPP_SESSION_NAME || 'tyla-session',
    OWNER_NUMBER: process.env.WHATSAPP_OWNER_NUMBER || '',
    BOT_NAME: process.env.WHATSAPP_BOT_NAME || 'TYLA NOVA MD',
    PREFIX: process.env.WHATSAPP_BOT_PREFIX || '.',
    AUTO_READ: process.env.WHATSAPP_AUTO_READ !== 'false',
    AUTO_TYPING: process.env.WHATSAPP_AUTO_TYPING !== 'false',
  },
  TELEGRAM: {
    BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
    WEBHOOK_URL: process.env.TELEGRAM_WEBHOOK_URL || '',
    ADMIN_ID: process.env.TELEGRAM_ADMIN_ID || '',
    ENABLED: !!process.env.TELEGRAM_BOT_TOKEN,
  },
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
  RAPIDAPI_KEY: process.env.RAPIDAPI_KEY || '',
  DATABASE: {
    TYPE: process.env.DB_TYPE || 'sqlite',
    PATH: process.env.DB_PATH || './database/tyla.db',
  },
  LOGGING: {
    LEVEL: process.env.LOG_LEVEL || 'info',
    FILE: process.env.LOG_FILE || './logs/bot.log',
  },
  PATHS: {
    SESSIONS: path.join(__dirname, 'sessions'),
    DATABASE: path.join(__dirname, 'database'),
    LOGS: path.join(__dirname, 'logs'),
    PLUGINS: path.join(__dirname, 'whatsapp', 'plugins'),
    COMMANDS: path.join(__dirname, 'whatsapp', 'commands'),
  },
};