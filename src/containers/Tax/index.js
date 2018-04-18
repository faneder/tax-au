import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import asyncValidate from './asyncValidate'
import { MenuItem } from 'material-ui/Menu'
import Radio from 'material-ui/Radio';
import { FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form'
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import {
  Select,
  TextField,
  Switch
} from 'redux-form-material-ui'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 3

  },
  textField: {
    width: 300
  },
  margin: {
    margin: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  button: {
    margin: theme.spacing.unit
  },
  buttonBox: {
    marginTop: theme.spacing.unit * 5
  },
  SnackbarContent: {
    minWidth: '100%',
  }
});

const validate = values => {
  const errors = {}
  const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

class Tax extends Component {
  constructor(props) {
    super(props);
    this.props.initialize({ deduction: '300' });

    this.state = {
      taxReturn: 0,
      taxReturnSnack: false
    };

    this.handleTaxReturn = this.handleTaxReturn.bind(this);
  }

  handleChange = prop => event => {
    this.setState({[prop]: event.target.value});
  };

  handleTaxReturn = () => {
    this.setState({ taxReturnSnack: true });
  };

  render() {
    const {handleSubmit, pristine, reset, submitting, classes} = this.props

    return (
      <div>
        <Snackbar
          className={classes.SnackbarContent}
          open={this.state.taxReturnSnack}
          SnackbarContentProps={{
            className: classes.SnackbarContent,
          }}
          message={
            `Tax Return 退稅金額: \
            $${this.state.taxReturn}`
          }/>
        <form onSubmit={handleSubmit} className={classes.container}>
          <Field
            component={TextField}
            name="grossSalary"
            label="Gross Salary 工資"
            placeholder="收入總額"
            required
            type="number"
            className={classNames(classes.margin, classes.textField)}
            helperText="Some important text"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }} />
          <Field
            name="taxWithheld"
            component={TextField}
            label="Tax withheld 扣繳稅款"
            required
            type="number"
            className={classNames(classes.margin, classes.textField)} />
          <Field
            name="other-income"
            component={TextField}
            label="Other Income 其他收入"
            required
            type="number"
            className={classNames(classes.margin, classes.textField)} />
          <Field
            name="resident"
            component={TextField}
            label="Tax Resident 稅務居民"
            required
            type="number"
            className={classNames(classes.margin, classes.textField)} />
          <Field
            name="deduction"
            component={TextField}
            label="Deductions 工作相關支出"
            required
            type="number"
            helperText="每年可以申報最多$300，無需保留收據的工作相關稅務抵免"
            className={classNames(classes.margin, classes.textField)} />
          <div>
            <FormControl className={classNames(classes.margin)}>
              <InputLabel>Remote Zone 偏遠地區</InputLabel>
              <Field
                name="remoteZone"
                component={Select}
                autoWidth
                className={classNames(classes.textField)}>
                <MenuItem value="ZoneA">Zone A</MenuItem>
                <MenuItem value="ZoneB">Zone B</MenuItem>
                <MenuItem value="SpecialArea">Special area</MenuItem>
                <MenuItem value="OverseasForces">Overseas forces</MenuItem>
              </Field>
              <FormHelperText>
                補助金額<br/>
                Zone A => $338<br/>
                Zone B => $57<br/>
                Special area => $1,173<br/>
                Overseas forces => $338<br/>
              </FormHelperText>
            </FormControl>
              <Button
                target="_blank"
                href="https://www.ato.gov.au/forms/withholding-declaration---calculating-your-tax-offset/?page=3" className={classes.button}>
                點選查看區域對照表
              </Button>
          </div>
          <FormControl fullWidth margin="dense">
            <FormControlLabel
              control={<Field name="medicareLevy" component={Switch} color='primary'/> }
              label="Medicare Levy 醫療減免"
            />
            <FormHelperText>這個是澳洲人的健保，但我們不是澳洲人，所以是可以申請來退的，為每人年總收入的2%，低於21355元就不用申請，但這個非強制，就算忘記申請也不會被罰款。如何申請減免</FormHelperText>
          </FormControl>
          <div className={classes.buttonBox}>
            <Button
              onClick={this.handleTaxReturn}
              type="submit"
              variant="raised"
              color="primary"
              disabled={pristine || submitting}
              className={classes.button}>
              Submit
            </Button>
            <Button
              type="submit"
              variant="raised"
              disabled={pristine || submitting}
              onClick={reset}
              className={classes.button}>
              Clear Values
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

Tax = reduxForm({
  form: 'Tax',
  validate,
  asyncValidate
})(Tax)

export default withStyles(styles)(Tax);