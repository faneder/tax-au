import Tax from './Tax';

//==============================
// CONCRETE tax
//==============================

export default class Resident extends Tax {
    constructor(options) {
        super(options);
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
        } else if (this.income >= 180001) {
            this.taxRate = 0.45;
            this.taxBase = 180000;
            this.taxPlus = 54232;
        }

        return this.taxRate;
    }
}
