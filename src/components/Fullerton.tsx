import { Box, Button, Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import firstImg from '../images/image4.jpg'
import secondImg from '../images/image5.jpg'
import fullerImg from '../images/fuller.jpg'
import BarChartIcon from '@material-ui/icons/BarChart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import PieChartIcon from '@material-ui/icons/PieChart';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Skeleton } from '@material-ui/lab'

interface IStates{
  loading?: boolean,
}
interface IProps{} 

export default class Fullerton extends Component<IProps, IStates> {
  constructor(props:IProps){
    super(props);
   this.state={
    loading:true,
   }
   setTimeout(()=>{
    this.setState({loading:false})
   },3000)
}
  render() {
    return (
      <>
      { this.state.loading && <Grid container justifyContent='center'>
          <Grid item container xs={8} spacing={2}>
            <Grid item xs={4} style={{ marginTop: '2%', marginBottom:'2%' }}>
              <Skeleton variant='rect' height={250} width='100%' />
            </Grid>
            <Grid item xs={8} style={{ marginTop: '2%', padding: '2%' }}>
              <Skeleton height={35} width='30%' />
              <Skeleton height={40} width='40%' />
              <Skeleton height={40} width='45%' />
              <Skeleton variant='text' width='100%' />
              <Skeleton variant='text' width='100%' />
              <Skeleton variant='text' width='100%' />
              <Skeleton variant='rect' height={25} width='20%' />
              
            </Grid>
          </Grid>
          <Grid item container xs={8} spacing={2}>
            <Grid item xs={4}>
             <Skeleton variant='rect' height={80} width='100%' />
            </Grid>
            <Grid item xs={4}>
            <Skeleton variant='rect' height={80} width='100%' />
            </Grid>
            <Grid item xs={4}>
            <Skeleton variant='rect' height={80} width='100%' />
            </Grid>
            <Grid item xs={4}>
            <Skeleton variant='rect' height={80} width='100%' />
            </Grid>
            <Grid item xs={4}>
            <Skeleton variant='rect' height={80} width='100%' />
            </Grid>
            <Grid item xs={4}>
            <Skeleton variant='rect' height={80} width='100%' />
            </Grid>
          </Grid>

          <Grid item container xs={8} spacing={2}>
            <Grid item xs={8} >
              <Skeleton height={50} width='30%' />
             <Skeleton variant='text' width='100%' />
             <Skeleton variant='text' width='100%' />
             <Skeleton variant='text' width='100%' />
            </Grid>
            <Grid item xs={4} style={{ marginTop: '2%' }}>
              <Skeleton variant='rect' height={250} width='100%' />
            </Grid>
          </Grid>
        </Grid>
        }

        { !this.state.loading && 
        <Grid container justifyContent='center'>
          <Grid item container xs={8} spacing={2}>
            <Grid item xs={4} style={{ marginTop: '2%' }}>
              <img src={`${firstImg}`} style={Styles.image} alt='profile' />
            </Grid>
            <Grid item xs={8} style={{ marginTop: '2%', padding: '2%' }}>
              <img src={`${fullerImg}`} />
              <Typography variant='h4' style={Styles.headingText}>Fullerton</Typography>
              <Typography variant='h4' style={Styles.headingText}>Optimised Alpha</Typography>
              <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi reprehenderit, magni debitis autem vero id quasi rem quos, fugit non iste laudantium repudiandae, eum eaque reiciendis a laboriosam obcaecati.</Typography>
              <Button variant='contained' style={Styles.btn}> Join waitlist</Button>
            </Grid>
          </Grid>
          <Grid item container xs={8} spacing={2}>
            <Grid item xs={4}>
              <Box style={Styles.box}>
                <BarChartIcon style={Styles.icon} />
                <Box style={Styles.boxItem}>
                  <Typography style={Styles.boxTextTitle}>Minimum Investment</Typography>
                  <Typography style={Styles.boxText}>$2300</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box style={Styles.box}>
                <DonutLargeIcon style={Styles.icon} />
                <Box style={Styles.boxItem}>
                  <Typography style={Styles.boxTextTitle}>Allocation</Typography>
                  <Typography style={Styles.boxText}>$100K</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box style={Styles.box}>
                <AutorenewIcon style={Styles.icon} />
                <Box style={Styles.boxItem}>
                  <Typography style={Styles.boxTextTitle}>Round</Typography>
                  <Typography style={Styles.boxText}>Seed+</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box style={Styles.box}>
                <MonetizationOnIcon style={Styles.icon} />
                <Box style={Styles.boxItem}>
                  <Typography style={Styles.boxTextTitle}>Estimated fees</Typography>
                  <Typography style={Styles.boxText}>10%</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box style={Styles.box}>
                <YoutubeSearchedForIcon style={Styles.icon} />
                <Box style={Styles.boxItem}>
                  <Typography style={Styles.boxTextTitle}>Pre-Money Valuation</Typography>
                  <Typography style={Styles.boxText}>$17M</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box style={Styles.box}>
                <PieChartIcon style={Styles.icon} />
                <Box style={Styles.boxItem}>
                  <Typography style={Styles.boxTextTitle}>Share Type</Typography>
                  <Typography style={Styles.boxText}>Preferred</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid item container xs={8} spacing={2}>
            <Grid item xs={8} >

              <Typography style={Styles.memoText}>Memo</Typography>

              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi reprehenderit, magni debitis autem vero id quasi rem quos, fugit non iste laudantium repudiandae, eum eaque reiciendis a laboriosam obcaecati.</Typography>

            </Grid>
            <Grid item xs={4} style={{ marginTop: '2%' }}>
              <img src={`${secondImg}`} style={Styles.image} alt='image'/>
            </Grid>
          </Grid>
        </Grid>
  }
      </>
    )
  }
}

const Styles = {
  image: {
    width: '100%',
    height: '90%',
    borderRadius: '14px',
    paddingRight: '2%',
    paddingLeft: '2%',

  },
  box: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    border: '1px solid',
    borderColor: '#057bfa',
    backgroundColor: 'lightgrey',
  },
  boxItem:{
    marginLeft: 10, 
    padding: 5
  },
  boxTextTitle: {
    color: '#757575',
    fontSize: '12px',

  },
  boxText: {
    fontSize: '22px',
    color: '#057bfa',
    fontStyle: 'bold',
    fontWeight: 600,
  },
  icon: {
    width: '40px',
    height: '40px',
    color: '#057bfa',
    marginLeft: 5,
  },
  btn: {
    backgroundColor: '#057bfa',
    color: 'whitesmoke',
    textTransform: 'none' as 'none',
    borderRadius: '10px',
    marginTop: '1%'
  },
  headingText:{
    fontStyle: 'italic', 
    fontWeight: 700, 
    marginBottom: 6,
  },
  memoText:{
       
      fontSize: '1.6rem',
      fontStyle: 'italic', 
      fontWeight: 700,
      marginTop: '10%',
   
  }
}
