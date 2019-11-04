import { saveAs } from 'file-saver';
import { getConfig } from '../config';

const sha512 = async (str): Promise<string> => {
  const buf = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(str));
  const hashArray = Array.from(new Uint8Array(buf));
  const hashHex: string = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

/**
 * Download declaration pdf
 */
export const downloadPdf = async ({
  login,
  password,
  submitId,
  baseUrl,
}: {
  login: string;
  password: string;
  submitId: string;
  baseUrl?: string;
}): Promise<void> => {
  baseUrl = baseUrl || getConfig().url;
  if (!baseUrl) {
    throw new Error('Steuerbot-Browser-SDK: No base url given');
  }
  if (!submitId) {
    throw new Error('Steuerbot-Browser-SDK: No submit id given');
  }
  const url = baseUrl + `/declaration/download?sid=${submitId}`;
  const hash = await sha512(password);
  const authHash = btoa(`${login}:${hash}`);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('Authorization', `Basic ${authHash}`);
  xhr.onerror = () => {
    throw new Error('Steuerbot-Browser-SDK: Error fetching pdf');
  };
  xhr.onload = (): void => {
    try {
      const { filename, data } = JSON.parse(xhr.response);
      saveAs(new Blob([atob(data)], { type: 'application/pdf' }), filename);
    } catch {
      throw new Error('Steuerbot-Browser-SDK: Error saving pdf');
    }
  };
  xhr.send();
};
