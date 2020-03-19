const Discord = require("discord.js")

exports.run = async (client) => {
    client.on('message', message => {

        if(message.author.bot) return;

        let url = ""
        message.attachments.forEach(a => {
            console.log(a.attachment)
            url = a.attachment
        });

        let channelID1 = "CHANNEL ID 1"
        let webhook1 = ["WEBHOOK ID", "TOKEN"]
        const webhookClient1 = new Discord.WebhookClient(webhook1[0], webhook1[1]);

        let channelID2 = "CHANNEL ID 2"
        let webhook2 = ["WEBHOOK ID", "TOKEN"]
        const webhookClient2 = new Discord.WebhookClient(webhook2[0], webhook2[1]);

        if(message.channel.id==channelID2){
            message.delete()
            if(message.content.includes('@everyone')) return
            if(message.content.includes('@here')) return

            if(url == ""){
                webhookClient2.send(`${message.content}`, {
                    username: `${message.author.tag} (${message.author.id})`,
                    avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`
                });
            }
            else{
                webhookClient2.send(`${message.content}`, {
                    username: `${message.author.tag} (${message.author.id})`,
                    avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
                    files: [url]
                });
            }
            if(url == ""){
                webhookClient1.send(`${message.content}`, {
                    username: `${message.author.tag} (${message.author.id})`,
                    avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
                });
            }
            else{
                webhookClient1.send(`${message.content}`, {
                    username: `${message.author.tag} (${message.author.id})`,
                    avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
                    files: [url]
                });
            }
        }
        if(message.channel.id==channelID1){
            if(message.content.includes('@everyone')) return
            if(message.content.includes('@here')) return

            message.delete()

            if(url == ""){
                webhookClient1.send(`${message.content}`, {
                    username: `${message.author.tag} (${message.author.id})`,
                    avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
                });
            }
            else {
                webhookClient1.send(`${message.content}`, {
                    username: `${message.author.tag} (${message.author.id})`,
                    avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
                    files: [url]
                });  
            }
            if(url == ""){
                webhookClient2.send(`${message.content}`, {
                    username: `${message.author.tag} (${message.author.id})`,
                    avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
                });
            }
            else {
                webhookClient2.send(`${message.content}`, {
                    username: `${message.author.tag} (${message.author.id})`,
                    avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
                    files: [url]
                });  
            }
        }
    })
}