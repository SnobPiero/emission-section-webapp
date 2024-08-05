export interface IStorage {
  set: <T>(key: string, value: T) => void;
  getString: (key: string) => string | null;
  get: <T>(key: string) => T | null;
  getStore: <T>(key: string) => T | null;
  exist: (key: string) => boolean;
  getAllKeys: () => Array<string>;
  delete: (key: string) => void;
  clearAll: () => void;
}
