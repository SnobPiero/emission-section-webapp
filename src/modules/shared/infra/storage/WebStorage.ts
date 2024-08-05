import { inject, injectable } from 'tsyringe';

import type { ILogger } from '@modules/shared/domain/ILogger';
import type { IStorage } from '@modules/shared/domain/IStorage';

import { TYPES } from '@di/types';

import { ensureError } from '../error/ensureError';

@injectable()
export class WebStorage implements IStorage {
  private storage: Storage;

  constructor(@inject(TYPES.ILogger) private logger: ILogger) {
    this.storage = localStorage;
  }

  set<T>(key: string, value: T): void {
    return this.storage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string): T | null {
    try {
      const value = this.storage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (err) {
      const error = ensureError(err);
      this.logger.error(error);
      return null;
    }
  }

  getString(key: string): string | null {
    return this.storage.getItem(key);
  }

  exist(key: string): boolean {
    return this.storage.getItem(key) !== null;
  }

  getAllKeys(): string[] {
    return Object.keys(this.storage);
  }

  delete(key: string): void {
    return this.storage.removeItem(key);
  }

  clearAll(): void {
    return this.storage.clear();
  }

  getStore<T>(key: string): T | null {
    try {
      const exist = this.exist(key);
      if (!exist) return null;

      const storage = this.get<{ state: T }>(key);
      return storage ? storage.state : null;
    } catch (err) {
      const error = ensureError(err);
      this.logger.error(error);
      return null;
    }
  }
}

export default WebStorage;
