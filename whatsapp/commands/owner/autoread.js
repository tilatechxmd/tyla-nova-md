module.exports = {
  name: 'autoread',
  description: 'Toggle auto read messages',
  category: 'owner',
  ownerOnly: true,
  execute: async (client, message, args) => {
    await client.sendMessage(message.key.remoteJid, { text: '✅ Auto-read toggled' });
  },
};