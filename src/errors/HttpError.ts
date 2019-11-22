export function HttpError(status) {
  this.name = 'HttpError';
  this.message = `HttpError ${status}`;
  this.statusCode = status;
}
HttpError.prototype = Error.prototype;
