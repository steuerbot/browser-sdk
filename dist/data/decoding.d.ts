/**
 * Create a blob out of a base64 string
 * @link https://stackoverflow.com/a/16245768/2422977
 *
 * @param {string} b64Data
 * @param {string} [contentType]
 * @param {number} [sliceSize]
 */
export declare const base64toBlob: (b64Data: string, contentType?: string, sliceSize?: number) => Blob;
