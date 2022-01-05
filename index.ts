import DiscordJS from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import mongoose from 'mongoose'
import path from 'path'
dotenv.config()

const { Intents } = DiscordJS

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

client.on('ready', () => {
    const dbOptions = {
    // These are the default values
    keepAlive: true
    }
    console.log("The bot is ready!")

    const wok = new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'features'),
    typeScript: true,
    testServers: ['861563466401316874', "913231437518495774", "906193914418069514"],
    dbOptions,
    mongoUri: process.env.MONGO_URL,
    
  })

  wok.on('databaseConnected', async (connection, state) => {
    const model = connection.models['wokcommands-languages']
  
    const results = await model.countDocuments()
    console.log(results)
  })
  .setDefaultPrefix('$') // Set your prefix here
})

client.login(process.env.TOKEN)