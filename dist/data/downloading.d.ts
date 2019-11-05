/**
 * Download declaration pdf
 * @param {Object} options - Options object
 * @param {string} username - The username
 * @param {string} password - The password
 * @param {string} submitId - The submit identifier
 * @param {string} [baseUrl] - The base url for the api
 */
export declare const downloadPdf: ({ username, password, submitId, baseUrl, }: {
    username: string;
    password: string;
    submitId: string;
    baseUrl?: string;
}) => Promise<void>;
