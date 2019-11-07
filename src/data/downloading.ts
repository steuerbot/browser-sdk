import { saveAs } from 'file-saver';
import { getConfig } from '../config';
import { base64toBlob } from './decoding';

const sha512 = async (str): Promise<string> => {
  const buf = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(str));
  const hashArray = Array.from(new Uint8Array(buf));
  const hashHex: string = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

/**
 * Download declaration pdf
 * @param {Object} options - Options object
 * @param {string} username - The username
 * @param {string} password - The password
 * @param {string} submitId - The submit identifier
 * @param {string} [baseUrl] - The base url for the api
 */
export const downloadPdf = async ({
  username,
  password,
  submitId,
  baseUrl,
}: {
  username: string;
  password: string;
  submitId: string;
  baseUrl?: string;
}): Promise<void> => {
  if (!username) {
    throw new Error('Steuerbot-Browser-SDK: No username given');
  }
  if (!password) {
    throw new Error('Steuerbot-Browser-SDK: No password given');
  }
  if (!submitId) {
    throw new Error('Steuerbot-Browser-SDK: No submitId given');
  }
  baseUrl = baseUrl || getConfig().url;
  if (!baseUrl) {
    throw new Error('Steuerbot-Browser-SDK: No baseUrl given');
  }
  const url = baseUrl + `/declaration/download?sid=${submitId}`;
  const hash = await sha512(password);
  const authHash = btoa(`${username}:${hash}`);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('Authorization', `Basic ${authHash}`);
  const promise = new Promise((resolve, reject) => {
    xhr.onerror = (): void => {
      reject('Steuerbot-Browser-SDK: Error fetching pdf');
    };
    xhr.onload = (): void => {
      try {
        const { filename, data } = JSON.parse(xhr.response);
        saveAs(base64toBlob(data, 'application/pdf'), filename);
        resolve();
      } catch {
        reject('Steuerbot-Browser-SDK: Error saving pdf');
      }
    };
  });
  xhr.send();
  // wait for download to finish
  await promise;
};
