const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
})
client.on('message', message => {
var prefix = "7";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id ==  501400332597723137) return;


if (message.content.startsWith(prefix + 'ply')) {
if (message.author.id !== '501400332597723137') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else

 
if (message.content.startsWith(prefix + 'st')) {
if (message.author.id !== '501400332597723137') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else
if (message.content.startsWith(prefix + 'wt')) {
if (message.author.id !== '501400332597723137') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
}

 });


client.login(process.env.BOT_TOKEN);
