appGlobal = require("../config.js");
module.exports = {
    "trigger": appGlobal.createTrigger("ping"),
    "message": function(client, channel, message) {
        username = message.author.id;
        channel.send(`pong`);
    },
    "desc": "sends pong"
}