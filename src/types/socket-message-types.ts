export enum SocketMessageType {
    // client bound packets
    CLIENT_HEARTBEAT_ACK = 'client_heartbeat_ack',
    CLIENT_CHECK_EMAIL_RESPONSE = 'client_check_email_response',

    // server bound packets
    SERVER_HEARTBEAT = 'server_heartbeat',
    SERVER_CHECK_EMAIL = 'server_check_email',
}

export interface SocketMessage<T> {
    type: string;
    userId: string;
    data: T;
}