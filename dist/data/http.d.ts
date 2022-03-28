interface HttpOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    headers?: Record<string, any>;
    data?: Record<string, any>;
}
export declare const fetchResponse: (url: any, { method, headers, data }?: HttpOptions) => Promise<any>;
export declare const fetchJSON: (url: any, options?: HttpOptions) => Promise<any>;
export {};
