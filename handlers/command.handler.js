
exports.run = async (client, env) => {

    client.on('message', message => {

        if (message.author.bot) return;

        let prefix = "/"

        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command);
    
        if (!cmd) return;
    
        cmd.run(client, message, args, prefix, env);
    })
}