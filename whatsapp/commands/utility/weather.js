module.exports = {
  name: 'weather',
  description: 'Get weather info',
  category: 'utility',
  execute: async (client, message, args) => {
    if (args.length === 0) {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Usage: .weather <city>' });
      return;
    }
    const city = args.join(' ');
    const text = `🌤️ Weather in ${city}\n\n🌡️ Temperature: (Data would appear here)\n💨 Wind: (Data would appear here)\n💧 Humidity: (Data would appear here)`;
    await client.sendMessage(message.key.remoteJid, { text });
  },
};