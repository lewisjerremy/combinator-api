export class APIError extends Error {
  public code: number;
  constructor(message = 'something went wrong') {
    super(message);
    this.name = 'APIError';
    this.code = 500;
  }
}
export class AuthenticationError extends APIError {
  constructor(message = 'authentication required') {
    super(message);
    this.name = 'AuthenticationError';
    this.code = 401;
  }
}

export class NotFoundError extends APIError {
  constructor(message = 'resource not found') {
    super(message);
    this.name = 'NotFoundError';
    this.code = 404;
  }
}

export class ServerError extends APIError {
  constructor(message = 'something went wrong') {
    super(message);
    this.name = 'ServerError';
  }
}

export class UnavailableError extends APIError {
  constructor(message = 'service not available') {
    super(message);
    this.name = 'UnavailableError';
    this.code = 503;
  }
}

export class ValidationError extends APIError {
  constructor(message = 'request body invalid') {
    super(message);
    this.name = 'ValidationError';
    this.code = 400;
  }
}
