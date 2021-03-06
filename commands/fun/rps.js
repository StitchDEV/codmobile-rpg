const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = (client, message, args) => {

  const errorArgs = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`ð¢ Erreur !`)
    .addField(`\`${args[0]}\` n'est pas dÃ©fini !`, `Merci d'utiliser la commande \`rps\` avec *pierre*, *papier* ou *ciseaux* !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const rps = ['pierre', 'papier', 'ciseaux', 'rock', 'paper', 'scissors', 'â°ï¸', 'ð', 'âï¸', 'r', 'p', 's'];
  if (!rps.includes(args[0])) return message.channel.send(errorArgs);

  const emote = {
    'pierre': 'â°ï¸',
    'â°ï¸': 'â°ï¸',
    'rock' : 'â°ï¸',
    'r': 'â°ï¸',

    'papier': 'ð',
    'ð': 'ð',
    'paper': 'ð',
    'p': 'ð',

    'ciseaux': 'âï¸',
    'âï¸': 'âï¸',
    'scissors': 'âï¸',
    's': 'âï¸',
  };

  const chooseArr = ["â°ï¸", "ð", "âï¸"];
  const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

  const embed = new MessageEmbed()
    .setColor('#32a4a8')
    .setAuthor(`â°ï¸ Pierre, Papier, Ciseaux !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if ((emote[args[0]] === 'â°ï¸' && botChoice === 'âï¸') || (emote[args[0]] === 'ð' && botChoice === 'â°ï¸') || (emote[args[0]] === 'âï¸' && botChoice === 'ð')) embed.addField(`Tu as gagnÃ© ! Bravo ð`, `${emote[args[0]]} contre ${botChoice}`, false);
  else if (emote[args[0]] === botChoice) embed.addField(`ÃgalitÃ© ! Sommes-nous connectÃ©s ? ð§`, `${emote[args[0]]} contre ${botChoice}`, false);
  else embed.addField(`Tu as perdu ! Je pense Ãªtre trop fort pour toi ! ð¤ `, `${emote[args[0]]} contre ${botChoice}`, false);

  return message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.FUN.RPS;