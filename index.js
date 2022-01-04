"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var venom_bot_1 = require("venom-bot");
(0, venom_bot_1.create)({
    session: "test",
    multidevice: true,
}).then(function (client) { return start(client); })
    .catch(function (erro) {
    console.log(erro);
});
// const compareTime = (hour, minute, second) =>
// 	new Date(Date.now()).getHours() === Number(hour) &&
// 	new Date(Date.now()).getMinutes() === Number(minute) &&
// 	new Date(Date.now()).getSeconds() === Number(second);
var GM = [
    "☀", "✨", "🌞", "👾"
];
var random = Math.floor(Math.random() * GM.length);
var start = (function (client) {
    client.onMessage(function (msg) {
        console.log(msg, msg.body);
        if (msg.body.toLowerCase().includes('gm') || msg.body.toLowerCase().includes('good morning')) {
            client.reply(msg.from, 'Good Morning ' + GM[random] + " !!!", msg.id);
        }
    });
});
