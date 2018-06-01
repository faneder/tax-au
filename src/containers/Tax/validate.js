export default function(values) {
  const errors = {}
  const requiredFields = ['income'];
  const numberFields = ['income', 'taxWithhold', 'workExpenses'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  numberFields.forEach(field => {
    if (values[field] && isNaN(Number(values[field]))) {
      errors[field] = 'Must be a number'
    }
  })

  return errors
}
