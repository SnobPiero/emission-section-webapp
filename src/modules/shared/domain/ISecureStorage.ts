export interface ISecureStorage {
  setObj: <T>(key: string, value: T) => Promise<void>;
  setString: (key: string, value: string) => Promise<void>;
  getObj: <T>(key: string) => Promise<T | null>;
  getString: (key: string) => Promise<string | null>;
  exist: (key: string) => Promise<boolean>;
  delete: (key: string) => Promise<void>;
  clearAll: () => Promise<void>;
}
