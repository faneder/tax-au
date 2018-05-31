import Tax from './Tax';
// jest.mock('./Tax');

describe('When Tax throws an error', () => {
  // beforeEach(() => {
  //   // Clear all instances and calls to constructor and all methods:
  //   Tax.mockClear();
  // });

  // beforeAll(() => {
  // 	Tax.mockImplementation(() => {
  // 	  return {
  // 	    getTaxRate: () => {
  // 	      throw new Error('You have to implement the method getTaxRate!');
  // 	    },
  // 	  };
  // 	});
  // });

  // it('Should throw an error when calling getTaxRate', () => {
  // 	const tax = new Tax();
  // 	expect(() => tax.getTaxRate()).toThrowError('You have to implement the method getTaxRate!');
  // });

  // it('We can check if the consumer called the class constructor', () => {
  // 	expect(Tax).toHaveBeenCalledTimes(1);
  // });

  test('get throw message when Tax is called directly', () => {
    expect(() => {
      new Tax();
    }).toThrow();
  });
});
