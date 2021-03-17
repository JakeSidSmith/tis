import { isNumber, isNotNumber } from '../src';

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
