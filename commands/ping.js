appGlobal = require("../config.js");
module.exports = {
    "trigger": new RegExp(appGlobal.prefix.source+"ping"),
    "testString": `${appGlobal.trigger}ping`,
    "message": function(client, channel, message) {
        username = message.author.id;
        channel.send(`pong`);
    },
    "desc": "sends pong"
}
