import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import asyncValidate from './asyncValidate'
import validate from './validate'
import Tax from '../../components/Tax';
import { createTax } from '../../actions';

const styles = theme => ({
  SnackbarContent: {
    minWidth: '100%',
  },
});

class TaxContainer extends Component {
  constructor(props) {
    super(props);

    this.props.initialize({ workExpenses: '300' });

    this.state = {
      taxReturn: 0,
      taxReturnSnack: false
    };

    this.handleTaxReturn = this.handleTaxReturn.bind(this);
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    initialize: PropTypes.func.isRequired,
    createTax: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.taxReturn !== this.props.taxReturn) {
      this.setState({
        taxReturnSnack: true,
        taxReturn: nextProps.taxReturn
      });
    }
  }

  handleTaxReturn = value => {
    this.props.createTax(value);
  };

  render() {
    const { classes, ...props } = this.props
    return (
      <div>
        <Tax
          {...props}
          handleTaxReturn={this.handleTaxReturn}
        />
        <Snackbar
          className={classes.SnackbarContent}
          open={this.state.taxReturnSnack}
          SnackbarContentProps={{
            className: classes.SnackbarContent,
          }}
          message={
            `Tax Return 退稅金額: \
            $${this.state.taxReturn}`
          } />
      </div>
    )
  }
}

const TaxContainerForm = reduxForm({
  form: 'TaxContainer',
  asyncValidate,
  validate
})(TaxContainer)

const mapStateToProps = (state, ownProps) => {
  return { taxReturn: state.tax.taxRefund }
}

export default withStyles(styles)(connect(mapStateToProps, { createTax })(TaxContainerForm));