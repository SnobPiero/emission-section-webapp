import { describe, expect, it } from 'bun:test';

import { ensureError } from '@modules/shared/infra/error/ensureError';

describe('ensureError', () => {
  it('should return the same Error instance if the input is an Error', () => {
    const inputError = new Error('Test error');
    const result = ensureError(inputError);

    expect(result).toBe(inputError);
  });

  it('should return a new Error instance with stringified value if the input is not an Error', () => {
    const nonErrorValue = { key: 'value' };
    const result = ensureError(nonErrorValue);

    expect(result).toBeInstanceOf(Error);
    expect(result.message).toContain(JSON.stringify(nonErrorValue));
  });

  it('should handle non-JSON-stringifiable values and return an Error instance', () => {
    const nonStringifiableValue = { circularReference: {} };
    nonStringifiableValue.circularReference = nonStringifiableValue;

    const result = ensureError(nonStringifiableValue);

    expect(result).toBeInstanceOf(Error);
    expect(result.message).toContain('[Unable to stringify the thrown value]');
  });
});
