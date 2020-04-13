const Discord = require("discord.js")

exports.run = async (client, env) => {
  
    function webhooksend(msg, webhookClient, files) {

      //weryfikacja
        let name = `${msg.author.tag} (${msg.author.id})`
        if(name.endsWith(`(494386855974928386)`)) name = "✅│ocean"
        if(name.endsWith(`(538097970147754015)`)) name = "✅│Kamila"
        if(name.endsWith(`(438007845498257408)`)) name = "✅│ananas"
        if(name.endsWith(`(257954238339088384)`)) name = "🔴│m7rlin"
        if(name.endsWith(`(672786344367620106)`)) name = "🔴│Studziak"


        if(files == ""){
              webhookClient.send(`${msg.content.replace('<@494386855974928386>','<@ocean jest super więc go nie pinguje>').replace(`<@`,`ping -`)}`, {
                  username: name,
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
  
    client.on('message', async (message) => {

        if(message.author.bot) return;

        let url = ""
        message.attachments.forEach(a => {
            console.log(a.attachment)
            url = a.attachment
        });
      
        //690524863592661002
        let webhook = [env.WEBHOOKCHANNELS, env.WEBOOKIDS, env.WEBHOOKTOKENS]

        let ChanneIDs = webhook[0].split(", ")
        
        
        
        let i2 = 0
        
      console.log(ChanneIDs)
      
      ChanneIDs.forEach(c => {
        if(message.channel.id == c){
            message.delete()
            if(message.content.includes('@everyone')) return
            if(message.content.includes('@here')) return
            if(message.content.includes('discord') && (message.content.includes('invite')||message.content.includes('.gg'))) return

            const channel = client.guilds.cache.get("561942508968345610").channels.cache.find(chan => chan.name === message.author.id);
            if(channel) return


          let i = 0
          
          ChanneIDs.forEach(async c =>{
            const webhooks = await client.channels.cache.get(c).fetchWebhooks()
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