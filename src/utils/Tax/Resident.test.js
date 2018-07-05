import TaxFactory from './TaxFactory';

describe('Resident', () => {
  it('throw an error when factory type is unknown', () => {
    expect(() => {
      TaxFactory.create({
        type: ''
      });
    }).toThrow();
  });

  describe('handle different taxable income', () => {
    it('when income is 10000, tax should be Nil', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 10000
      });

      expect(tax.getTax).toBe(0);
    });

    it('when income is 0, tax should be Nil', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 0
      });

      expect(tax.getTax).toBe(0);
    });

    it('$18,201 to $37,000, tax on this income 19c for each $1 over $18,200', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 18201
      });

      expect(tax.getTax).toBeCloseTo(0.19);
    });

    it('$37,001 to $87,000, tax on this income $3,572 plus 32.5c for each $1 over $37,000', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 40000
      });

      expect(tax.getTax).toBe(4547);
    });

    it('$87,001 to $180,000, tax on this income $3,572 plus 32.5c for each $1 over $37,000', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 120000
      });

      expect(tax.getTax).toBe(32032);
    });

    it('when taxable income $180,001 and over, tax on this income $54,232 plus 45c for each $1 over $180,000', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 200000
      });

      expect(tax.getTax).toBe(63232);
    });
  });

  describe('Medicare levy', () => {
    it('when taxable income is under 21,655, do not have to pay the Medicare levy', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 21000
      });

      expect(tax.getTax).toBe(532);
    });

    it('pays the Medicare levy of 2%', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 40000,
      });

      expect(tax.getMedicare).toBe(800);
    });

    it('throw an error when type is wrong', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 40000,
      });

      expect(() => {
        tax.setMedicare('test');
      }).toThrow();
    });
  });

  describe('lower income levy reduced or exemption', () => {
    it('if your taxable income is between 0 - 37000, you will get the low income tax offest -$445', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 37000,
      });

      expect(tax.getLowerIncomeTax()).toBe(-445);
    });

    it('taxable income is between $37,001 – $66,667, tax should be $445 – [(taxable income – $37,000) x 1.5%]', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 50000,
      });
      tax.setMedicare('yes');

      expect(tax.getLowerIncomeTax()).toBe(250);
    });

    it('if the income is lower then 445 that the excess is not refundable, it should be nil ', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 100,
      });
      tax.setMedicare('yes');

      expect(tax.taxRefund).toBe(0);
    });

    it('if the income is lower then 18200, it should be nil ', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 1000,
      });
      tax.setMedicare('yes');

      expect(tax.taxRefund).toBe(0);
    });
  });

  describe('tax withhold exemption from your pay', () => {
    it('tax withhold is lower than you must pay', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 70000,
        taxWithhold: 2000
      });
      tax.setMedicare('no');

      expect(tax.taxRefund).toBe(-12297);
    });

    it('tax withhold is heigher than you must pay', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 70000,
        taxWithhold: 20000
      });
      tax.setMedicare('no');

      expect(tax.taxRefund).toBe(5703);
    });
  });

  it('deduction other work related expenses', () => {
    const tax = TaxFactory.create({
      type: 'resident',
      income: 70000,
      workExpenses: 300
    });
    tax.setMedicare('no');

    expect(tax.taxableIncome()).toBe(69700);
  });

  describe('remote zone tax Offset', () => {
    it('throw an error when type is unknown', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 50000
      });

      expect(() => {
        tax.getRemoteZone('');
      }).toThrow();
    });

    it('Zone A', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 50000
      });

      expect(tax.getRemoteZone('A')).toBe(338);
    });

    it('Zone B', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 50000
      });

      expect(tax.getRemoteZone('B')).toBe(57);
    });

    it('Zone B', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 50000
      });

      expect(tax.getRemoteZone('SPECIAL')).toBe(1173);
    });

    it('Overseas B', () => {
      const tax = TaxFactory.create({
        type: 'resident',
        income: 50000
      });

      expect(tax.getRemoteZone('OVERSEAS')).toBe(338);
    });
  });
});
