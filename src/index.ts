const isNull = <T>(input: T): input is Extract<T, null> => input === null;
const isNotNull = <T>(input: T): input is Exclude<T, null> => !isNull(input);

const isUndefined = <T>(input: T): input is Extract<T, undefined> =>
  typeof input === 'undefined';
const isNotUndefined = <T>(input: T): input is Exclude<T, undefined> =>
  !isUndefined(input);

const isDefined = <T>(input: T): input is Exclude<T, undefined> =>
  isNotUndefined(input);
const isNotDefined = <T>(input: T): input is Extract<T, undefined> =>
  isUndefined(input);

const isNullish = <T>(input: T): input is Extract<T, undefined | null> =>
  isUndefined(input) || isNull(input);
const isNotNullish = <T>(input: T): input is Exclude<T, undefined | null> =>
  !isNullish(input);

const isNumber = <T>(input: T): input is Extract<T, number> =>
  typeof input === 'number';
const isNotNumber = <T>(input: T): input is Exclude<T, number> =>
  !isNumber(input);

const isString = <T>(input: T): input is Extract<T, string> =>
  typeof input === 'number';
const isNotString = <T>(input: T): input is Exclude<T, string> =>
  !isString(input);

const isBoolean = <T>(input: T): input is Extract<T, boolean> =>
  typeof input === 'boolean';
const isNotBoolean = <T>(input: T): input is Exclude<T, boolean> =>
  !isBoolean(input);

const isArray = <T>(input: T): input is Extract<T, any[]> =>
  Array.isArray(input);
const isNotArray = <T>(input: T): input is Exclude<T, any[]> => !isArray(input);
