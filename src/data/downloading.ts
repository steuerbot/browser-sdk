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

export enum PdfError {
  INVALID_PARAMS = 'invalid_params',
  INVALID_RESPONSE = 'invalid_response',
  DOWNLOAD_ERROR = 'download_error',
}

/**
 * Download declaration pdf
 * @param login
 * @param password
 * @param successHandler
 * @param errorHandler
 */
export const downloadPdf = async (
  login: string,
  password: string,
  successHandler: () => void,
  errorHandler: (err: PdfError) => void,
): Promise<void> => {
  const urlParams = new URLSearchParams(window.location.search);
  const submitId = urlParams.get(submitIdParamKey);
  const baseUrl = urlParams.get(targetParamKey) || defaultBaseUrl;

  if (!baseUrl || !submitId) {
    errorHandler(PdfError.INVALID_PARAMS);
  }
  const url = baseUrl + `/declaration/download?sid=${submitId}`;
  const hash = await sha512(password);
  const authHash = btoa(`${login}:${hash}`);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('Authorization', `Basic ${authHash}`);
  xhr.onerror = () => {
    errorHandler(PdfError.DOWNLOAD_ERROR);
  };
  xhr.onload = (): any => {
    try {
      const { filename, data } = JSON.parse(xhr.response);
      saveAs(new Blob([atob(data)], { type: 'application/pdf' }), filename);
      successHandler();
    } catch {
      errorHandler(PdfError.INVALID_RESPONSE);
    }
  };
  xhr.send();
};
