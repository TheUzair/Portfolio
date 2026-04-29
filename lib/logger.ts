/**
 * Tiny tagged console logger so route logs are easy to grep.
 */
export function createLogger(tag: string) {
  return {
    log: (...args: unknown[]) => console.log(`[${tag}]`, ...args),
    error: (...args: unknown[]) => console.error(`[${tag}]`, ...args),
  };
}
