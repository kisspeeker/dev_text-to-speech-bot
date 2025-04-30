import { AutoRetryOptions } from '@grammyjs/auto-retry';

export const AUTO_RETRY_OPTIONS: Partial<AutoRetryOptions> = {
  maxRetryAttempts: 3,
  maxDelaySeconds: 20,
} as const;
