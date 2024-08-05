import { describe, expect, it, spyOn } from 'bun:test';

import BasicLogger from '@modules/shared/infra/logger/BasicLogger';

describe('BasicLogger', () => {
  // BasicLogger should log a message with console.debug when debug method is called
  it('should log a message with console.debug when debug method is called', () => {
    const basicLogger = new BasicLogger();
    const consoleDebugSpy = spyOn(console, 'debug');

    basicLogger.debug('Debug message');

    expect(consoleDebugSpy).toHaveBeenCalledWith('Debug message');
  });

  // BasicLogger should log a message with console.info when info method is called
  it('should log a message with console.info when info method is called', () => {
    const basicLogger = new BasicLogger();
    const consoleInfoSpy = spyOn(console, 'info');

    basicLogger.info('Info message');

    expect(consoleInfoSpy).toHaveBeenCalledWith('Info message');
  });

  // BasicLogger should log a message with console.warn when warning method is called
  it('should log a message with console.warn when warning method is called', () => {
    const basicLogger = new BasicLogger();
    const consoleWarnSpy = spyOn(console, 'warn');

    basicLogger.warning('Warning message');

    expect(consoleWarnSpy).toHaveBeenCalledWith('Warning message');
  });

  // BasicLogger should log a message with console.error when error method is called with no optional params
  it('should log a message with console.error when error method is called with no optional params', () => {
    const basicLogger = new BasicLogger();
    const consoleDebugSpy = spyOn(console, 'error');

    const error = new Error('error message');
    basicLogger.error(error);

    expect(consoleDebugSpy).toHaveBeenCalledWith(error);
  });

  // BasicLogger should log a message with console.log when warning method is called with no optional params
  it('should log a message to the console', () => {
    const logger = new BasicLogger();
    const consoleSpy = spyOn(console, 'log');
    const message = 'Test message';

    logger.log(message);

    expect(consoleSpy).toHaveBeenCalledWith(message);
  });

  // BasicLogger should log a message with console.warn when warning method is called with no optional params
  it('should log a message with console.warn when warning method is called with no optional params', () => {
    const basicLogger = new BasicLogger();
    const consoleWarnSpy = spyOn(console, 'warn');

    basicLogger.warning('Warning message');

    expect(consoleWarnSpy).toHaveBeenCalledWith('Warning message');
  });
});
