const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();



client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

fs.readdir(`./modules/`, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFunc = require(`./modules/${file}`);
        eventFunc.run(client, process.env);
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
          eventFunc.run(client, process.env);
      });
  });
})

client.on('ready', () =>{/*
  console.log("online")
  client.user.setActivity("discord.io/BookShelf", {
    type: "STREAMING",
    url: "https://www.twitch.tv/help"
  });
  client.user.setPresence({ activity: { name: 'discord.io/BookShelf' }, status: 'idle' })*/
})



client.on('warn', () =>{
    console.log("warn")
})
client.on('error', () =>{
    console.log("error")
})
//console.log(process.env)
client.login(process.env.TOKEN);