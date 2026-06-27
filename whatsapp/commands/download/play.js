module.exports = {
  name: 'play',
  description: 'Download music',
  category: 'download',
  execute: async (client, message, args) => {
    if (args.length === 0) {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Usage: .play <song name>' });
      return;
    }
    const song = args.join(' ');
    const text = `🎵 Searching for: ${song}\n\n⏳ Please wait while I download the music...`;
    await client.sendMessage(message.key.remoteJid, { text });
  },
};