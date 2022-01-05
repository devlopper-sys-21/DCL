import { ICommand } from "wokcommands";
import { GuildMember, MessageEmbed } from "discord.js";

export default {
  category: "rules",
  description: "Find info on a user",
  permissions: ["ADMINISTRATOR"],
  slash: "both",
  testOnly: true,

  callback: async ({ client, message, interaction, guild }) => {
   

    const embed = new MessageEmbed()
      .setColor("#D72E4D")
      .setTitle("📜 Rules")
      .setDescription("https://discord.com/terms\nhttps://discord.com/guidelines\n\n**Regulation 1: Respect.**\nIn this server, we expect that each member of our community treat others and staff members with utmost respect. Though you may have different opinions on a subject, we ask that you remain civil.\n\n**Regulation 2: Spamming.**\nWe define (spamming) as sending multiple messages in a short period of time. Depending on the gravity of the case, it may lead to a warn/mute\n\n**Regulation 3: Advertising.**\nWe define (advertising) as sending links to other servers, or sending links to YouTube or other media channels. If you carry this out without permission, you will be muted.\n\n**Regulation 4: Filter Bypassing.**\nWe use **Dyno and Carl** bot to help enforce our regulations. The bot has an advertisement and spam detection. Bypassing, or attempting to bypass will warrant a sanction\n\n**Regulation 5: Misusage of Bots.**\nMisusing any of our bots in a way that is disruptive to staff or others is not allowed. We ask that all commands go into the bot commands channel.\n\n**Regulation 6: Pornography.**\nAny sort of pornography or sexual references will be moderated heavily, and may result in an immediate ban in majority of the cases.\n\n After reading rules, please go to <#922162336347873291> to get your roles!")
      .setImage('https://media.discordapp.net/attachements/722152398038237206/928027494781710376/server_rules.png')
      .setFooter("*disobeying any of the following will result as a ban, actions in this server are strict as we act and aim for a friendly, and fun community for everyone to enjoy.*")
    return embed;
  },
} as ICommand;