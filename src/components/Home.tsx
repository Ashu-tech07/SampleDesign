import { AppBar, Button, Divider, Grid, IconButton, Snackbar, Toolbar, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'



interface IStates {
  open?: boolean,
}

interface IProps {}

export default class Home extends Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
  };

  handleOpen = () => {
    this.setState({ open: true, });
  }

  handleClose = (event?: any, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  }

  render() {

    return (
      <>
        <AppBar position='static' style={Styles.appBar}>
          <Toolbar>
            <Typography style={Styles.title}>Designs</Typography>
            <Link to='/signup'>
              <Button variant='contained' size='small' style={Styles.btn} onClick={this.handleOpen}>Sign Up</Button>
            </Link>
            <Link to='/vision'>
              <Button variant='contained' size='small' style={Styles.btn} onClick={this.handleOpen}>Vision</Button>
            </Link>
            <Link to='/fullerton'>
              <Button variant='contained' size='small' style={Styles.btn} onClick={this.handleOpen}>Fullerton</Button>
            </Link>
            <Link to='/about_team'>
              <Button variant='contained' size='small' style={Styles.btn} onClick={this.handleOpen}>About team</Button>
            </Link>
            <Link to='/form'>
              <Button variant='contained' size='small' style={Styles.btn} onClick={this.handleOpen}>Form</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          message='Page is opening soon...'
          action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </>
    )
  }
}

const Styles = {
  appBar: {
    boxShadow: 'none',
    minHeight: '10vh',
    height: '10vh',
    backgroundColor:'transparent',
  },
  title: {
    fontSize: '28px',
    color: '#057bfa',
    fontWeight: 700,
    flexGrow: 1,
  },
  btn: {
    backgroundColor: '#057bfa',
    borderRadius: '12px',
    color: 'whitesmoke',
    marginLeft: 10,
    marginRight: 10,
    textTransform: 'capitalize' as 'capitalize',
  }
}
