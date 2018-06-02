import Tax from './Tax';

// ==============================
// CONCRETE tax
// ==============================

export default class WorkingHoliday extends Tax {
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
    } else {
      this.taxRate = 0.45;
      this.taxBase = 180000;
      this.taxPlus = 56210;
    }
  }
}
