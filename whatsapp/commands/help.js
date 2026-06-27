module.exports = {
  name: 'help',
  category: 'General',
  description: 'Display all available commands',
  usage: '.help',

  execute: async (sock, m, args) => {
    try {
      const commands = [
        '╔════════════════════════════════════╗',
        '║   TYLA NOVA MD - COMMAND LIST      ║',
        '╚════════════════════════════════════╝',
        '',
        '📋 *Available Commands:*',
        '',
        '🎯 *General Commands:*',
        '• .help - Show this message',
        '• .ping - Check bot response time',
        '• .owner - Get owner info',
        '',
        '🎨 *Media Commands:*',
        '• .sticker - Convert image/video to sticker',
        '',
        '🔧 *Admin Commands:*',
        '• .mute - Mute a member',
        '• .unmute - Unmute a member',
        '',
        'Type .help <command> for more info',
      ].join('\n');

      await sock.sendMessage(m.key.remoteJid, { text: commands });
    } catch (error) {
      console.error('Error in help command:', error);
      await sock.sendMessage(m.key.remoteJid, { text: '❌ Error executing help command' });
    }
  },
};