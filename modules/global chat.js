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