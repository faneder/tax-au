import TaxFactory from './TaxFactory';

describe('Working Holiday', () => {
	test('income is 0, tax on this income should be 0', () => {
		const tax = TaxFactory.create({
		    type: "working_holiday",
		    income: 0
		});

		expect(tax.getTax).toBe(0);
	});

	test('when taxable income between $0 – $37,000, tax on this income 15c for each $1', () => {
		const tax = TaxFactory.create({
		    type: "working_holiday",
		    income: 10000
		});

		expect(tax.getTax).toBe(1500);
	});

	test('when taxable income between $37,001 – $87,000, tax on this income $5,550 plus 32.5c for each $1 over $37,000', () => {
		const tax = TaxFactory.create({
		    type: "working_holiday",
		    income: 37001
		});

		expect(tax.getTax).toBe(5550.32);
	});

	test('when taxable income between $87,001 – $180,000, tax on this income $21,800 plus 37c for each $1 over $87,000', () => {
		const tax = TaxFactory.create({
		    type: "working_holiday",
		    income: 160000
		});

		expect(tax.getTax).toBe(48810.00);
	});

	test('when taxable income between $180,001 and over, tax on this income $56,210 plus 45c for each $1 over $180,000', () => {
		const tax = TaxFactory.create({
		    type: "working_holiday",
		    income: 200000
		});

		expect(tax.getTax).toBe(65210.00);
	});

	test('if you do not apply the Medicare levy, you may pay the 2%', () => {
		const tax = TaxFactory.create({
		    type: "working_holiday",
		    income: 40000,
		});
		tax.setMedicare('yes');

		expect(tax.getMedicare).toBe(800);
	});
});

