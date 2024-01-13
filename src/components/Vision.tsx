import { Divider, Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import groupPic from '../images/group_shape.png'
import { Skeleton } from '@material-ui/lab'

interface IStates{
    loading?: boolean,
}
interface IProps{} 
export default class Vision extends Component <IProps,IStates>{
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
            { this.state.loading &&
                <Grid container justifyContent='center'>
                    <Grid item container xs={4} style={Styles.mainContainerItem}>
                        <Grid item xs={12}>
                           <Skeleton height={70} width='40%'/>
                           <Skeleton height={40} width='70%'/>
                        </Grid>
                        <Grid item xs={12}>
                        <Skeleton height={70} width='40%'/>
                           <Skeleton height={40} width='70%'/>
                        </Grid>
                        <Grid item xs={12}>
                        <Skeleton height={70} width='40%'/>
                           <Skeleton height={40} width='70%'/>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} style={{ display: 'flex', justifyContent: 'center' }}>
                       
                    </Grid>
                    <Grid item container xs={4} style={Styles.mainContainerItem}>
                        <Grid item xs={12} style={Styles.mainContainerItem}>
                        <Skeleton height={70} width='40%'/>
                           <Skeleton height={40} width='70%'/>
                        </Grid>
                        <Grid item xs={12}>
                        <Skeleton height={70} width='40%'/>
                           <Skeleton height={40} width='70%'/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Skeleton variant='rect' height={150} width='100%'/>
                    </Grid>
                </Grid>
            }
            
            {!this.state.loading && <>
                <Grid container style={Styles.mainContainer1}>
                    <Grid item container xs={4} style={Styles.mainContainerItem}>
                        <Grid item xs={12}>
                            <Typography style={Styles.heading}>Mission</Typography>
                            <Divider style={Styles.horizontal} />
                            <Typography>Democratise alternative asset access</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={Styles.heading}>Motivation</Typography>
                            <Divider style={Styles.horizontal} />
                            <Typography>Democratise alternative asset access</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={Styles.heading}>Promise</Typography>
                            <Divider style={Styles.horizontal} />
                            <Typography>Democratise alternative asset access</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Divider orientation='vertical' style={Styles.vertical} />
                    </Grid>
                    <Grid item container xs={4} style={Styles.mainContainerItem}>
                        <Grid item xs={12} style={Styles.mainContainerItem}>
                            <Typography style={Styles.heading}>Belief</Typography>
                            <Divider style={Styles.horizontal} />
                            <Typography>Democratise alternative asset access</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={Styles.heading}>Team</Typography>
                            <Divider style={Styles.horizontal} />
                            <Typography>Democratise alternative asset access</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container style={Styles.mainContainer2}>
                    <Typography style={Styles.footerText1}>Premier digital first plateform for</Typography>
                    <Typography style={Styles.footerText2}>Alternative Investing.</Typography>

                </Grid>
            </>
        }
            </>
        )
    }
}

const Styles = {
    mainContainer1: {
        minHeight: '75vh',
        justifyContent: 'center',
        backgroundImage: `url(${groupPic})`,
        backgroundPosition: '50% 25%',
        backgroundSize: '40% 70%',
        backgroundRepeat: 'no-repeat'
    },
    mainContainer2: {
        minHeight: '25vh',
        backgroundColor: '#057bfa',
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column' as 'column'
    },
    mainContainerItem: {
        marginTop: 60,
    },
    heading: {
        fontSize: '220%',
        fontStyle: 'italic',
        fontWeight: 1000,
        color: '#1976d2',

    },
    horizontal: {
        width: '60%',
        marginBottom: 6,
        marginTop: 3,
    },
    vertical: {
        margin: 20
    },
    footerText1: {
        fontSize: '2.2rem',
        color: 'white',
        fontStyle: 'bold',
    },
    footerText2: {
        fontSize: '250%',
        color: '#05e680',
        fontStyle: 'italic',
        fontWeight: 1000
    }
}
