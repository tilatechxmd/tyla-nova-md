module.exports = {
  name: 'prefix',
  description: 'Show command prefix',
  category: 'general',
  execute: async (client, message, args) => {
    const text = `⚙️ Command Prefix\n\n📌 Prefix: .\n💡 Usage: .command`;
    await client.sendMessage(message.key.remoteJid, { text });
  },
};