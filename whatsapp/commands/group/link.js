module.exports = {
  name: 'link',
  description: 'Get group invite link',
  category: 'group',
  execute: async (client, message, args) => {
    try {
      const code = await client.groupInviteCode(message.key.remoteJid);
      const link = `https://chat.whatsapp.com/${code}`;
      await client.sendMessage(message.key.remoteJid, { text: `📎 Group Link\n\n${link}` });
    } catch (error) {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Cannot get group link' });
    }
  },
};