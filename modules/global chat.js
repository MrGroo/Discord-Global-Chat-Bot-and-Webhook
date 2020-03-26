const Discord = require("discord.js")

exports.run = async (client, webhook) => {
  
    function webhooksend(msg, webhookClient, files) {
        if(files == ""){
              webhookClient.send(`${msg.content}`, {
                  username: `${msg.author.tag} (${msg.author.id})`,
                  avatarURL: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}`,
                  tts: false
              });
          }
          else{
              webhookClient.send(`${msg.content}`, {
                  username: `${msg.author.tag} (${msg.author.id})`,
                  avatarURL: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}`,
                  files: [files],
                  tts: false
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
      
        let ChanneIDs = webhook[0].split(", ")
        let WebhookIDs = webhook[1].split(", ")
        let WebhookTokens = webhook[2].split(", ")
        let WebhooksClients = [""]
        
        
        
        let i2 = 0
        
      console.log(ChanneIDs)
      
      ChanneIDs.forEach(c =>{
        if(message.channel.id == c){
            message.delete()
            if(message.content.includes('@everyone')) return
            if(message.content.includes('@here')) return
            if(message.content.includes('discord') && message.content.includes('invite')) return

            if(message.author.id=="594036187950219282") return
            if(message.author.id=="670569489649238041") return
            if(message.author.id=="584140317721231391") return
            if(message.author.id=="611472516808048640") return

          let i = 0
          
          WebhookIDs.forEach(w =>{
            let WebhooksClient = new Discord.WebhookClient(w, WebhookTokens[i]);
            webhooksend(message, WebhooksClient, url)
            i++
          })
        }
        i2++
      })
    })
}