module.exports = {
  name: 'demote',
  description: 'Demote admin to member',
  category: 'group',
  execute: async (client, message, args) => {
    if (message.message.extendedTextMessage?.contextInfo?.quotedMessage) {
      const quotedJid = message.message.extendedTextMessage.contextInfo.participant;
      await client.groupParticipantsUpdate(message.key.remoteJid, [quotedJid], 'demote');
      await client.sendMessage(message.key.remoteJid, { text: '✅ Admin demoted to member' });
    } else {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Reply to an admin message' });
    }
  },
};