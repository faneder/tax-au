import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRoot from '../withRoot';
import { withStyles } from '@material-ui/core/styles';

import TaxContainer from './Tax';
import NavigationBar from './NavigationBar';
// import showResults from './showResults';

const styles = theme => ({
  root: {
    textAlign: 'center',
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavigationBar className={classes.navigationBar} />
        <TaxContainer />
        { /* <TaxContainer onSubmit={showResults} /> */ }
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
