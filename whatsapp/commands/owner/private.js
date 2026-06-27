module.exports = {
  name: 'private',
  description: 'Set bot to private mode',
  category: 'owner',
  ownerOnly: true,
  execute: async (client, message, args) => {
    await client.sendMessage(message.key.remoteJid, { text: '🔒 Bot is now in PRIVATE mode' });
  },
};