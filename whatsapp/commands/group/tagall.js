module.exports = {
  name: 'tagall',
  description: 'Tag all members',
  category: 'group',
  execute: async (client, message, args) => {
    const groupMetadata = await client.groupMetadata(message.key.remoteJid);
    let members = '@';
    groupMetadata.participants.forEach(p => {
      members += p.id.split('@')[0] + ' ';
    });
    await client.sendMessage(message.key.remoteJid, { text: members, mentions: groupMetadata.participants.map(p => p.id) });
  },
};