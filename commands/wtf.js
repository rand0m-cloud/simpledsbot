const appGlobal = require("../config.js");
module.exports = {
    "trigger": appGlobal.createTrigger("wtf"),
    "message": function(client, channel, message) {
        username = message.author.id;
        channel.send(`wtf <@!${username}>`);
    },
    "desc": "wtf?"
}