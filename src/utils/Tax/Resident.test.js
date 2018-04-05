import TaxFactory from './TaxFactory';

describe('Resident', () => {
	test('when income is 10000, tax should be Nil', () => {
		const tax = TaxFactory.create({
		    type: "resident",
		    income: 10000
		});

		expect(tax.getTax).toBe(0);
	});

	test('when income is 0, tax should be Nil', () => {
		const tax = TaxFactory.create({
		    type: "resident",
		    income: 0
		});

		expect(tax.getTax).toBe(0);
	});

	test('when taxable income between $18,201 to $37,000, tax on this income 19c for each $1 over $18,200', () => {
		const tax = TaxFactory.create({
		    type: "resident",
		    income: 18201
		});

		expect(tax.getTax).toBe(0.19);
	});

	test('when taxable income between $37,001 to $87,000, tax on this income $3,572 plus 32.5c for each $1 over $37,000', () => {
		const tax = TaxFactory.create({
		    type: "resident",
		    income: 40000
		});

		expect(tax.getTax).toBe(4547);
	});

	test('when taxable income between $87,001 to $180,000, tax on this income $3,572 plus 32.5c for each $1 over $37,000', () => {
		const tax = TaxFactory.create({
		    type: "resident",
		    income: 120000
		});

		expect(tax.getTax).toBe(32032);
	});

	test('when taxable income $180,001 and over, tax on this income $54,232 plus 45c for each $1 over $180,000', () => {
		const tax = TaxFactory.create({
		    type: "resident",
		    income: 200000
		});

		expect(tax.getTax).toBe(63232);
	});

	describe('Medicare levy', () => {
		test('when taxable income is under 21,655, do not have to pay the Medicare levy', () => {
			const tax = TaxFactory.create({
			    type: "resident",
			    income: 21000
			});

			expect(tax.getTax).toBe(532);
		});

		test('pays the Medicare levy of 2%', () => {
			const tax = TaxFactory.create({
			    type: "resident",
			    income: 40000,
			});

			expect(tax.getMedicare).toBe(800);
		});

		test('do not pay the Medicare levy with holding working visa', () => {
			const tax = TaxFactory.create({
			    type: "resident",
			    income: 40000,
			});
			tax.setMedicare('no');

			expect(tax.getMedicare).toBe(0);
		});
	});

	describe('lower income levy reduced or exemption', () => {
		test('if your taxable income is between 0 - 37000, you will get the low income tax offest -$445', () => {
			const tax = TaxFactory.create({
			    type: "resident",
			    income: 37000,
			});

			expect(tax.getLowerIncomeTax()).toBe(-445);
		});

		test('if your taxable income is between $37,001 – $66,667, tax should be $445 – [(taxable income – $37,000) x 1.5%]', () => {
			const tax = TaxFactory.create({
			    type: "resident",
			    income: 50000,
			});
			tax.setMedicare('yes');

			expect(tax.getLowerIncomeTax()).toBe(250);
		});

		test('if the income is lower then 445 that the excess is not refundable, it should be nil ', () => {
			const tax = TaxFactory.create({
			    type: "resident",
			    income: 100,
			});
			tax.setMedicare('yes');

			expect(tax.taxRefund).toBe(0);
		});
	});

	describe('tax withhold exemption from your pay', () => {
		test('tax withhold is lower than you must pay', () => {
			const tax = TaxFactory.create({
			    type: "resident",
			    income: 70000,
			    taxWithhold: 2000
			});
			tax.setMedicare('no');

			expect(tax.taxRefund).toBe(-12297);
		});

		test('tax withhold is heigher than you must pay', () => {
			const tax = TaxFactory.create({
			    type: "resident",
			    income: 70000,
			    taxWithhold: 20000
			});
			tax.setMedicare('no');

			expect(tax.taxRefund).toBe(5703);
		});
	});

	test('deduction other work related expenses', () => {
		const tax = TaxFactory.create({
		    type: "resident",
		    income: 70000,
		    workExpenses: 300
		});
		tax.setMedicare('no');

		expect(tax.taxableIncome()).toBe(69700);
	});
});
