module.exports = {
  name: 'video',
  description: 'Download video',
  category: 'download',
  execute: async (client, message, args) => {
    if (args.length === 0) {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Usage: .video <URL>' });
      return;
    }
    const url = args[0];
    const text = `🎬 Downloading video from: ${url}\n\n⏳ Processing... Please wait`;
    await client.sendMessage(message.key.remoteJid, { text });
  },
};