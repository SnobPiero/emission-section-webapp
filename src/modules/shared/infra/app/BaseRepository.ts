import type { ILogger } from '../../domain/ILogger';
import type { Result } from '../../domain/Result';
import { ensureError } from '../error/ensureError';

abstract class BaseRepository {
  protected logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  handleResult<T, D>(dto: D, adapter: (dto: D) => T): Result<T> {
    try {
      const data = adapter(dto);
      return { success: true, result: data };
    } catch (err) {
      return this.handleErrorResult(err);
    }
  }

  handleErrorResult<T>(err: unknown): Result<T> {
    const error = this.handleError(err);
    return { success: false, error };
  }

  handleErrorBoolean(error: unknown): false {
    this.handleError(error);
    return false;
  }

  private handleError(err: unknown): Error {
    const error = ensureError(err);
    this.logger.error(error);
    return error;
  }
}

export default BaseRepository;
