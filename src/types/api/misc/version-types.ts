export interface VersionRequest {
    clientVersion: string;
}

export interface VersionResponse {
    serverVersion: string;
    minClientVersion: string;
    updateRequired: boolean;
}