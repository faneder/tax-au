class TaxCalculator {
	constructor(income) {
	    this.income = income;
	    this.taxBase = 0;
	    this.taxPlus = 0;
	    this.taxRate = 0;
	}

	get tax() {
	    return this.calcTax();
	}

	getTaxRate() {
		if (this.income <= 37000) {
			this.taxRate = 0.15;
		} else if (this.income >= 37001 && this.income <= 87000) {
			this.taxRate = 0.325;
			this.taxBase = 37000;
			this.taxPlus = 5550;
		} else if (this.income >= 87001 && this.income <= 180000) {
			this.taxRate = 0.37;
			this.taxBase = 87000;
			this.taxPlus = 21800;
		} else if (this.income >= 180000) {
			this.taxRate = 0.45;
			this.taxBase = 180000;
			this.taxPlus = 56210;
		}

		return this.taxRate;
	}

	calcTax() {
	    this.getTaxRate();

		return this.formatTaxNumber(this.taxPlus + ((this.income - this.taxBase) * this.taxRate));
  	}

  	formatTaxNumber(num) {
		return Math.floor(num * 100) / 100;
  	}
}

export default TaxCalculator;