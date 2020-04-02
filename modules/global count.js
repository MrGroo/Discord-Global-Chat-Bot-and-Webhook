const Discord = require("discord.js")

exports.run = async (client, env) => {
  
    function webhooksend(msg, webhookClient) {
      webhookClient.send(`${msg.content}`, {
        username: `${msg.author.tag} (${msg.author.id})`,
        avatarURL: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}`
      });
          
    }
  
    client.on('message', message => {
      
        if(message.author.bot) return;

        let url = ""
        message.attachments.forEach(a => {
            console.log(a.attachment)
            url = a.attachment
        });
      
        //690524863592661002
      
        let ChanneIDs = env.COUNTCHANNELS.split(", ")
        let WebhookIDs = env.COUNTWEBHOOKIDS.split(", ")
        let WebhookTokens = env.COUNTTOKENS.split(", ")
        
        
        
        let i2 = 0
        
      console.log(ChanneIDs)
      
      ChanneIDs.forEach(c =>{
        if(message.channel.id == c){
            message.delete()
            
            const channel = client.guilds.cache.get("561942508968345610").channels.cache.find(chan => chan.name === message.author.id);
            if(channel) return
          
            let l = client.guilds.cache.get("561942508968345610").channels.cache.get("693566707012468748").topic
            l = l.substring(21, l.length-2)
            if(!(message.content==l)) return 
            client.guilds.cache.get("561942508968345610").channels.cache.get("693566707012468748").setTopic(`Następna liczba to **${Number(l)+1}**`).then(updated => {console.log(`Channel's new topic is ${updated.topic}`)
              let i = 0
              WebhookIDs.forEach(w =>{
                let WebhooksClient = new Discord.WebhookClient(w, WebhookTokens[i]);
                webhooksend(message, WebhooksClient)
                i++
              })
            })
          }
        i2++
      })
  })
}