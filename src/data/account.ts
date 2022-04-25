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

/**
 * Request change of email
 * @param {string} newEmail - The new user email
 * @param {string} token - The token needed to execute this action
 * @param {string} [baseUrl] - The base url for the api
 */
export const requestEmailChange = async ({
  newEmail,
  token,
  baseUrl,
}: {
  newEmail: string;
  token: string;
  baseUrl?: string;
}) => {
  if (!newEmail) {
    throw new Error('Steuerbot-Browser-SDK: No newEmail given');
  }
  if (!token) {
    throw new Error('Steuerbot-Browser-SDK: No token given');
  }
  baseUrl = baseUrl || getConfig().url;
  if (!baseUrl) {
    throw new Error('Steuerbot-Browser-SDK: No baseUrl given');
  }
  return await fetchResponse(`${baseUrl}/passwordless/email/confirm/${token}`, {
    method: 'PATCH',
    body: {
      newEmail,
    },
  });
};

/**
 * Delete account
 * @param {string}  token - The token needed to execute this action
 * @param {boolean} [force] - Force account deletion if there are already submissions
 * @param {string}  [baseUrl] - The base url for the api
 */
export const deleteAccount = async ({
  token,
  baseUrl,
  force,
}: {
  token: string;
  baseUrl?: string;
  force?: boolean;
}) => {
  if (!token) {
    throw new Error('Steuerbot-Browser-SDK: No token given');
  }
  baseUrl = baseUrl || getConfig().url;
  if (!baseUrl) {
    throw new Error('Steuerbot-Browser-SDK: No baseUrl given');
  }
  return await fetchResponse(`${baseUrl}/passwordless/delete/confirm/${token}`, {
    method: 'DELETE',
    query: {
      force,
    },
  });
};

/**
 * Delete password
 * @param {string}  token - The token needed to execute this action
 * @param {string}  [baseUrl] - The base url for the api
 */
export const deletePassword = async ({ token, baseUrl }: { token: string; baseUrl?: string }) => {
  if (!token) {
    throw new Error('Steuerbot-Browser-SDK: No token given');
  }
  baseUrl = baseUrl || getConfig().url;
  if (!baseUrl) {
    throw new Error('Steuerbot-Browser-SDK: No baseUrl given');
  }
  return await fetchResponse(`${baseUrl}/password/delete/confirm/${token}`, {
    method: 'DELETE',
  });
};

/**
 * Confirm email
 * @param {string}  token - The token needed to execute this action
 * @param {string}  [baseUrl] - The base url for the api
 */
export const confirmEmail = async ({ token, baseUrl }: { token: string; baseUrl?: string }) => {
  if (!token) {
    throw new Error('Steuerbot-Browser-SDK: No token given');
  }
  baseUrl = baseUrl || getConfig().url;
  if (!baseUrl) {
    throw new Error('Steuerbot-Browser-SDK: No baseUrl given');
  }
  return await fetchResponse(`${baseUrl}/email`, {
    method: 'GET',
    query: {
      confirm: token,
      deeplink: true,
    },
  });
};
