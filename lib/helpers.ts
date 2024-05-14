import { ID_CHARS, ID_LEN, QueryOpts } from ".";

export function generateId(
  charSet: string = ID_CHARS,
  length: ID_LEN = ID_LEN
) {
  function pickRandomChar() {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    const randomChar = ID_CHARS[randomIndex];

    return randomChar!;
  }

  let id = "";
  let lastChar = "";

  for (let i = 0; i < length; i++) {
    let randomChar = pickRandomChar();

    while (randomChar === lastChar) {
      randomChar = pickRandomChar();
    }

    lastChar = randomChar;
    id += randomChar;
  }

  return id;
}

/**
 * Makes an HTTP request to the specified URL.
 * @param url The URL to make the HTTP request to.
 * @returns A promise that resolves to the response data.
 */
export async function query<T>(url: string): Promise<T>;

/**
 * Makes an HTTP request to the specified URL with additional options.
 * @param url The URL to make the HTTP request to.
 * @param opts Additional options for customizing the request.
 *             - `method` The HTTP method to use (defaults to "GET").
 *             - `body` The request body.
 *             - `headers` Optional headers. Defaults to `Content-Type: application/json`.
 *             - `schema` Optional Zod schema for validating the response data.
 * @returns A promise that resolves to the response data, or null if schema validation fails.
 */
export async function query<T>(url: string, opts: QueryOpts<T>): Promise<T>;

/**
 * Implementation of the query function.
 * @param url The URL to make the HTTP request to.
 * @param opts Additional options for customizing the request.
 * @returns A promise that resolves to the response data, or null if schema validation fails.
 */
export async function query<T>(url: string, opts?: QueryOpts<T>): Promise<T> {
  opts = opts || {};

  const response = await fetch(url, {
    body: opts.body ? JSON.stringify(opts.body) : undefined,
    method: opts.method || "GET",
    headers: opts.headers
      ? { ...opts.headers, "Content-Type": "application/json" }
      : { "Content-Type": "application/json" },
  });
  const data = (await response.json()) as T;

  return data;
}
