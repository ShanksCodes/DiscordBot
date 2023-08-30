require("dotenv").config();
const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});


const roles = [
    {
      id: '1058030952707784714',
      label: 'Red',
    },
    {
      id: '1058031008655609856',
      label: 'Green',
    },
    {
      id: '1058031040461013093',
      label: 'Blue',
    },
  ];

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("hey!");
  }

  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }

  if (interaction.commandName === "add") {
    const firstNumber = interaction.options.get("first-number").value;
    const secondNumber = interaction.options.get("second-number").value;
    interaction.reply(
      ` Sum of ${firstNumber} and ${secondNumber} is ${
        firstNumber + secondNumber
      }`
    );
  }

  if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Embed Title")
      .setDescription("Embed Description")
      .setColor("Random")
      .addFields({ 
		name: "Field 1", 
		value: "Field 1 Value", 
		inline: true,
	 },{
		name: "Field 2", 
		value: "Field 2 Value", 
		inline: true,
	 });
    interaction.reply({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);
