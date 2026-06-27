module.exports = {
  name: 'qr',
  description: 'Generate QR code',
  category: 'utility',
  execute: async (client, message, args) => {
    if (args.length === 0) {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Usage: .qr <text>' });
      return;
    }
    const text = args.join(' ');
    await client.sendMessage(message.key.remoteJid, { text: `📱 Generating QR Code for: ${text}\n\n⏳ Creating QR code...` });
  },
};