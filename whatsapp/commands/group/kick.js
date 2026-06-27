module.exports = {
  name: 'kick',
  description: 'Remove member from group',
  category: 'group',
  execute: async (client, message, args) => {
    if (message.message.extendedTextMessage?.contextInfo?.quotedMessage) {
      const quotedJid = message.message.extendedTextMessage.contextInfo.participant;
      await client.groupParticipantsUpdate(message.key.remoteJid, [quotedJid], 'remove');
      await client.sendMessage(message.key.remoteJid, { text: '✅ Member removed from group' });
    } else {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Reply to a member message' });
    }
  },
};