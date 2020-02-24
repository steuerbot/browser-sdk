import { saveAs } from 'file-saver';
import { getConfig } from '../config';
import { base64toBlob, sha512 } from './decoding';
import { fetchJSON } from './http';

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

  const { filename, data } = await fetchJSON(url, {
    headers: {
      Authorization: `Basic ${authHash}`,
    },
  });
  try {
    saveAs(base64toBlob(data, 'application/pdf'), filename);
  } catch {
    throw new Error('Steuerbot-Browser-SDK: Error saving pdf');
  }
};
