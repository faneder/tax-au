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
    background: theme.palette.primary.dark,
  },
});

class TaxContainer extends Component {
  constructor(props) {
    super(props);

    this.props.initialize({ workExpenses: '300' });

    this.state = {
      taxRefundSnack: false,
      taxInfoText: null
    };

    this.handletaxRefund = this.handletaxRefund.bind(this);
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    initialize: PropTypes.func.isRequired,
    createTax: PropTypes.func.isRequired,
    taxRefund: PropTypes.number,
  };

  static defaultProps = {
    taxRefund: 0
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.taxRefund !== this.props.taxRefund) {
      this.setState({
        taxRefundSnack: true,
        taxRefund: nextProps.taxRefund,
        taxInfoText: (nextProps.taxRefund > 0) ? 'tax refuned 退稅金額' : 'have to pay 補稅金額'
      });
    }
  }

  handletaxRefund = value => {
    this.props.createTax(value);
  };

  render() {
    const { classes, ...props } = this.props

    return (
      <div>
        <Tax
          {...props}
          handletaxRefund={this.handletaxRefund}
        />
        <Snackbar
          className={classes.SnackbarContent}
          open={this.state.taxRefundSnack}
          SnackbarContentProps={{
            className: classes.SnackbarContent,
          }}
          message={
            `${this.state.taxInfoText} \
            $${this.props.taxRefund}`
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

const mapStateToProps = (state) => {
  return { ...state.tax }
}

export default withStyles(styles)(connect(mapStateToProps, { createTax })(TaxContainerForm));
