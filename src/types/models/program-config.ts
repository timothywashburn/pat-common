export interface ProgramConfigData {
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
    expo: {
        token: string;
    },
    redis: {
        url: string;
    }
    updatedAt: Date;
    createdAt: Date;
}