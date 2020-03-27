const Discord = require("discord.js")
exports.run = async (client, message, args, prefix, env) => {
  if(!((message.author.id=="494386855974928386")||(message.author.id=="438007845498257408"))) return;
  message.delete()
    env.split(`, `).forEach(c=>{
      client.channels.cache.get(c).bulkDelete(args[1])
  })
  message.channel.send(`${args[1]} Wiadomości poszły na spacer`)
}