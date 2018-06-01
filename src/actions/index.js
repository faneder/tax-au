import {
  FETCH_TAX,
} from './types';

import TaxFactory from '../utils/Tax/TaxFactory';

export const createTax = (values, callback) => {
  const type = values.resident ? 'resident' : 'working_holiday';
  const medicareLevy = values.medicareLevy ? 'yes' : 'no';

  const tax = TaxFactory.create({
    type: type,
    income: values.income,
    taxWithhold: values.taxWithhold,
    workExpenses: values.workExpenses
  });

  tax.setMedicare(medicareLevy);

  if (values.remoteZone) {
    tax.getRemoteZone(values.remoteZone.toUpperCase());
  }

  const data = {
    taxRefund: tax.taxRefund
  };

  return {
    type: FETCH_TAX,
    payload: data
  };
};