const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('SuuDU356pl'))

app.listen(port, () =>
console.log('Connected')
);


///coded by : Ra3d🍁#9999 - AbdulElah#0437 - Ln,Muziky#8956
const Discord = require('discord.js');
const client = new Discord.Client();
const idChannel = "994945017854578742";
const prefix = "mg/";//برفكس حقك

///coded by : Ra3d🍁#9999 - AbdulElah#0437 - Ln,Muziky#8956
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(">| Stats :-");
  console.log(`Servers : > " ${client.guilds.cache.size} " `);
  console.log(`Users : > " ${client.users.cache.size} " `);
  console.log(`channels : > " ${client.channels.cache.size} " `);
  console.log(">| Date :");
  console.log(`> ${new Date()}`);
  console.log(">| Name :");
  console.log(`> ${client.user.username}`);
  client.user.setActivity('⚡ | ' + prefix  + "help");
});
 

client.on("message", async message => {

  if(message.channel.id === idChannel){
    
  
const devs = "nothing";//اي دي حقك
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.toLowerCase().startsWith(prefix + "help".toLowerCase())) { 
    let help = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("⚠️ MEGA-TAX ⚠️")
      .setDescription("**How to use in details!**")
     .addField("Tax:", "**" + prefix + "tax**")
    .addField("Wa:", "**" + prefix + "wa**")
    .setFooter("ByteBuf#3270")
    
    message.channel.send(help);
  }
///coded by : Ra3d🍁#9999 - AbdulElah#0437 - Ln,Muziky#8956
  if (message.content.toLowerCase().startsWith(prefix + "wa".toLowerCase())) { 
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)


    
    
    if (!args2) return message.channel.send(":x: | **You must put a number!**");

    if (isNaN(args2)) return message.channel.send(":x: | **Something worng!**");
    
    if (args2 < 1) return message.channel.send(":x: | **The number must be larger then 1");
    
    if (args2 == 1) return message.channel.send(":white_check_mark: | **The final cost is 1");
    
    let embed = new Discord.MessageEmbed()
    .setTitle("**⚠️ MEGA-TAX ⚠️**")
    .setColor("RANDOM")
      .addField("🏧 ضريبة الوسيط", "**" + tax2 + "**")
      .addField("🏧 ضريبة التحويل", "**" + tax3 + "**")
      .addField("🏧 المبلغ المطلوب تحوليه", "**" + tax4 + "**")
    .setFooter("ByteBuf#3270")
    message.channel.send(embed);
  }



///coded by : Ra3d🍁#9999 - AbdulElah#0437 - Ln,Muziky#8956
  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) { 
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    
    if (!args2) return message.channel.send(":x: | **You need to put a number!**");
    
    if (isNaN(args2)) return message.channel.send(":x: | **You need to put number!**");
    if (args2 < 1) return message.channel.send(":x: | **The number must be larger then 1");
    
    if (args2 == 1) return message.channel.send(":x: | **Please selcet number larger then 1!**");

    
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
    .setTitle("⚠️ Unix-Taxs")
    .setDescription("**Processed succsefully worked! see details**")
    .addField("💳 Credits", "**" + tax + "**")
    .addField("⚠️ Should do", "** To send the current credits you should transfer " + tax + "!**")
    .setFooter("ByteBuf#3270")

  message.channel.send(embed)
    
  }

}

});




client.login(process.env.TOKEN);
