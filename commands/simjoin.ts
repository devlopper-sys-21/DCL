import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Simluates a join.',
    permissions: ['ADMINISTRATOR'],

    slash: 'both',
    testOnly: false,

    callback: ({ member, client }) => {
        client.emit('guildMemberAdd', member)
        return 'Join simulated!'
    },
} as ICommand