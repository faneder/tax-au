import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  title: {
    margin: theme.spacing.unit * 2
  }
});

const NavigationBar = ({ classes, title }) => (
  <AppBar position="static" color="primary" className={classes.root}>
    <Toolbar>
      <Typography
        variant="title"
        color="inherit"
        className={classNames(classes.flex, classes.title)}
        align="left"
      >
        {title}
      </Typography>
      <IconButton color="inherit" target="_blank" href="https://www.linkedin.com/in/eder-fan-332813b9/">
        <i className="fab fa-linkedin" />
      </IconButton>
      <IconButton color="inherit" target="_blank" href="https://github.com/faneder/tax-au">
        <i className="fab fa-github" />
      </IconButton>
    </Toolbar>
  </AppBar>
)

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default withStyles(styles)(NavigationBar);