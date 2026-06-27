module.exports = {
  name: 'calc',
  description: 'Calculate math',
  category: 'utility',
  execute: async (client, message, args) => {
    if (args.length === 0) {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Usage: .calc <expression>\n\nExample: .calc 2+2*5' });
      return;
    }
    try {
      const expr = args.join('');
      const result = eval(expr);
      const text = `🧮 Calculation\n\n➕ Expression: ${expr}\n✅ Result: ${result}`;
      await client.sendMessage(message.key.remoteJid, { text });
    } catch (error) {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Invalid calculation' });
    }
  },
};