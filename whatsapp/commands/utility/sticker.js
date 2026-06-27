module.exports = {
  name: 'sticker',
  description: 'Convert image to sticker',
  category: 'utility',
  execute: async (client, message, args) => {
    if (message.message.imageMessage || message.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage) {
      await client.sendMessage(message.key.remoteJid, { text: '✨ Converting to sticker...\n\n⏳ Please wait' });
    } else {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Reply to an image with .sticker' });
    }
  },
};