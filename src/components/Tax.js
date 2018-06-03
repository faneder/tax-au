import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
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
    width: '100%'
  },
  margin: {
    margin: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  buttonBox: {
    marginTop: theme.spacing.unit * 2
  },
  infoBtn: {
    minWidth: 0
  },
});

const Tax = props => {
  const { handleSubmit, pristine, reset, submitting, classes, handletaxRefund } = props

  return (
    <form onSubmit={handleSubmit(handletaxRefund)} className={classes.container}>
      <Field
        name="income"
        component={TextField}
        label="Gross Salary 工資"
        placeholder="收入總額"
        type="number"
        className={classNames(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }} />
      <Field
        name="taxWithhold"
        component={TextField}
        label="Tax taxWithheld 扣繳稅款"
        type="number"
        className={classNames(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }} />
      <Field
        name="workExpenses"
        component={TextField}
        label="Deductions 工作相關支出"
        type="number"
        helperText="每年可以申報最多$300，無需保留收據的工作相關稅務抵免"
        className={classNames(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }} />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-readonly">Remote Zone 偏遠地區</InputLabel>
        <Field
          name="remoteZone"
          component={Select} >
          <MenuItem value="a">Zone A</MenuItem>
          <MenuItem value="b">Zone B</MenuItem>
          <MenuItem value="special">Special area</MenuItem>
          <MenuItem value="oversea">Overseas forces</MenuItem>
        </Field>
        { /*
        <FormHelperText>
          補助金額<br />
          Zone A => $338<br />
          Zone B => $57<br />
          Special area => $1,173<br />
          Overseas forces => $338<br />
        </FormHelperText>
      */ }
      </FormControl>
      <Button
        className={classNames(classes.infoBtn)}
        target="_blank"
        href="https://www.ato.gov.au/forms/withholding-declaration---calculating-your-tax-offset/?page=3"
      >
        <i className="material-icons">info</i>
      </Button>
      <FormControl fullWidth margin="dense">
        <FormControlLabel
          control={<Field name="resident" component={Switch} color="primary" />}
          label="Tax Resident 稅務居民"
        />
        <FormHelperText>
          - 澳洲入境超過六個月
          - 居住在澳洲同一地區超過六個月
          - 同一個工作公司或是同一個地區工作超過六個月
          - 你會需要有一個澳洲固定住址
          <Button
            className={classNames(classes.infoBtn)}
            target="_blank"
            href="https://www.ato.gov.au/Individuals/Ind/Residency---working-holiday-or-visit"
          >
            <i className="material-icons">info</i>
          </Button>
        </FormHelperText>
      </FormControl>
      <FormControl fullWidth margin="dense">
        <FormControlLabel
          control={<Field name="medicareLevy" component={Switch} color="primary" />}
          label="Medicare Levy 醫療減免"
        />
        <FormHelperText>
          這個是澳洲人的健保，但我們不是澳洲人，所以是可以申請來退的，為每人年總收入的2%，低於21355元就不用申請，但這個非強制，就算忘記申請也不會被罰款。如何申請減免
        </FormHelperText>
      </FormControl>
      <div className={classes.buttonBox}>
        <Button
          type="submit"
          variant="raised"
          color="primary"
          disabled={pristine || submitting}
          className={classes.button}>
          開始計算
        </Button>
        <Button
          type="submit"
          variant="raised"
          disabled={pristine || submitting}
          onClick={reset}
          className={classes.button}>
          清除
        </Button>
      </div>
    </form>
  )
};

Tax.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.any.isRequired,
  pristine: PropTypes.any.isRequired,
  reset: PropTypes.any.isRequired,
  submitting: PropTypes.any.isRequired,
  handletaxRefund: PropTypes.func.isRequired,
};

export default withStyles(styles)(Tax);
