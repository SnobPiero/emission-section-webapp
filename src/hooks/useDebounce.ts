'use client';

// eslint-disable @typescript-eslint/no-explicit-any

type DebouncedFunction<T extends (...args: any[]) => void> = (...args: Parameters<T>) => void;

const useDebounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): DebouncedFunction<T> => {
  let timeoutId: NodeJS.Timeout;

  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
export default useDebounce;
