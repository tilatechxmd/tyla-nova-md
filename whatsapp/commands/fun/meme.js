module.exports = {
  name: 'meme',
  description: 'Get random meme',
  category: 'fun',
  execute: async (client, message, args) => {
    const text = `🎭 Random Meme\n\n⏳ Fetching meme from internet...\n\n*Note: Requires internet connection*`;
    await client.sendMessage(message.key.remoteJid, { text });
  },
};