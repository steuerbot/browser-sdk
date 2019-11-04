/**
 * Download declaration pdf
 */
export declare const downloadPdf: ({ login, password, submitId, baseUrl, }: {
    login: string;
    password: string;
    submitId: string;
    baseUrl?: string;
}) => Promise<void>;
