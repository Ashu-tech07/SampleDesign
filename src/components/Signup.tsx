import { Avatar, Box, Button, Checkbox, Grid, TextField, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import logoImg from '../images/image_shape.png'
import font from '../images/font.png'
import googleLogo from '../images/Glogo.png'
import { Skeleton } from '@material-ui/lab'

interface IStates{
    fullName ?: string,
    password?: string,
    isChecked?: boolean,
    loading?: boolean,
}
interface IProps{}

export default class Signup extends Component<IProps, IStates> {
    constructor(props:IProps){

        super(props);
        this.state={
            fullName:'',
            password:'',
            isChecked:true,
            loading: true,
        }

        setTimeout( ()=>{
            this.setState({ loading:false })
        }, 3000)
    }
    handleChange = (e:any) => {
        if (e.target.name === 'isChecked') {
            // debugger
            this.setState({ [e.target.name]: e.target.checked });
        }
        else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    handleSubmit = (e:any) => {
        console.log(this.state);
        alert(JSON.stringify(this.state))
        e.preventDefault();
    }

  render() {
    return (
     <>
     {this.state.loading &&  <Grid container justifyContent='center' >
        <Grid item xs={5} style={Styles.left}>
        <Skeleton animation='wave' height={50} width='22%'/>
        <Skeleton animation='wave' height={80} width='24%'/>
        <Skeleton animation='wave' height={60} width='85%'/>
        <Skeleton animation='wave' height={60} width='70%'/>
        <Skeleton animation='wave' height={30} width='90%'/>
        <Skeleton animation='wave' height={30} width='40%'/>
        </Grid>
        <Grid item xs={5} style={Styles.left}>
        <Skeleton animation='wave' height={80} width='24%'/>
        <Skeleton animation='wave' height={30} width='20%'/>
        <Skeleton animation='wave' variant='rect' height={45} width='70%'/>
        <Skeleton animation='wave' height={30} width='20%'/>
        <Skeleton animation='wave' variant='rect' height={45} width='70%'/>
        <Skeleton animation='wave' height={28} width='65%'/>
        <Skeleton animation='wave' variant='rect' height={45} width='70%'/>
        <Skeleton animation='wave' height={30} width={50} style={{marginLeft:'30%'}} />
        <Skeleton animation='wave' variant='rect' height={45} width='70%'/>
        <Skeleton animation='wave' height={30} width='55%' style={{marginLeft:'5%', marginBottom:'6%'}}/> 
        </Grid>
      </Grid>}

     { !this.state.loading && 
     <Grid container>
        <Grid item xs={6} style={signUp.leftStyle}>
            <Box style={signUp.leftBox}>
                <Typography variant='h5'>Welcome to</Typography>
                <img src={font} style={signUp.img}></img>
                <Typography style={signUp.text}>Unlock New Horizons of Alternative Investing</Typography>
                <Typography>Empower your portfolio with limitless choices. Select from tier-1 funds, dynamic
                    startups, and beyond.
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={6} style={{backgroundColor:'whitesmoke'}}>
          <Box style={signUp.rightBox}>
            <Typography style={signUp.signupText}>Sign Up</Typography>
            <Typography>Full name</Typography>
            <TextField variant='outlined' size='small' placeholder='Your full name' style={signUp.textField} 
             name='fullName' value={this.state.fullName} onChange={(e) => { this.handleChange(e) }}/>
            <Typography>Password</Typography>
            <TextField type='password' variant='outlined' size='small' placeholder='Your password' style={signUp.textField}
             name='password' value={this.state.password} onChange={(e) => { this.handleChange(e) }}/>
            <Grid style={{display:'inline-flex', marginLeft:-10}}>
            <Checkbox checked={this.state.isChecked} onClick={(e) => { this.handleChange(e) }}  style={signUp.check}/>
            <Typography style={{color:'#757575'}}>By continuing you agree to our <a href='#' style={signUp.link}>Terms & Conditions </a> 
            and <a href='#' style={signUp.link}>Privacy Policy</a></Typography>
            </Grid>
            <Button size='large' variant='contained' fullWidth style={signUp.btn} onClick={(e) => { this.handleSubmit(e) }}> Sign up</Button>
            <Typography style={signUp.textLogin}> OR </Typography>
            <Button size='large' variant='outlined' fullWidth style={signUp.btnGoogle} >
            <Avatar alt="google" src={googleLogo} style={signUp.avatar}/>
            Continue with Google
            </Button>
            <Typography style={signUp.textLogin}> Already have an account? <a href='#' style={signUp.link}>Log in</a> </Typography>
          </Box>
          
        </Grid>
     </Grid>
}
     </>   
    )
  }
}

const Styles={
    left:{
        justifyContent:'center',
        paddingTop:'5%',
        paddingLeft:'5%',
    },
}

const signUp={
    leftStyle:{
        backgroundImage:`url(${logoImg})`,
        backgroundPosition:'15% 70%',
        backgroundRepeat: 'no-repeat',
        backgroundColor:'#057bfa',
        opacity: 1,
        height:'100vh',    
    },
    leftBox:{
        display:'flex-inline',
        background:'transparent',
        justifyContent:'left',
        color:'white',
        marginTop:'17%',
        marginLeft:'10%',
        lineHeight:4,
    },
    rightBox:{
        display:'flex-inline',
        background:'transparent',
        marginTop:'15%',
        marginLeft:'10%',
        width:'50%'
    },
    img:{
        marginTop:'0.5rem',
    },
    text:{
        fontSize:'3rem',
        fontStyle:'bold',
        fontWeight:600,
        marginBottom:'1.5rem',
    },
    signupText:{
        fontStyle:'bold',
        fontWeight:1000,
        fontSize:'30px',
        fontFamily:'Georgia',
        marginBottom:'0.5rem'
    },
    textField:{
        width:'100%', 
        marginBottom:'1.2rem',
    },
    link:{
        textDecoration:'none',
        fontWeight:500,
        color:'#057bfa',
    },
    btn:{
        marginTop: 10,
        backgroundColor:'#057bfa',
        color:'white',
        borderRadius:'10px',
        marginBottom:10,
        textTransform:'none' as 'none'
    },
    btnGoogle:{
        marginTop: 10,
        borderRadius:'10px',
        marginBottom:10,
        textTransform:'none' as 'none'
    },
    avatar:{
        width:'18px',
        height:'18px',
        margin:4,
    },
    textLogin:{
        textAlign:'center' as 'center',
        color:'#757575',
    },
    check:{
        borderRadius:'25px',
        color:'#057bfa',
    }
}
