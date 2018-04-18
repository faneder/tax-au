import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRoot from '../withRoot';
import { withStyles } from 'material-ui/styles';

import Tax from './Tax';
import NavigationBar from './NavigationBar';
import showResults from './showResults';

const styles = theme => ({
  root: {
    textAlign: 'center',
  }
});

class App extends Component {

  // static childContextTypes = {
  //     theme: React.PropTypes.object,
  // };

  render() {
    const { classes } = this.props;
    console.log(this.props)

    return (
      <div className={classes.root}>
        <NavigationBar className={classes.navigationBar}/>
        <Tax onSubmit={showResults}/>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));