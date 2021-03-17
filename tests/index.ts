import { message } from '../src';

describe('index', () => {
  it('exports a message', () => {
    expect(message).toBe('Hello, World!');
  });
});
