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

		expect(tax.getTax).toBeCloseTo(5550.32);
	});

	test('when taxable income between $87,001 – $180,000, tax on this income $21,800 plus 37c for each $1 over $87,000', () => {
		const tax = TaxFactory.create({
		    type: "working_holiday",
		    income: 160000
		});

		expect(tax.getTax).toBeCloseTo(48810.00);
	});

	test('when taxable income between $180,001 and over, tax on this income $56,210 plus 45c for each $1 over $180,000', () => {
		const tax = TaxFactory.create({
		    type: "working_holiday",
		    income: 200000
		});

		expect(tax.getTax).toBeCloseTo(65210.00);
	});

	test('if you do not apply the Medicare levy, you may pay the 2%', () => {
		const tax = TaxFactory.create({
		    type: "working_holiday",
		    income: 40000,
		});
		tax.setMedicare('yes');

		expect(tax.getMedicare).toBe(800);
	});

	test('deduction other work related expenses', () => {
		const tax = TaxFactory.create({
		    type: "working_holiday",
		    income: 70000,
		    workExpenses: 300
		});

		expect(tax.taxableIncome()).toBe(69700);
	});

	describe('remote zone tax Offset', () => {
		test('throw an error when type is unknown', () => {
			const tax = TaxFactory.create({
			    type: "working_holiday",
		    	income: 50000
			});

			expect(() => {
				tax.getRemoteZone('');
			}).toThrow();
		});

		test('Zone A', () => {
			const tax = TaxFactory.create({
			    type: "working_holiday",
			    income: 50000
			});

			expect(tax.getRemoteZone('A')).toBe(338);
		});

		test('Zone B', () => {
			const tax = TaxFactory.create({
			    type: "working_holiday",
			    income: 50000
			});

			expect(tax.getRemoteZone('B')).toBe(57);
		});

		test('Zone B', () => {
			const tax = TaxFactory.create({
			    type: "working_holiday",
			    income: 50000
			});

			expect(tax.getRemoteZone('SPECIAL')).toBe(1173);
		});

		test('Overseas B', () => {
			const tax = TaxFactory.create({
			    type: "working_holiday",
			    income: 50000
			});

			expect(tax.getRemoteZone('OVERSEAS')).toBe(338);
		});

		test('should reduce tax in remote area', () => {
			const tax = TaxFactory.create({
			    type: "working_holiday",
			    income: 30000
			});
			tax.getRemoteZone('A');

			expect(tax.taxRefund).toBe(-4162);
		});
	});
});

