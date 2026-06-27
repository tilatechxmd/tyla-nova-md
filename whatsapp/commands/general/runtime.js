module.exports = {
  name: 'runtime',
  description: 'Check bot uptime',
  aliases: ['uptime'],
  category: 'general',
  execute: async (client, message, args) => {
    const uptime = Math.floor(process.uptime());
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = uptime % 60;
    const text = `⏱️ Bot Runtime\n\n📊 Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    await client.sendMessage(message.key.remoteJid, { text });
  },
};