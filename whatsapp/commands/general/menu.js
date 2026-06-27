module.exports = {
  name: 'menu',
  description: 'Show all commands',
  category: 'general',
  execute: async (client, message, args) => {
    const menu = `╔══════════════════════════════╗
║    🚀 TYLA NOVA MD MENU       ║
║  Next-Generation WhatsApp Bot ║
╚══════════════════════════════╝

👤 GENERAL: .menu .help .ping .runtime
👑 OWNER: .restart .shutdown .update
👥 GROUP: .tagall .promote .demote .kick
🤖 AI: .ai .chat .translate .code
🎵 MEDIA: .play .video .ytmp3 .ytmp4
🖼 STICKERS: .sticker .take .attp .ttp
🎮 FUN: .truth .dare .ship .meme
📂 UTILS: .weather .calc .qr .base64

Type .help <command> for details`;
    await client.sendMessage(message.key.remoteJid, { text: menu });
  },
};