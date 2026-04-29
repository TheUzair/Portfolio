/**
 * Simple in-process IP rate limiter. Suitable for low-traffic routes on a
 * single server / serverless instance. For multi-instance deployments use
 * an external store (Redis, Upstash, etc.).
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

interface RateLimiterOptions {
  /** Max requests allowed inside the window. */
  limit: number;
  /** Window length in milliseconds. */
  windowMs: number;
}

export function createRateLimiter({ limit, windowMs }: RateLimiterOptions) {
  const store = new Map<string, RateLimitEntry>();

  return function check(ip: string): boolean {
    const now = Date.now();
    const entry = store.get(ip);

    if (!entry || now > entry.resetAt) {
      store.set(ip, { count: 1, resetAt: now + windowMs });
      return true;
    }

    if (entry.count >= limit) return false;

    entry.count += 1;
    return true;
  };
}

/** Extract the best-guess client IP from a request's headers. */
export function getClientIp(headers: Headers): string {
  return (
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headers.get('x-real-ip') ??
    'anonymous'
  );
}
