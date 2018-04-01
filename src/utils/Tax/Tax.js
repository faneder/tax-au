//==============================
// ABSTRACT Tax
//==============================

export default class Tax {
    constructor(options) {

        if (new.target == Tax) {
            throw new Error("You cannot instantiate an abstract class!");
        }

        this.income = options.income;
	    this.type = options.type;
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

	calcTax() {
	    this.getTaxRate();

		return this.formatTaxNumber(this.taxPlus + ((this.income - this.taxBase) * this.taxRate));
  	}

  	formatTaxNumber(num) {
		return Math.floor(num * 100) / 100;
  	}
}