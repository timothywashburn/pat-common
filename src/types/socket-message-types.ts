export enum SocketMessageType {
    // client bound packets
    CLIENT_HEARTBEAT_ACK = 'client_heartbeat_ack',
    CLIENT_VERIFY_EMAIL_RESPONSE = 'client_verify_email_response',

    // server bound packets
    SERVER_HEARTBEAT = 'server_heartbeat',
    SERVER_VERIFY_EMAIL_CHECK = 'server_verify_email_check',
}

export interface SocketMessage<T> {
    type: SocketMessageType;
    userId: string;
    data: T;
}

export interface HeartbeatData {
    timestamp: number;
}