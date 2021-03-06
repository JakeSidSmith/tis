import {
  isNumber,
  isString,
  isBoolean,
  isUndefined,
  isDefined,
  isNull,
  isNullish,
  isArray,
  isObject,
  isFunction,
} from '../src';

const self = <T>(input: T): T => input;

class TestClass {}

describe('isNumber', () => {
  it('should return true when input is a number', () => {
    const input = 0 as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNumber(input)) {
      self(input); // @tsassert: number
    } else {
      self(input); // @tsassert: null | undefined
    }

    expect(isNumber(input)).toBe(true);
  });

  it('should return false when input is not a number', () => {
    const input = null as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNumber(input)) {
      self(input); // @tsassert: number
    } else {
      self(input); // @tsassert: null | undefined
    }

    expect(isNumber(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isNumber(input)) {
      self(input); // @tsassert: never
    } else {
      self(input); // @tsassert: string | null | undefined
    }

    expect(isNumber(input)).toBe(false);
  });
});

describe('isString', () => {
  it('should return true when input is a string', () => {
    const input = '' as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isString(input)) {
      self(input); // @tsassert: string
    } else {
      self(input); // @tsassert: null | undefined
    }

    expect(isString(input)).toBe(true);
  });

  it('should return false when input is not a string', () => {
    const input = null as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isString(input)) {
      self(input); // @tsassert: string
    } else {
      self(input); // @tsassert: null | undefined
    }

    expect(isString(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = 0 as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isString(input)) {
      self(input); // @tsassert: never
    } else {
      self(input); // @tsassert: number | null | undefined
    }

    expect(isString(input)).toBe(false);
  });
});

describe('isBoolean', () => {
  it('should return true when input is a boolean', () => {
    const input = false as boolean | null | undefined;

    self(input); // @tsassert: boolean | null | undefined

    if (isBoolean(input)) {
      self(input); // @tsassert: boolean
    } else {
      self(input); // @tsassert: null | undefined
    }

    expect(isBoolean(input)).toBe(true);
  });

  it('should return false when input is not a boolean', () => {
    const input = null as boolean | null | undefined;

    self(input); // @tsassert: boolean | null | undefined

    if (isBoolean(input)) {
      self(input); // @tsassert: boolean
    } else {
      self(input); // @tsassert: null | undefined
    }

    expect(isBoolean(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isBoolean(input)) {
      self(input); // @tsassert: never
    } else {
      self(input); // @tsassert: string | null | undefined
    }

    expect(isBoolean(input)).toBe(false);
  });
});

describe('isUndefined', () => {
  it('should return true when input is undefined', () => {
    const input = undefined as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isUndefined(input)) {
      self(input); // @tsassert: undefined
    } else {
      self(input); // @tsassert: string | null
    }

    expect(isUndefined(input)).toBe(true);
  });

  it('should return false when input is not undefined', () => {
    const input = null as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isUndefined(input)) {
      self(input); // @tsassert: undefined
    } else {
      self(input); // @tsassert: string | null
    }

    expect(isUndefined(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | boolean | null;

    self(input); // @tsassert: string | boolean | null

    if (isUndefined(input)) {
      self(input); // @tsassert: never
    } else {
      self(input); // @tsassert: string | boolean | null
    }

    expect(isUndefined(input)).toBe(false);
  });
});

describe('isDefined', () => {
  it('should return true when input is not undefined', () => {
    const input = null as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isDefined(input)) {
      self(input); // @tsassert: string | null
    } else {
      self(input); // @tsassert: undefined
    }

    expect(isDefined(input)).toBe(true);
  });

  it('should return false when input is undefined', () => {
    const input = undefined as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isDefined(input)) {
      self(input); // @tsassert: string | null
    } else {
      self(input); // @tsassert: undefined
    }

    expect(isDefined(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | boolean | null;

    self(input); // @tsassert: string | boolean | null

    if (isDefined(input)) {
      self(input); // @tsassert: string | boolean | null
    } else {
      self(input); // @tsassert: never
    }

    expect(isDefined(input)).toBe(true);
  });
});

describe('isNull', () => {
  it('should return true when input is null', () => {
    const input = null as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNull(input)) {
      self(input); // @tsassert: null
    } else {
      self(input); // @tsassert: number | undefined
    }

    expect(isNull(input)).toBe(true);
  });

  it('should return false when input is not null', () => {
    const input = 0 as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNull(input)) {
      self(input); // @tsassert: null
    } else {
      self(input); // @tsassert: number | undefined
    }

    expect(isNull(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | number | undefined;

    self(input); // @tsassert: string | number | undefined

    if (isNull(input)) {
      self(input); // @tsassert: never
    } else {
      self(input); // @tsassert: string | number | undefined
    }

    expect(isNull(input)).toBe(false);
  });
});

describe('isNullish', () => {
  it('should return true when input is null or undefined', () => {
    const input = null as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNullish(input)) {
      self(input); // @tsassert: null | undefined
    } else {
      self(input); // @tsassert: number
    }

    expect(isNullish(input)).toBe(true);
  });

  it('should return false when input is not null or undefined', () => {
    const input = 0 as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNullish(input)) {
      self(input); // @tsassert: null | undefined
    } else {
      self(input); // @tsassert: number
    }

    expect(isNullish(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | number | boolean;

    self(input); // @tsassert: string | number | boolean

    if (isNullish(input)) {
      self(input); // @tsassert: never
    } else {
      self(input); // @tsassert: string | number | boolean
    }

    expect(isNullish(input)).toBe(false);
  });
});

describe('isArray', () => {
  it('should return true when input is an array', () => {
    const input = [] as
      | string[]
      | readonly number[]
      | Record<string, string>
      | Record<number, string>
      | Record<symbol, string>
      | null
      | undefined;

    self(input); // @tsassert: string[] | readonly number[] | Record<string, string> | Record<number, string> | Record<symbol, string> | null | undefined

    if (isArray(input)) {
      self(input); // @tsassert: string[] | readonly number[]
    } else {
      self(input); // @tsassert: Record<string, string> | Record<number, string> | Record<symbol, string> | null | undefined
    }

    expect(isArray(input)).toBe(true);
  });

  it('should return false when input is not an array', () => {
    const input = null as
      | string[]
      | readonly number[]
      | Record<string, string>
      | Record<number, string>
      | Record<symbol, string>
      | null
      | undefined;

    self(input); // @tsassert: string[] | readonly number[] | Record<string, string> | Record<number, string> | Record<symbol, string> | null | undefined

    if (isArray(input)) {
      self(input); // @tsassert: string[] | readonly number[]
    } else {
      self(input); // @tsassert: Record<string, string> | Record<number, string> | Record<symbol, string> | null | undefined
    }

    expect(isArray(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isArray(input)) {
      self(input); // @tsassert: never
    } else {
      self(input); // @tsassert: string | null | undefined
    }

    expect(isArray(input)).toBe(false);
  });
});

describe('isObject', () => {
  it('should return true when input is an object (includes arrays, excludes null)', () => {
    const input = {} as
      | string[]
      | readonly number[]
      | Record<string, string>
      | Record<number, string>
      | Record<symbol, string>
      | TestClass
      | null
      | undefined;

    self(input); // @tsassert: string[] | readonly number[] | Record<string, string> | Record<number, string> | Record<symbol, string> | TestClass | null | undefined

    if (isObject(input)) {
      self(input); // @tsassert: string[] | readonly number[] | Record<string, string> | Record<number, string> | Record<symbol, string> | TestClass
    } else {
      self(input); // @tsassert: null | undefined
    }

    expect(isObject(input)).toBe(true);
  });

  it('should return false when input is not an object', () => {
    const input = null as
      | string[]
      | readonly number[]
      | Record<string, string>
      | Record<number, string>
      | Record<symbol, string>
      | TestClass
      | null
      | undefined;

    self(input); // @tsassert: string[] | readonly number[] | Record<string, string> | Record<number, string> | Record<symbol, string> | TestClass | null | undefined

    if (isObject(input)) {
      self(input); // @tsassert: string[] | readonly number[] | Record<string, string> | Record<number, string> | Record<symbol, string> | TestClass
    } else {
      self(input); // @tsassert: null | undefined
    }

    expect(isObject(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isObject(input)) {
      self(input); // @tsassert: never
    } else {
      self(input); // @tsassert: string | null | undefined
    }

    expect(isObject(input)).toBe(false);
  });
});

describe('isFunction', () => {
  it('should return true when input is a function', () => {
    const input = (() => null) as
      | TestClass
      | typeof TestClass
      | (new () => TestClass)
      | (() => null)
      | null;

    self(input); // @tsassert: TestClass | typeof TestClass | (new () => TestClass) | (() => null) | null

    if (isFunction(input)) {
      self(input); // @tsassert: typeof TestClass | (new () => TestClass) | (() => null)
    } else {
      self(input); // @tsassert: TestClass | null
    }

    expect(isFunction(input)).toBe(true);
  });

  it('should return true when input is a class constructor', () => {
    const input = TestClass as
      | TestClass
      | typeof TestClass
      | (new () => TestClass)
      | (() => null)
      | null;

    self(input); // @tsassert: TestClass | typeof TestClass | (new () => TestClass) | (() => null) | null

    if (isFunction(input)) {
      self(input); // @tsassert: typeof TestClass | (new () => TestClass) | (() => null)
    } else {
      self(input); // @tsassert: TestClass | null
    }

    expect(isFunction(input)).toBe(true);
  });

  it('should return false when input is not a function or class constructor', () => {
    const input = new TestClass() as
      | TestClass
      | typeof TestClass
      | (new () => TestClass)
      | (() => null)
      | null;

    self(input); // @tsassert: TestClass | typeof TestClass | (new () => TestClass) | (() => null) | null

    if (isFunction(input)) {
      self(input); // @tsassert: typeof TestClass | (new () => TestClass) | (() => null)
    } else {
      self(input); // @tsassert: TestClass | null
    }

    expect(isFunction(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isNumber(input)) {
      self(input); // @tsassert: never
    } else {
      self(input); // @tsassert: string | null | undefined
    }

    expect(isNumber(input)).toBe(false);
  });
});
