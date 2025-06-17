export interface VersionRequest {
    clientVersion: string;
}

export interface VersionResponse {
    serverVersion: number;
    minClientVersion: number;
    updateRequired: boolean;
}