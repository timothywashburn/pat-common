export interface ProgramConfigData {
    _requiredBuildVersions: {
        iOS: number;
        android: number;
    }
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
    redisUrl: string;
    updatedAt: Date;
    createdAt: Date;
}