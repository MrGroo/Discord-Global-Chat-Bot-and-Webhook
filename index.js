const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();

let webhook = [process.env.WEBHOOK1, process.env.WEBHOOK2, process.env.WEBHOOK3, process.env.WEBHOOK4]

fs.readdir(`./modules/`, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFunc = require(`./modules/${file}`);
        eventFunc.run(client, webhook);
    });
});

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