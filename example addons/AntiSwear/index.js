module.exports = class Addon {
    execute(bot, addCommandListener, config) {

        let words = [
            "fuck", 
            "fück", 
            "feck", 
            "fukk", 
            "motherfucker", 
            "pussy", 
            "penis", 
            "dick", 
            "hey_discord_staff_xD",
            "cunt",
            "whore",
            "shit"
        ]

        bot.on('message', (msg) => {
            
            let args = msg.content.split(' ');

            args.forEach(arg => {
                if(words.includes(arg.toLowerCase())) {

                    msg.delete();
					msg.channel.send(config["chat prefix"] + ' You swore!');

                }
            });

        });

        addCommandListener('antiswear', (args, msg) => {
            msg.channel.send('Running AntiSwear version 0.0.1');
        });

    }
    manifest() {
        return {
            developer:"Jacob Wennebro",
            image:"https://d30y9cdsu7xlg0.cloudfront.net/png/15388-200.png",
            description:"Prevent naughty words in chat",
        }
    }
    config() {

        let template = {
            "chat prefix": "[AntiSwear]"
        } 

        return {
            filename:"antiswear",
            json: template,
            schema: null
        }
    }
}