/**
 * Reset user password
 * @param {string} id - The user identifier
 * @param {string} password - The new password of user
 * @param {string} [baseUrl] - The base url for the api
 */
export declare const resetPassword: ({ id, password, baseUrl }: {
    id: string;
    password: string;
    baseUrl?: string;
}) => Promise<void>;
