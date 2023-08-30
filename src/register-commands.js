require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },    
    
    {
        name: 'ping',
        description: 'replies with Pong!',
    },

    {
        name: 'add',
        description: 'adds two numbers',
        options: [
            {
                name: 'first-number',
                description: 'first number',
                type: ApplicationCommandOptionType.Number,
                required: true,
                choices: [
                    { name: 'One', value: '1' },
                    { name: 'Two', value: '2' },
                ]
            },

            {
                name: 'second-number',
                description: 'second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ],
    },

    {
        name: 'embed',
        description: 'Sends an embed!',
    },
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try{
      console.log('Registering slash commands...');

      await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
        {body: commands},
      )
      console.log('slash commands were registered successfully.');
    }
    catch(error){
        console.error(`There was an error: ${error}`);
    }
})();;