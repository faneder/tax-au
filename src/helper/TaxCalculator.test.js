import TaxCalculator from './TaxCalculator';

test('income = 0, tax rate should be 0', () => {
	const taxCalculator = new TaxCalculator(0);

	expect(taxCalculator.tax).toBe(0);
});

test('when income is 10000, tax should be 1500', () => {
	const taxCalculator = new TaxCalculator(10000);

	expect(taxCalculator.tax).toBe(1500);
});

test('when income is 37001, tax should be 5,550.32', () => {
	const taxCalculator = new TaxCalculator(37001);

	expect(taxCalculator.tax).toBe(5550.32);
});

test('when income is 200,000, tax should be 27,610.00', () => {
	const taxCalculator = new TaxCalculator(200000);

	expect(taxCalculator.tax).toBe(65210.00);
});


