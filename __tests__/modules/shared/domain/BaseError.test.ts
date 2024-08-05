import { describe, expect, it } from 'bun:test';

import { BaseError } from '@modules/shared/domain/BaseError';

describe('BaseError', () => {
  // Creating an instance of BaseError with a message should set the message and name properties correctly
  it('should set the message and name properties correctly when creating an instance with a message', () => {
    const error = new BaseError('Test error');
    expect(error.message).toBe('Test error');
    expect(error.name).toBe('BaseError');
  });

  // Creating an instance of BaseError with a cause and context in options should set the cause and context properties correctly
  it('should set the cause and context properties correctly when creating an instance with a cause and context in options', () => {
    const causeError = new Error('Cause error');
    const contextData = { key: 'value' };

    const error = new BaseError('Test error', { cause: causeError, context: contextData });

    expect(error.cause).toBe(causeError);
    expect(error.context).toBe(contextData);
  });

  // Creating an instance of BaseError without options should set the cause and context properties to undefined
  it('should set the cause and context properties to undefined when creating an instance without options', () => {
    const error = new BaseError('Test error');

    expect(error.cause).toBeUndefined();
    expect(error.context).toBeUndefined();
  });
});
