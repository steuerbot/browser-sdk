interface HttpOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    headers?: Record<string, any>;
    query?: Record<string, any>;
    body?: Record<string, any>;
}
export declare const fetchResponse: (url: any, { method, headers, query, body }?: HttpOptions) => Promise<any>;
export declare const fetchJSON: (url: any, options?: HttpOptions) => Promise<any>;
export {};
