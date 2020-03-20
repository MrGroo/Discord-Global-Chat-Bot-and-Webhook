const Discord = require("discord.js")

exports.run = async (client, webhook) => {
  
    function webhooksend(msg, webhookClient, files) {
        if(files == ""){
              webhookClient.send(`${msg.content}`, {
                  username: `${msg.author.tag} (${msg.author.id})`,
                  avatarURL: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}`
              });
          }
          else{
              webhookClient.send(`${msg.content}`, {
                  username: `${msg.author.tag} (${msg.author.id})`,
                  avatarURL: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}`,
                  files: [files]
              });
          }
    }
  
    client.on('message', message => {

        if(message.author.bot) return;

        let url = ""
        message.attachments.forEach(a => {
            console.log(a.attachment)
            url = a.attachment
        });
      
        //690524863592661002
      
        let channelID1 = "689933338382827596"
        let webhook1 = ["689933388341313543", webhook[0]]
        const webhookClient1 = new Discord.WebhookClient(webhook1[0], webhook1[1]);//  /

        let channelID2 = "690489802025599016"
        let webhook2 = ["690505524189593650", webhook[1]]
        const webhookClient2 = new Discord.WebhookClient(webhook2[0], webhook2[1]); //  /

        let channelID3 = "690524863592661002"
        let webhook3 = ["690528600478449666", webhook[2]]
        const webhookClient3 = new Discord.WebhookClient(webhook3[0], webhook3[1]); //  /
      
        let channelID4 = "690555244332974130"
        let webhook4 = ["690556344411095050", webhook[3]]
        const webhookClient4 = new Discord.WebhookClient(webhook4[0], webhook4[1]); //  /
        
        if(message.channel.id==channelID2){
            message.delete()
            if(message.content.includes('@everyone')) return
            if(message.content.includes('@here')) return

            webhooksend(message, webhookClient1, url)
            webhooksend(message, webhookClient2, url)
            webhooksend(message, webhookClient3, url)
            webhooksend(message, webhookClient4, url)
        }
        if(message.channel.id==channelID3){
            if(message.content.includes('@everyone')) return
            if(message.content.includes('@here')) return

            message.delete()

            webhooksend(message, webhookClient1, url)
            webhooksend(message, webhookClient2, url)
            webhooksend(message, webhookClient3, url)
            webhooksend(message, webhookClient4, url)
        }
          if(message.channel.id==channelID1){
            message.delete()
            if(message.content.includes('@everyone')) return
            if(message.content.includes('@here')) return

            webhooksend(message, webhookClient1, url)
            webhooksend(message, webhookClient2, url)
            webhooksend(message, webhookClient3, url)
            webhooksend(message, webhookClient4, url)
        }
          if(message.channel.id==channelID4){
            message.delete()
            if(message.content.includes('@everyone')) return
            if(message.content.includes('@here')) return

            webhooksend(message, webhookClient1, url)
            webhooksend(message, webhookClient2, url)
            webhooksend(message, webhookClient3, url)
            webhooksend(message, webhookClient4, url)
        }
    })
}