const appGlobal = require("../config.js");
const fs = require("fs");
module.exports = {
    "trigger": new RegExp(appGlobal.prefix.source + "help"),
    "testString":`${appGlobal.trigger}help`,
    "message": function(client, channel, message) {
        var files = fs.readdirSync("./commands");
        var commands = [];
        for (var file of files) {

            var command = require(`./${file}`);
            //console.log(command.desc);
            commands.push({
                "trigger": command.testString,
                "description": command.desc
            });

        }
        var message = "```\n";
        commands.forEach((c) => {
            var line = `${c.trigger} : ${c.description}\n`;
            message += line;
        })
        channel.send(message + "```");
    },
    "desc": "gives help"
}
