/* eslint-disable import/no-extraneous-dependencies */
import * as Sentry from '@sentry/nextjs';
import { Integrations } from '@sentry/tracing';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});
