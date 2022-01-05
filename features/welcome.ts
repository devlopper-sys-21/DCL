import { Client, MessageEmbed, TextChannel, GuildMember } from 'discord.js'
import welcomeSchema from '../models/welcome-schema'

// 1. Load all the data when the bot starts up
// 2. Load and store the data only when we needed

const welcomeData = {} as {
    // guildID : [channel, message]
    [key: string] : [TextChannel, string]
}

export default (client: Client) => {
    client.on('guildMemberAdd', async member => {
        const { guild, id } = member

        let data = welcomeData[guild.id]

        if (!data) {
            const results = await welcomeSchema.findById(guild.id)
            if(!results) {
                return
            }

            const { channelId, text } = results
            const channel = guild.channels.cache.get(channelId) as TextChannel
            data = welcomeData[guild.id] = [channel, text]
        }


        const embed = new MessageEmbed()
        .setAuthor(`${member?.displayName} (${member?.user.tag}) joined!`, `${member.displayAvatarURL({ size: 4096, dynamic: true })}`)
        .setTitle(`👋 Hey!`)
        .setDescription(`You are the member #${guild.memberCount}\n\nDeluxe Competitive is a League Based on many games with scrims and tournaments for YOU to compete in!\n\n📜 | Please read the server rules before intering the server ➔ <#906252529254428743>\n\n🏆 | If you wish to participate in any scrims or tournaments, checkout ➔ <#922162336347873291>\n\n💎 | Please join the roblox group to claim your rewards if you ever win ➔ https://www.roblox.com/groups/12804582/Deluxe-Competitive#!/store`)
        .setThumbnail(`${member.displayAvatarURL({ size: 4096, dynamic: true })}`)
        .setImage("https://media.discordapp.net/attachments/861563466984194062/928020670162555000/WELCOME_TO_DCL.png")
        .setColor("#D72E4D")
        .setTimestamp(Date.now())


        data[0].send({
            content: data[1].replace(/@/g, `<@${id}>`),
            embeds: [embed]
        })
    })
    
}

export const config = {
    displayName: 'Welcome Channel',
    dbName: 'WELCOME_CHANNEL',
}