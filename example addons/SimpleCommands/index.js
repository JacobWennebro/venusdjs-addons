module.exports = class Addon {
    execute(bot, addCommandListener, config) {


    /* SIMPLE COMMANDS  */

        for(let cmd in config.commands) {
            addCommandListener(cmd, (args, msg) => {

                let words = config.commands[cmd].split(' ');
                let formatted = [];

                words.forEach((term) => {
                    let regex = term.match(/\{(.*?)\}/);
                    let params = {
                        ping: Math.round(bot.ping),
                        username: msg.author.username,
                        tag_author: '<@'+msg.author.id+'>',
                        bot: bot.user.username,
                        channel: msg.channel.name,
                        guild: msg.guild.name,
                        members: msg.guild.memberCount
                    }
                    if(regex !== null) {
                        term = (params[regex[1]]);
                    }

                    formatted.push(term);

                });

                msg.channel.send(formatted.join(' '));
            });
        }

    }
    manifest() {
        return {
            developer:"Jacob Wennebro",
            image:"http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/VirtualBox-icon.png",
            description:"Easy to use addon for adding simple commands",
        }
    }
    config() {

        let template = {
            commands: {
                help:"meh"
            }
        } 

        return {
            filename:"simplcmds",
            json: template,
            schema: null
        }
    }
}