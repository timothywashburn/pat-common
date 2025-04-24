export interface GetPeopleResponse {
    people: Array<{
        id: string;
        name: string;
        properties: Array<{
            key: string;
            value: string;
        }>;
        notes: Array<{
            content: string;
            createdAt: string;
            updatedAt: string;
        }>;
    }>;
}