export interface VersionQuery {
    clientVersion?: number;
}

export interface VersionResponse {
    serverVersion: number;
    minClientVersion: number;
    updateRequired: boolean;
}