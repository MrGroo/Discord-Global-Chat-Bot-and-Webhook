const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();


fs.readdir(`./modules/`, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFunc = require(`./modules/${file}`);
        eventFunc.run(client);
    });
});


client.login("__BOT TOKEN__");