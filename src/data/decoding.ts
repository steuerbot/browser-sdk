export const sha512 = async (str): Promise<string> => {
  const buf = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(str));
  const hashArray = Array.from(new Uint8Array(buf));
  const hashHex: string = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

/**
 * Create a blob out of a base64 string
 * @link https://stackoverflow.com/a/16245768/2422977
 *
 * @param {string} b64Data
 * @param {string} [contentType]
 * @param {number} [sliceSize]
 */
export const base64toBlob = (b64Data: string, contentType = '', sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};
