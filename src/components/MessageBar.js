import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
  SnackbarContent: {
    minWidth: '100%',
    background: theme.palette.primary.dark,
  },
});

const MessageBar = props => {
  const { classes, taxRefundSnack, taxRefund, taxInfoText } = props

  return (
    <Snackbar
      className={classes.SnackbarContent}
      open={taxRefundSnack}
      SnackbarContentProps={{
        className: classes.SnackbarContent,
      }}
      message={
        `${taxInfoText} \
        $${taxRefund}`
      } />
  )
}

MessageBar.propTypes = {
  classes: PropTypes.object.isRequired,
  taxRefundSnack: PropTypes.any.isRequired,
  taxRefund: PropTypes.number,
  taxInfoText: PropTypes.string,
};

export default withStyles(styles)(MessageBar);