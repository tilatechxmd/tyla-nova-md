module.exports = {
  name: 'owner',
  description: 'Show bot owner',
  category: 'general',
  execute: async (client, message, args) => {
    const text = `👤 Bot Owner\n\n📱 Owner: @tilatechxmd\n📧 Contact: support@tylanova.dev`;
    await client.sendMessage(message.key.remoteJid, { text });
  },
};