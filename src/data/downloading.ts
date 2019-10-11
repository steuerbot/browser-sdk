import { saveAs } from 'file-saver';
import { getConfig } from '../config';

const defaultBaseUrl = getConfig().url;

const submitIdParamKey = 'sid';
const targetParamKey = 'target';

const sha512 = async (str): Promise<string> => {
  const buf = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(str));
  const hashArray = Array.from(new Uint8Array(buf));
  const hashHex: string = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};
const showErrorAlert = (): void => alert('Fehler');

/**
 * Download declaration pdf
 * @param login
 * @param password
 */
export const downloadPdf = async (login, password): Promise<void> => {
  const urlParams = new URLSearchParams(window.location.search);
  const submitId = urlParams.get(submitIdParamKey);
  const baseUrl = urlParams.get(targetParamKey) || defaultBaseUrl;
  if (!baseUrl || !submitId) {
    showErrorAlert();
    return;
  }
  const url = baseUrl + `/declaration/download?sid=${submitId}`;
  const hash = await sha512(password);
  const authHash = btoa(`${login}:${hash}`);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('Authorization', `Basic ${authHash}`);
  xhr.onerror = showErrorAlert;
  xhr.onload = (): void => {
    try {
      const { filename, data } = JSON.parse(xhr.response);
      saveAs(new Blob([atob(data)], { type: 'application/pdf' }), filename);
    } catch {
      showErrorAlert();
      return;
    }
  };
  xhr.send();
};
