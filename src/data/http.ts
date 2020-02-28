import { HttpError } from '..';

interface HttpOptions {
  method?: string;
  headers?: { [key: string]: any };
}

export const fetchResponse = async (url, { method = 'GET', headers }: HttpOptions = {}): Promise<any> => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  if (headers) {
    for (const key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }
  }
  const promise = new Promise((resolve, reject) => {
    xhr.onerror = (): void => {
      reject(new HttpError(xhr.status));
    };
    xhr.onload = (): void => {
      if (xhr.status >= 400) {
        reject(new HttpError(xhr.status));
        return;
      }
      resolve(xhr.response);
    };
  });
  xhr.send();
  // wait for download to finish
  return promise;
};

export const fetchJSON = async (url, options: HttpOptions = {}): Promise<any> => {
  const response = await fetchResponse(url, options);
  return JSON.parse(response);
};
