require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
 intents: [
 IntentsBitField.Flags.Guilds,
 IntentsBitField.Flags.GuildMembers,
 IntentsBitField.Flags.GuildMessages,
 IntentsBitField.Flags.MessageContent,
 ],
});

client.on('ready', (c) => {
console.log(`✅ ${c.user.tag} is online.`);
});  

client.on('interactionCreate', (interaction)=>{
    if(!interaction.isCommand())
        return;
    
    if(interaction.commandName==='hey'){
        interaction.reply('hey!');
    } 
    
    if(interaction.commandName==='ping'){
        interaction.reply('Pong!');
    }

    if(interaction.commandName==='add'){
        const firstNumber = interaction.options.get('first-number').value;
        const secondNumber = interaction.options.get('second-number').value;
        interaction.reply(` Sum of ${firstNumber} and ${secondNumber} is ${firstNumber+secondNumber}`);
    }
})

client.login(process.env.TOKEN);