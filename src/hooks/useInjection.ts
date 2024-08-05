'use client';

import type { InjectionToken } from 'tsyringe';

import type { ILogger } from '@modules/shared/domain/ILogger';
import type { IStorage } from '@modules/shared/domain/IStorage';

import container from '@di/config';
import { TYPES } from '@di/types';

const useInjection = () => {
  const resolve =
    <T>(token: InjectionToken<T>) =>
    () =>
      container.resolve(token);

  return {
    logger: container.resolve<ILogger>(TYPES.ILogger),
    storage: container.resolve<IStorage>(TYPES.IStorage),
  };
};

export default useInjection;
