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
		return this.formatTaxNumber(this.getTax + this.medicare);
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
    			throw new Error("the params are only allowed to use yes or no");
    	}
    }

    get getMedicare() {
    	return this.medicare;
    }

	calcTax() {
	    this.getTaxRate();

		return this.formatTaxNumber(this.taxPlus + ((this.income - this.taxBase) * this.taxRate));
  	}

  	formatTaxNumber(num) {
		return (num > 0) ? Math.floor(num * 100) / 100 : 0;
  	}
}