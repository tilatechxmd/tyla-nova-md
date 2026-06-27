module.exports = {
  name: 'public',
  description: 'Set bot to public mode',
  category: 'owner',
  ownerOnly: true,
  execute: async (client, message, args) => {
    await client.sendMessage(message.key.remoteJid, { text: '🌍 Bot is now in PUBLIC mode' });
  },
};