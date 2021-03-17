/**
 * Returns true when the input is a number
 */
export const isNumber = <T>(input: T): input is Extract<T, number> =>
  typeof input === 'number';
/**
 * Returns true when the input is not a number
 */
export const isNotNumber = <T>(input: T): input is Exclude<T, number> =>
  !isNumber(input);

/**
 * Returns true when the input is a string
 */
export const isString = <T>(input: T): input is Extract<T, string> =>
  typeof input === 'string';
/**
 * Returns true when the input is not a string
 */
export const isNotString = <T>(input: T): input is Exclude<T, string> =>
  !isString(input);

/**
 * Returns true when the input is a boolean
 */
export const isBoolean = <T>(input: T): input is Extract<T, boolean> =>
  typeof input === 'boolean';
/**
 * Returns true when the input is not a boolean
 */
export const isNotBoolean = <T>(input: T): input is Exclude<T, boolean> =>
  !isBoolean(input);

/**
 * Returns true when the input is undefined
 */
export const isUndefined = <T>(input: T): input is Extract<T, undefined> =>
  typeof input === 'undefined';
/**
 * Returns true when the input is not undefined
 */
export const isNotUndefined = <T>(input: T): input is Exclude<T, undefined> =>
  !isUndefined(input);

/**
 * Returns true when the input is not undefined
 */
export const isDefined = <T>(input: T): input is Exclude<T, undefined> =>
  isNotUndefined(input);
/**
 * Returns true when the input is undefined
 */
export const isNotDefined = <T>(input: T): input is Extract<T, undefined> =>
  isUndefined(input);

/**
 * Returns true when the input is null
 */
export const isNull = <T>(input: T): input is Extract<T, null> =>
  input === null;
/**
 * Returns true when the input is not null
 */
export const isNotNull = <T>(input: T): input is Exclude<T, null> =>
  !isNull(input);

/**
 * Returns true when the input is null or undefined
 */
export const isNullish = <T>(input: T): input is Extract<T, undefined | null> =>
  isUndefined(input) || isNull(input);
/**
 * Returns true when the input is not null or undefined
 */
export const isNotNullish = <T>(
  input: T
): input is Exclude<T, undefined | null> => !isNullish(input);

/**
 * Returns true when the input is an array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isArray = <T>(input: T): input is Extract<T, any[]> =>
  Array.isArray(input);
/**
 * Returns true when the input is not an array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNotArray = <T>(input: T): input is Exclude<T, any[]> =>
  !isArray(input);
