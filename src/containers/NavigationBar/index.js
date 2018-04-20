import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary.main,
  }
});

class NavigationBar extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" color="default" className={classes.root}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            Australia Working Holiday Tax Return 澳洲打工度假退稅網
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavigationBar);
