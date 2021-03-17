/* eslint-disable no-unused-expressions */
import { isNumber } from '../src';

describe('isNumber', () => {
  it('should return true when input is a number', () => {
    const input = 0 as number | null | undefined;

    input; // @tsassert: number | null | undefined

    if (isNumber(input)) {
      input; // @tsassert: number
    } else {
      input; // @tsassert: null | undefined
    }

    expect(isNumber(input)).toBe(true);
  });

  it('should return false when input is not a number', () => {
    const input = null as number | null | undefined;

    input; // @tsassert: number | null | undefined

    if (isNumber(input)) {
      input; // @tsassert: number
    } else {
      input; // @tsassert: null | undefined
    }

    expect(isNumber(input)).toBe(false);
  });

  it('should narrow to type never when types do not overlap', () => {
    const input = '' as string | null | undefined;

    input; // @tsassert: string | null | undefined

    if (isNumber(input)) {
      input; // @tsassert: never
    } else {
      input; // @tsassert: string | null | undefined
    }

    expect(isNumber(input)).toBe(false);
  });
});
