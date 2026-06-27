module.exports = {
  name: 'restart',
  description: 'Restart bot',
  category: 'owner',
  ownerOnly: true,
  execute: async (client, message, args) => {
    await client.sendMessage(message.key.remoteJid, { text: '🔄 Restarting bot...\n\n⏳ Please wait' });
    process.exit(0);
  },
};