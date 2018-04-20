export default function(values) {
  const errors = {}
  const requiredFields = ['grossSalary']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}
