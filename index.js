const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Welcome Kaixin Notif")
})

app.listen(3000, () => {
  console.log("Project Siap")
})

const DBL = require('dblapi.js')
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
 console.log("Kaixin Bot Ready")
})

const dbl = new DBL(process.env.TOPGG_TOKEN, { webhookPort: 4000, webhookAuth: process.env.TOPGG_AUTH });
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  const channel = client.channels.cache.get(process.env.POST_CHANNEL)
  const embed = new Discord.MessageEmbed()
  .setTitle("__Thanks for votting me:-__")
  .setDescription(`༺═──────────────────────═༻\n⭐ **Voted By:-**\n<@${vote.user}>\n\n🔗 **Vote Link:-**\n${process.env.VOTE_LINK}\n\n💖 **You can vote again in 12hour!** 💖\n༺═──────────────────────═༻`)
  .setImage(process.env.IMAGE_LINK)
  .setFooter("❤Your vote means a lot!❤")
  .setColor("GREEN")
  channel.send(embed)
});
client.login()