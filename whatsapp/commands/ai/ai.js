module.exports = {
  name: 'ai',
  description: 'Ask AI anything',
  category: 'ai',
  execute: async (client, message, args) => {
    if (args.length === 0) {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Usage: .ai <question>' });
      return;
    }
    const query = args.join(' ');
    const text = `🤖 AI Response\n\nQuestion: ${query}\n\nAnswer: (AI response would go here)\n\n*Note: Requires OpenAI API key*`;
    await client.sendMessage(message.key.remoteJid, { text });
  },
};