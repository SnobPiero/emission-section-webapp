import { container } from 'tsyringe';

import type { ILogger } from '@modules/shared/domain/ILogger';
import type { IStorage } from '@modules/shared/domain/IStorage';
import SentryLogger from '@modules/shared/infra/logger/SentryLogger';
import WebStorage from '@modules/shared/infra/storage/WebStorage';

import { TYPES } from './types';

/* ILogger */
container.register<ILogger>(TYPES.ILogger, { useClass: SentryLogger });

/* Storage */
container.register<IStorage>(TYPES.IStorage, { useClass: WebStorage });

export default container;
