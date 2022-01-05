"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var client = new discord_js_1["default"].Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', function () {
    var _a;
    console.log("The bot is ready");
    var guildId = "913231437518495774";
    var guild = client.guilds.cache.get(guildId);
    var commands;
    if (guild) {
        commands = guild.commands;
    }
    else {
        commands = (_a = client.application) === null || _a === void 0 ? void 0 : _a.commands;
    }
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'test',
        description: 'just a test command'
    });
});
client.login(process.env.TOKEN);
