module.exports = {
  name: 'version',
  description: 'Bot version',
  category: 'general',
  execute: async (client, message, args) => {
    const text = `📦 TYLA NOVA MD\n\nVersion: 1.0.0\n📅 Release: 2026-06-27\n🔄 Status: Stable`;
    await client.sendMessage(message.key.remoteJid, { text });
  },
};