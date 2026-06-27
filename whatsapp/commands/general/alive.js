module.exports = {
  name: 'alive',
  description: 'Check bot status',
  category: 'general',
  execute: async (client, message, args) => {
    const text = `✅ Bot is Alive\n\n🟢 Status: Online\n⚡ Response: Active\n🔋 Memory: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`;
    await client.sendMessage(message.key.remoteJid, { text });
  },
};