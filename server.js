#!/usr/bin/nodejs

const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
const appGlobals = require("./config.js");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', (message) => {

    if (commands[message.content]) {
        commands[message.content](client, message.channel, message);
    }
});
var files = fs.readdirSync("commands/");
var commands = {};
for (var file of files) {
    console.log(`loading ${file}`);
    var command = require(`./commands/${file}`);
    commands[command.trigger] = command.message;

}
client.login(appGlobals.token).then(() => {
        if (client.user.username != appGlobals.username) {
            client.user.setUsername(appGlobals.username).then(() => {
                    console.log(`changed username to ${client.user.username}`)
                },
                () => {
                    console.log("failed to change username");
                });
        }
        client.generateInvite(['SEND_MESSAGES'])
            .then(link => {
                console.log(`Generated bot invite link: ${link}`);
            }, () => {
                console.log("failed to gen invite link");
            });
    },
    () => {
        console.log("bot failed to login")
        console.log("did you change token?");
    }
);