import Resident from './Resident';
import WorkingHoliday from './WorkingHoliday';

class TaxFactory {
    static create(options) {
        switch (options.type) {
            case 'working_holiday':
                return new WorkingHoliday(options);
            case 'resident':
                return new Resident(options);
            default:
                throw new Error("The type you are looking for has not been found.");
        }
    }
}

export default TaxFactory;