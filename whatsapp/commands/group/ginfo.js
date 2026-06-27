module.exports = {
  name: 'ginfo',
  description: 'Get group information',
  category: 'group',
  execute: async (client, message, args) => {
    try {
      const groupMetadata = await client.groupMetadata(message.key.remoteJid);
      const text = `👥 Group Info\n\n📛 Name: ${groupMetadata.subject}\n👤 Members: ${groupMetadata.participants.length}\n📝 Desc: ${groupMetadata.desc || 'No description'}\n📅 Created: ${new Date(groupMetadata.creation * 1000).toLocaleDateString()}`;
      await client.sendMessage(message.key.remoteJid, { text });
    } catch (error) {
      await client.sendMessage(message.key.remoteJid, { text: '❌ Error getting group info' });
    }
  },
};