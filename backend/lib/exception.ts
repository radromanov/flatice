// Available errors
const EXCEPTION_TYPE = {
  "Bad Request": 400,
  Unauthorized: 401,
  Forbidden: 403,
  "Not Found": 404,
  "Method Not Allowed": 405,
  Conflict: 409,
  "Unprocessable Entity": 422,
  "Internal Server Error": 500,
  "Not Implemented": 501,
  "Bad Gateway": 502,
  "Service Unavailable": 503,
} as const;

// Type aliases
type Type = keyof typeof EXCEPTION_TYPE;
type Status = (typeof EXCEPTION_TYPE)[keyof typeof EXCEPTION_TYPE];

export default class Exception extends Error {
  message: string;
  exception: Type;
  status: Status;
  path: string | null;

  constructor(message: string, exception: Type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, Exception.prototype);

    this.message = message;
    this.exception = exception;
    this.status = EXCEPTION_TYPE[exception];
    this.path =
      process.env.NODE_ENV === "development"
        ? this.stack || "Unknown stack trace"
        : null;
  }

  serialize() {
    return {
      message: this.message,
      exception: this.exception,
      status: this.status,
      path: this.path,
    };
  }
}
