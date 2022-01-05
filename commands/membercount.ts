import { GuildMember, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";


export default {
    category: "Moderation",
    description: 'Kicks a user',


    slash: 'both',

    callback: ({ message, interaction, args, guild }) => {
        const embed = new MessageEmbed()
        .setColor("#D72E4D")
      .setTitle("Membercount")
      .setDescription(`${guild?.memberCount}`)
      .setTimestamp(Date.now());
    return embed;
    }
} as ICommand