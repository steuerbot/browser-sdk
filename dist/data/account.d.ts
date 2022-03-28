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
/**
 * Request change of email
 * @param {string} newEmail - The new user email
 * @param {string} token - The token needed to execute this action
 * @param {string} [baseUrl] - The base url for the api
 */
export declare const requestEmailChange: ({ newEmail, token, baseUrl, }: {
    newEmail: string;
    token: string;
    baseUrl?: string;
}) => Promise<any>;
