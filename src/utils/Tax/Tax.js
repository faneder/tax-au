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
    console.log(`this.taxWithhold ${this.taxWithhold}`)
    console.log(`this.getTax ${this.getTax}`)
    console.log(`this.medicare ${this.medicare}`)
    console.log(`this.medicare ${this.medicare}`)
    console.log(`this.remoteZoneOffset ${this.remoteZoneOffset}`)
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
  			return this.medicare = this.income * this.medicareRate;
  		case 'no':
  			return this.medicare = 0;
  		default:
  			throw new Error('the params are only allowed to use yes or no');
  	}
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
  			return this.remoteZoneOffset = 338;
  		case 'B':
  			return this.remoteZoneOffset = 57;
  		case 'SPECIAL':
  			return this.remoteZoneOffset = 1173;
  		case 'OVERSEAS':
  			return this.remoteZoneOffset = 338;
  		default:
  			throw new Error('must give a zone');
  	}
  }

  calcTax() {
    this.getTaxRate();

    return this.formatTaxNumber(this.taxPlus + ((this.taxableIncome() - this.taxBase) * this.taxRate));
	}

	formatTaxNumber(num) {
    return Math.floor(parseFloat(num) * 100) / 100;
	}
}
