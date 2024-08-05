import { captureException } from '@sentry/nextjs';
import { singleton } from 'tsyringe';

import type { ILogger } from '../../domain/ILogger';

@singleton()
export default class SentryLogger implements ILogger {
  constructor() {}

  debug<T, O>(message: T, ...optionalParams: O[]) {
    console.debug(message, ...optionalParams);
  }

  info<T, O>(message: T, ...optionalParams: O[]) {
    console.info(message, ...optionalParams);
  }

  warning<T, O>(message: T, ...optionalParams: O[]) {
    console.warn(message, ...optionalParams);
  }

  log<T, O>(message: T, ...optionalParams: O[]) {
    console.log(message, ...optionalParams);
  }

  error<O>(error: Error, ...optionalParams: O[]) {
    console.error(error, ...optionalParams);
    captureException({ exception: error });
  }
}
