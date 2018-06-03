import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import asyncValidate from './asyncValidate'
import validate from './validate'
import { createTax } from '../../actions';
import Tax from '../../components/Tax';
import MessageBar from '../../components/MessageBar';

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
    const { ...props } = this.props

    return (
      <div>
        <Tax
          {...props}
          handletaxRefund={this.handletaxRefund}
        />
        <MessageBar
          taxRefundSnack={this.state.taxRefundSnack}
          taxInfoText={this.state.taxInfoText}
          taxRefund={this.props.taxRefund}
        />
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

export default (connect(mapStateToProps, { createTax })(TaxContainerForm));
