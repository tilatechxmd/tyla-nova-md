module.exports = {
  name: 'quote',
  description: 'Get random quote',
  category: 'fun',
  execute: async (client, message, args) => {
    const quotes = [
      '"The only way to do great work is to love what you do." - Steve Jobs',
      '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
      '"Life is what happens when you\'re busy making other plans." - John Lennon'
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    await client.sendMessage(message.key.remoteJid, { text: `💬 ${quote}` });
  },
};