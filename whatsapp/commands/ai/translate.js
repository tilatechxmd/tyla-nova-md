module.exports = {
  name: 'translate',
  description: 'Translate text',
  category: 'ai',
  execute: async (client, message, args) => {
    if (args.length < 2) {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Usage: .translate <language> <text>' });
      return;
    }
    const lang = args[0];
    const text = args.slice(1).join(' ');
    const response = `🌐 Translation\n\nLanguage: ${lang}\nOriginal: ${text}\n\nTranslated: (Translation would appear here)`;
    await client.sendMessage(message.key.remoteJid, { text: response });
  },
};