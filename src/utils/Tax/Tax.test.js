import TaxFactory from './TaxFactory';

test('if you are a working holiday, income is 0, tax on this income should be 0', () => {
	const tax = TaxFactory.create({
	    type: "working_holiday",
	    income: 0
	});

	expect(tax.getTax).toBe(0);
});

test('if you are a working holiday, when taxable income between $0 – $37,000, tax on this income 15c for each $1', () => {
	const tax = TaxFactory.create({
	    type: "working_holiday",
	    income: 10000
	});

	expect(tax.getTax).toBe(1500);
});

test('if you are a working holiday, when taxable income between $37,001 – $87,000, tax on this income $5,550 plus 32.5c for each $1 over $37,000', () => {
	const tax = TaxFactory.create({
	    type: "working_holiday",
	    income: 37001
	});

	expect(tax.getTax).toBe(5550.32);
});

test('if you are a working holiday, when taxable income between $87,001 – $180,000, tax on this income $21,800 plus 37c for each $1 over $87,000', () => {
	const tax = TaxFactory.create({
	    type: "working_holiday",
	    income: 160000
	});

	expect(tax.getTax).toBe(48810.00);
});

test('if you are a working holiday, when taxable income between $180,001 and over, tax on this income $56,210 plus 45c for each $1 over $180,000', () => {
	const tax = TaxFactory.create({
	    type: "working_holiday",
	    income: 200000
	});

	expect(tax.getTax).toBe(65210.00);
});

test('if you are a Resident, when income is 10000, tax should be Nil', () => {
	const tax = TaxFactory.create({
	    type: "resident",
	    income: 10000
	});

	expect(tax.getTax).toBe(0);
});

test('if you are a Resident, when income is 0, tax should be Nil', () => {
	const tax = TaxFactory.create({
	    type: "resident",
	    income: 0
	});

	expect(tax.getTax).toBe(0);
});

test('if you are a Resident, when taxable income between $18,201 to $37,000, tax on this income 19c for each $1 over $18,200', () => {
	const tax = TaxFactory.create({
	    type: "resident",
	    income: 18201
	});

	expect(tax.getTax).toBe(0.19);
});

test('if you are a Resident, when taxable income between $37,001 to $87,000, tax on this income $3,572 plus 32.5c for each $1 over $37,000', () => {
	const tax = TaxFactory.create({
	    type: "resident",
	    income: 40000
	});

	expect(tax.getTax).toBe(4547);
});

test('if you are a Resident, when taxable income between $87,001 to $180,000, tax on this income $3,572 plus 32.5c for each $1 over $37,000', () => {
	const tax = TaxFactory.create({
	    type: "resident",
	    income: 120000
	});

	expect(tax.getTax).toBe(32032);
});

test('if you are a Resident, when taxable income $180,001 and over, tax on this income $54,232 plus 45c for each $1 over $180,000', () => {
	const tax = TaxFactory.create({
	    type: "resident",
	    income: 200000
	});

	expect(tax.getTax).toBe(63232);
});
