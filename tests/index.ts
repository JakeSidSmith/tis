import {
  isNumber,
  isNotNumber,
  isString,
  isNotString,
  isBoolean,
  isNotBoolean,
  isUndefined,
  isNotUndefined,
  isNotDefined,
  isDefined,
  isNull,
  isNotNull,
  isNullish,
  isNotNullish,
  isArray,
  isNotArray,
} from '../src';

const self = <T>(input: T): T => input;

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

describe('isNotNumber', () => {
  it('should return true when input is not a number', () => {
    const input = null as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNotNumber(input)) {
      self(input); // @tsassert: null | undefined
    } else {
      self(input); // @tsassert: number
    }

    expect(isNotNumber(input)).toBe(true);
  });

  it('should return false when input is a number', () => {
    const input = 0 as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNotNumber(input)) {
      self(input); // @tsassert: null | undefined
    } else {
      self(input); // @tsassert: number
    }

    expect(isNotNumber(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isNotNumber(input)) {
      self(input); // @tsassert: string | null | undefined
    } else {
      self(input); // @tsassert: never
    }

    expect(isNotNumber(input)).toBe(true);
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

describe('isNotString', () => {
  it('should return true when input is not a string', () => {
    const input = null as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isNotString(input)) {
      self(input); // @tsassert: null | undefined
    } else {
      self(input); // @tsassert: string
    }

    expect(isNotString(input)).toBe(true);
  });

  it('should return false when input is a string', () => {
    const input = '' as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isNotString(input)) {
      self(input); // @tsassert: null | undefined
    } else {
      self(input); // @tsassert: string
    }

    expect(isNotString(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = 0 as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNotString(input)) {
      self(input); // @tsassert: number | null | undefined
    } else {
      self(input); // @tsassert: never
    }

    expect(isNotString(input)).toBe(true);
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

describe('isNotBoolean', () => {
  it('should return true when input is not a boolean', () => {
    const input = null as boolean | null | undefined;

    self(input); // @tsassert: boolean | null | undefined

    if (isNotBoolean(input)) {
      self(input); // @tsassert: null | undefined
    } else {
      self(input); // @tsassert: boolean
    }

    expect(isNotBoolean(input)).toBe(true);
  });

  it('should return false when input is a boolean', () => {
    const input = false as boolean | null | undefined;

    self(input); // @tsassert: boolean | null | undefined

    if (isNotBoolean(input)) {
      self(input); // @tsassert: null | undefined
    } else {
      self(input); // @tsassert: boolean
    }

    expect(isNotBoolean(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isNotBoolean(input)) {
      self(input); // @tsassert: string | null | undefined
    } else {
      self(input); // @tsassert: never
    }

    expect(isNotBoolean(input)).toBe(true);
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

describe('isNotUndefined', () => {
  it('should return true when input is not undefined', () => {
    const input = null as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isNotUndefined(input)) {
      self(input); // @tsassert: string | null
    } else {
      self(input); // @tsassert: undefined
    }

    expect(isNotUndefined(input)).toBe(true);
  });

  it('should return false when input is undefined', () => {
    const input = undefined as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isNotUndefined(input)) {
      self(input); // @tsassert: string | null
    } else {
      self(input); // @tsassert: undefined
    }

    expect(isNotUndefined(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | boolean | null;

    self(input); // @tsassert: string | boolean | null

    if (isNotUndefined(input)) {
      self(input); // @tsassert: string | boolean | null
    } else {
      self(input); // @tsassert: never
    }

    expect(isNotUndefined(input)).toBe(true);
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

describe('isNotDefined', () => {
  it('should return true when input is undefined', () => {
    const input = undefined as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isNotDefined(input)) {
      self(input); // @tsassert: undefined
    } else {
      self(input); // @tsassert: string | null
    }

    expect(isNotDefined(input)).toBe(true);
  });

  it('should return false when input is not undefined', () => {
    const input = null as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isNotDefined(input)) {
      self(input); // @tsassert: undefined
    } else {
      self(input); // @tsassert: string | null
    }

    expect(isNotDefined(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | boolean | null;

    self(input); // @tsassert: string | boolean | null

    if (isNotDefined(input)) {
      self(input); // @tsassert: never
    } else {
      self(input); // @tsassert: string | boolean | null
    }

    expect(isNotDefined(input)).toBe(false);
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

describe('isNotNull', () => {
  it('should return true when input is not null', () => {
    const input = 0 as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNotNull(input)) {
      self(input); // @tsassert: number | undefined
    } else {
      self(input); // @tsassert: null
    }

    expect(isNotNull(input)).toBe(true);
  });

  it('should return false when input is null', () => {
    const input = null as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNotNull(input)) {
      self(input); // @tsassert: number | undefined
    } else {
      self(input); // @tsassert: null
    }

    expect(isNotNull(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | number | undefined;

    self(input); // @tsassert: string | number | undefined

    if (isNotNull(input)) {
      self(input); // @tsassert: string | number | undefined
    } else {
      self(input); // @tsassert: never
    }

    expect(isNotNull(input)).toBe(true);
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

describe('isNotNullish', () => {
  it('should return true when input is not null or undefined', () => {
    const input = 0 as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNotNullish(input)) {
      self(input); // @tsassert: number
    } else {
      self(input); // @tsassert: null | undefined
    }

    expect(isNotNullish(input)).toBe(true);
  });

  it('should return false when input is null or undefined', () => {
    const input = null as number | null | undefined;

    self(input); // @tsassert: number | null | undefined

    if (isNotNullish(input)) {
      self(input); // @tsassert: number
    } else {
      self(input); // @tsassert: null | undefined
    }

    expect(isNotNullish(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | number | boolean;

    self(input); // @tsassert: string | number | boolean

    if (isNotNullish(input)) {
      self(input); // @tsassert: string | number | boolean
    } else {
      self(input); // @tsassert: never
    }

    expect(isNotNullish(input)).toBe(true);
  });
});

describe('isArray', () => {
  it('should return true when input is an array', () => {
    const input = [] as string[] | readonly number[] | null | undefined;

    self(input); // @tsassert: string[] | readonly number[] | null | undefined

    if (isArray(input)) {
      self(input); // @tsassert: string[] | readonly number[]
    } else {
      self(input); // @tsassert: null | undefined
    }

    expect(isArray(input)).toBe(true);
  });

  it('should return false when input is not an array', () => {
    const input = null as string[] | readonly number[] | null | undefined;

    self(input); // @tsassert: string[] | readonly number[] | null | undefined

    if (isArray(input)) {
      self(input); // @tsassert: string[] | readonly number[]
    } else {
      self(input); // @tsassert: null | undefined
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

describe('isNotArray', () => {
  it('should return true when input is not an array', () => {
    const input = null as string[] | readonly number[] | null | undefined;

    self(input); // @tsassert: string[] | readonly number[] | null | undefined

    if (isNotArray(input)) {
      self(input); // @tsassert: null | undefined
    } else {
      self(input); // @tsassert: string[] | readonly number[]
    }

    expect(isNotArray(input)).toBe(true);
  });

  it('should return false when input is an array', () => {
    const input = [] as string[] | readonly number[] | null | undefined;

    self(input); // @tsassert: string[] | readonly number[] | null | undefined

    if (isNotArray(input)) {
      self(input); // @tsassert: null | undefined
    } else {
      self(input); // @tsassert: string[] | readonly number[]
    }

    expect(isNotArray(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | null | undefined;

    self(input); // @tsassert: string | null | undefined

    if (isNotArray(input)) {
      self(input); // @tsassert: string | null | undefined
    } else {
      self(input); // @tsassert: never
    }

    expect(isNotArray(input)).toBe(true);
  });
});
