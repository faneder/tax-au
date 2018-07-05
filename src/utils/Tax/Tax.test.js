import Tax from './Tax';

describe('When Tax throws an error', () => {
  test('get throw message when Tax is called directly', () => {
    expect(() => {
      const tax = new Tax();
      tax();
    }).toThrow();
  });
});
