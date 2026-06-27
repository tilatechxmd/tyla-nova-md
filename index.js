#!/usr/bin/env node

const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { initializeWhatsApp } = require('./whatsapp/connection');
const { initializeTelegram } = require('./telegram/bot');
const config = require('./config');

dotenv.config();

const app = express();
app.use(express.json());

const whatsappClient = initializeWhatsApp();
const telegramBot = initializeTelegram();

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'TYLA NOVA MD is running' });
});

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[SERVER] Running on port ${PORT}`);
});

process.on('SIGINT', async () => {
  console.log('[SERVER] Shutting down...');
  process.exit(0);
});

module.exports = { app, whatsappClient, telegramBot };