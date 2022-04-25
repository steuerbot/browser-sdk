import { HttpError } from '..';

interface HttpOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, any>;
  query?: Record<string, any>;
  body?: Record<string, any>;
}

export const fetchResponse = async (url, { method = 'GET', headers, query, body }: HttpOptions = {}): Promise<any> => {
  const xhr = new XMLHttpRequest();
  if (query) {
    const dataArray = [];
    for (const key in query) {
      dataArray.push(`${key}=${encodeURIComponent(query[key])}`);
    }
    url += `?${dataArray.join('&')}`;
  }
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
  xhr.send(body ? JSON.stringify(body) : undefined);
  // wait for download to finish
  return promise;
};

export const fetchJSON = async (url, options: HttpOptions = {}): Promise<any> => {
  const response = await fetchResponse(url, options);
  return JSON.parse(response);
};
