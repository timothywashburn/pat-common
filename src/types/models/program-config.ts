export interface ProgramConfigData extends Document {
    dev: {
        authorizedEmails: string[]
    };
    discord: {
        token: string;
        clientId: string;
        guildId: string;
        logChannelId?: string;
    };
    mailjet: {
        apiKey: string;
        secretKey: string;
    };
    updatedAt: Date;
    createdAt: Date;
}