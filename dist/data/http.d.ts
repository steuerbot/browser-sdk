interface HttpOptions {
    method?: string;
    headers?: {
        [key: string]: any;
    };
}
export declare const fetchResponse: (url: any, { method, headers }?: HttpOptions) => Promise<any>;
export declare const fetchJSON: (url: any, options?: HttpOptions) => Promise<any>;
export {};
