import Tax from './Tax';

// ==============================
// CONCRETE tax
// ==============================

export default class Resident extends Tax {
  constructor(options) {
    super(options);

    super.setMedicare('yes');

    this.lowerIncome = 445;
    this.lowerIncomeRate = 0.015;
  }

  getTaxRate() {
    if (this.income <= 18200) {
      this.taxRate = 0;
    } else if (this.income >= 18201 && this.income <= 37000) {
      this.taxRate = 0.19;
      this.taxBase = 18200;
    } else if (this.income >= 37001 && this.income <= 87000) {
      this.taxRate = 0.325;
      this.taxBase = 37000;
      this.taxPlus = 3572;
    } else if (this.income >= 87001 && this.income <= 180000) {
      this.taxRate = 0.37;
      this.taxBase = 87000;
      this.taxPlus = 19822;
    } else {
      this.taxRate = 0.45;
      this.taxBase = 180000;
      this.taxPlus = 54232;
    }
  }

  get taxRefund() {
    return super.taxRefund + this.getLowerIncomeTax();
  }

  getLowerIncomeTax() {
    let lowerTax = 0;

    if (this.income > 18200 && this.income <= 37000) {
      lowerTax = -this.lowerIncome;
    } else if (this.income >= 37001 && this.income <= 66667) {
      lowerTax = this.lowerIncome - ((this.income - 37000) * this.lowerIncomeRate);
    }

    return lowerTax;
  }
}
