/**
 * Converts a value to an Error instance.
 * If the value is already an Error, it is returned as is.
 * If the value is not an Error, it is converted to a string using JSON.stringify.
 * If the conversion fails, a default error message is used.
 * The resulting Error instance contains the stringified value as part of its error message.
 * @param value - The value to be converted to an Error instance.
 * @returns The resulting Error instance.
 */
export function ensureError(value: unknown): Error {
  if (value instanceof Error) return value;

  let stringified: string;
  try {
    stringified = JSON.stringify(value);
  } catch {
    stringified = '[Unable to stringify the thrown value]';
  }

  const errorMessage = `This value was thrown as is, not through an Error: ${stringified}`;
  return new Error(errorMessage);
}
