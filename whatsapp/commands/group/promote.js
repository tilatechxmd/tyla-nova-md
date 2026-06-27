module.exports = {
  name: 'promote',
  description: 'Promote member to admin',
  category: 'group',
  execute: async (client, message, args) => {
    if (message.message.extendedTextMessage?.contextInfo?.quotedMessage) {
      const quotedJid = message.message.extendedTextMessage.contextInfo.participant;
      await client.groupParticipantsUpdate(message.key.remoteJid, [quotedJid], 'promote');
      await client.sendMessage(message.key.remoteJid, { text: '✅ Member promoted to admin' });
    } else {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Reply to a member message' });
    }
  },
};