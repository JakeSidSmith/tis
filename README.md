# 'tis

**Type safe variable checks**

## Install

```shell
npm i @jakesidsmith/tis -P
```

`-P` is shorthand for `--save-production` and will add this to your package `dependencies`.

Use `-D` (shorthand for `--save-dev`) if you are only using this for testing.

## Available utilities

- `isNumber`: Returns true when the input is a number
- `isString`: Returns true when the input is a string
- `isBoolean`: Returns true when the input is a boolean
- `isUndefined`: Returns true when the input is undefined
- `isDefined`: Returns true when the input is not undefined
- `isNull`: Returns true when the input is null
- `isNullish`: Returns true when the input is null or undefined
- `isArray`: Returns true when the input is an array
- `isObject`: Returns true when the input is an object (includes arrays, excludes null)
- `isFunction`: Returns true when the input is a function or class constructor

## Example usage

```ts
import { isObject, isArray, isString } from '@jakesidsmith/tis';

const example = (
  input: string | number | readonly string[] | Record<string, string>
) => {
  if (isObject(input)) {
    if (isArray(input)) {
      // Guaranteed to be a readonly string[]
    } else {
      // Guaranteed to be a Record<string, string>
    }
  } else if (isString(input)) {
    // Guaranteed to be a string
  } else {
    // Guaranteed to be a number
  }
};
```
