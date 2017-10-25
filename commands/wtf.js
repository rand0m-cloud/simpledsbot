const appGlobal = require("../config.js");
module.exports = {
    "trigger": new RegExp(appGlobal.prefix.source+"wtf"),
    "testString": `${appGlobal.trigger}wtf`,
    "message": function(client, channel, message) {
        username = message.author.id;
        channel.send(`wtf <@!${username}>`);
    },
    "desc": "wtf?"
}
