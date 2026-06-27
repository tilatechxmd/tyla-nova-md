module.exports = {
  name: 'joke',
  description: 'Get random joke',
  category: 'fun',
  execute: async (client, message, args) => {
    const jokes = [
      'Why don\'t scientists trust atoms? Because they make up everything!',
      'What do you call a fake noodle? An impasta!',
      'Why did the scarecrow win an award? He was outstanding in his field!'
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    await client.sendMessage(message.key.remoteJid, { text: `😂 ${joke}` });
  },
};