export interface IOpenAQResponse {
    meta: {
        name: string;
        website: string;
        page: number;
        limit: number;
        found: number;
    };
    results: {
        datetime: {
            utc: string;
            local: string;
        };
        value: number;
        coordinates: {
            latitude: number;
            longitude: number;
        };
        sensorsId: number;
        locationsId: number;
    }[];
}
