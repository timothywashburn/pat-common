export interface GetThoughtsResponse {
    thoughts: Array<{
        id: string;
        content: string;
    }>;
}