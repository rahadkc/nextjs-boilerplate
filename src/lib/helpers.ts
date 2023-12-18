export function hasKey<T extends object, K extends keyof T>(obj: T, key: K): boolean {
  return key in obj;
}

export function getValueIfExists<T extends object, K extends keyof T>(
  obj: T,
  key: K,
): T[K] | undefined {
  if (key in obj) {
    return obj[key];
  }
  return undefined;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function objectToQueryString(params: Record<string, any>): string {
  const queryParts: string[] = [];

  for (const key of params.keys()) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const value = params[key];
      if (value !== undefined) {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    }
  }

  return queryParts.join("&");
}

export function isString(value: unknown) {
  return Object.prototype.toString.call(value) === "[object String]";
}
