import { fetchResponse } from './http';
import { getConfig } from '../config';
import { sha512 } from './decoding';

/**
 * Reset user password
 * @param {string} id - The user identifier
 * @param {string} password - The new password of user
 * @param {string} [baseUrl] - The base url for the api
 */
export const resetPassword = async ({ id, password, baseUrl }: { id: string; password: string; baseUrl?: string }) => {
  if (!id) {
    throw new Error('Steuerbot-Browser-SDK: No id given');
  }
  if (!password) {
    throw new Error('Steuerbot-Browser-SDK: No password given');
  }
  baseUrl = baseUrl || getConfig().url;
  if (!baseUrl) {
    throw new Error('Steuerbot-Browser-SDK: No baseUrl given');
  }
  const url = baseUrl + `/password/reset`;
  const hash = await sha512(password);
  const authHash = btoa(`${id}:${hash}`);

  await fetchResponse(url, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${authHash}`,
    },
  });
};
