const Discord = require("discord.js")

exports.run = async (client, env) => {
  
    function webhooksend(msg, webhookClient, files) {
        if(files == ""){
              webhookClient.send(`${msg.content.replace('<@494386855974928386>','<@ocean jest super więc go nie pinguje>').replace(`<@`,`ping -`)}`, {
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
        let webhook = [env.WEBHOOKCHANNELS, env.WEBOOKIDS, env.WEBHOOKTOKENS]

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
            if(message.content.includes('discord') && (message.content.includes('invite')||message.content.includes('.gg'))) return

            const channel = client.guilds.cache.get("561942508968345610").channels.cache.find(chan => chan.name === message.author.id);
            if(channel) return

            if(message.author.id=="452105736948809738") return
            
            if(message.author.id=="351751548662972417") return
            if(message.author.id=="534079519028412417") return 
            if(message.author.id=="559075637327953934") return
            if(message.author.id=="505707435936186368") return
            if(message.author.id=="631484482817359898") return
            if(message.author.id=="512727979672207380") return
            if(message.author.id=="565210495293063179") return
            if(message.author.id=="670569489649238041") return
            if(message.author.id=="584140317721231391") return

          let i = 0
          
          ChanneIDs.forEach(w =>{
            const webhooks = await client.channels.cache.get(ChanneIDs[i]).fetchWebhooks();
		    const webhook = webhooks.first();
            webhooksend(message, webhook, url)
            i++
          })
        }
        i2++
      })
    })
}

/*
    
    webhook.send("test")*/