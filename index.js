const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();

let webhook = [process.env.WEBHOOKCHANNELS, process.env.WEBOOKIDS, process.env.WEBHOOKTOKENS]

fs.readdir(`./modules/`, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFunc = require(`./modules/${file}`);
        eventFunc.run(client, webhook);
    });
});
fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      console.log("Załadowano komende: " + file);
      let commandName = file.split(".")[0];
      client.commands.set(commandName, props);
    });
});
  
let folders = [""];
folders.forEach(folder =>{
  fs.readdir(`./handlers/${folder}`, (err, files) => {
      if (err) console.log(err);
      files.forEach(file => {
          let eventFunc = require(`./handlers/${folder}/${file}`);
          eventFunc.run(client, process.env.WEBHOOKCHANNELS);
      });
  });
})

client.on('ready', () =>{
  console.log("online")
})
client.on('warn', () =>{
    console.log("warn")
})
client.on('error', () =>{
    console.log("error")
})

client.login(process.env.TOKEN);