export interface VersionQuery {
    iOSBuildVersion?: number;
    androidBuildVersion?: number;
}

export interface VersionResponse {
    minIOSBuildVersion: number;
    minAndroidBuildVersion: number;
    updateRequired: boolean;
}