// ==============================
// ABSTRACT Tax
// ==============================

export default class Tax {
  constructor(options) {
    if (new.target == Tax) {
      throw new Error('You cannot instantiate an abstract class!');
    }

    this.income = options.income;
    this.type = options.type;
    this.taxWithhold = this.formatTaxNumber(options.taxWithhold) || 0;
    this.workExpenses = this.formatTaxNumber(options.workExpenses) || 0; // OTHER WORK RELATED EXPENSES
    this.remoteZoneOffset = 0;
    this.medicareRate = 0.02;
    this.medicare = 0;
    this.taxBase = 0;
    this.taxPlus = 0;
    this.taxRate = 0;
  }

  /**
   * Implementation required
  */
  getTaxRate() {
    throw new Error('You have to implement the method getTaxRate!');
  }

  get getTax() {
    return this.calcTax();
  }

  /**
   * calculator tax refund
  */
  get taxRefund() {
    return this.formatTaxNumber(this.taxWithhold - (this.getTax + this.medicare - this.remoteZoneOffset));
  }

  /**
    * checking is entitled to use the Medicare system
  */
  setMedicare(hasMedicare = 'yes') {
  // if you income is under 21655, you don't need to pay medicare
    if (this.income <= 21655) return;

    switch (hasMedicare) {
      case 'yes':
        this.medicare = this.income * this.medicareRate;
        break;
      case 'no':
        this.medicare = 0;
        break;
      default:
        throw new Error('the params are only allowed to use yes or no');
    }
    return this.medicare;
  }

  get getMedicare() {
    return this.medicare;
  }

  taxableIncome() {
    return (this.income > this.workExpenses) ? (this.income - this.workExpenses) : 0;
  }

  getRemoteZone(zone) {
    switch (zone) {
      case 'A':
        this.remoteZoneOffset = 338;
        break;
      case 'B':
        this.remoteZoneOffset = 57;
        break;
      case 'SPECIAL':
        this.remoteZoneOffset = 1173;
        break;
      case 'OVERSEAS':
        this.remoteZoneOffset = 338;
        break;
      default:
        throw new Error('must give a zone');
    }
    return this.remoteZoneOffset;
  }

  calcTax() {
    this.getTaxRate();

    return this.formatTaxNumber(this.taxPlus + ((this.taxableIncome() - this.taxBase) * this.taxRate));
  }

  formatTaxNumber(num) {
    return Math.floor(parseFloat(num) * 100) / 100;
  }
}
