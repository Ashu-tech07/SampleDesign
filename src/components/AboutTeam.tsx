import { Box, Grid, Paper, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import { Skeleton } from '@material-ui/lab'

const profiles = [
    { name: 'James Smith', position: 'DIRECTOR, CEO', image: `${img1}` },
    { name: 'James Smith', position: 'DIRECTOR, CEO', image: `${img2}` },
    { name: 'James Smith', position: 'DIRECTOR, CEO', image: `${img3}` },
    { name: 'James Smith', position: 'DIRECTOR, CEO', image: `${img1}` },
    { name: 'James Smith', position: 'DIRECTOR, CEO', image: `${img2}` },
    { name: 'James Smith', position: 'DIRECTOR, CEO', image: `${img3}` },
]

interface IStates {
    loading?: boolean,
}
interface IProps { }
export default class AboutTeam extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: true,
        }
        setTimeout(() => {
            this.setState({ loading: false })
        }, 3000)
    }

    render() {
        return (
            <>
                {this.state.loading &&
                    <Paper style={Styles.mainContainer}>
                        <Grid container xs={7} style={Styles.gridContainer}>
                            <Grid item xs={12}>
                               <Skeleton variant='text' width='80%'/>
                               <Skeleton height={60} width='100%'/>
                            </Grid>
                            <Grid item xs={12} container spacing={3}>
                                <Grid item xs={4}>
                                <Skeleton height={65} width='80%'/>
                                <Skeleton variant='text' width='90%'/>
                                <Skeleton variant='text' width='90%'/>

                                </Grid>
                                <Grid item xs={4}>
                                <Skeleton height={65} width='80%'/>
                                <Skeleton variant='text' width='90%'/>
                                <Skeleton variant='text' width='90%'/>
                                </Grid>
                                <Grid item xs={4}>
                                <Skeleton height={65} width='80%'/>
                                <Skeleton variant='text' width='90%'/>
                                <Skeleton variant='text' width='90%'/>
                                </Grid>
                                {
                                    profiles.map((element) => {
                                        return (
                                            <Grid item xs={4}>
                                                <Skeleton variant='rect' height={200} width='100%'/>
                                                <Skeleton variant='text' width='60%'/>
                                                <Skeleton variant='text' width='60%'/>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Paper>
                }

                {!this.state.loading &&
                    <Paper style={Styles.mainContainer}>
                        <Grid container xs={7} style={Styles.gridContainer}>
                            <Grid item xs={12}>
                                <Typography style={Styles.directorText}>Success of any platform is contingent upon the proficiency of the team constructing it</Typography>
                                <Typography style={Styles.headingText}>Meet the team constructing this plateform with you in mind</Typography>
                            </Grid>
                            <Grid item xs={12} container spacing={3}>
                                <Grid item xs={4}>
                                    <Typography style={Styles.gridItemHeading}>Experienced</Typography>
                                    <Typography component='li' style={Styles.gridItemText}>Decades of experience</Typography>
                                    <Typography component='li' style={Styles.gridItemText}>Investment, product, compliance</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography style={Styles.gridItemHeading}>Commitment</Typography>
                                    <Typography component='li' style={Styles.gridItemText}>Best opportunity and exceptional results</Typography>
                                    <Typography component='li' style={Styles.gridItemText}>Valuable insights and guidance</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography style={Styles.gridItemHeading}>Customer-centric</Typography>
                                    <Typography component='li' style={Styles.gridItemText}>Superior investment experience</Typography>
                                    <Typography component='li' style={Styles.gridItemText}>Meets your unique requirements</Typography>
                                </Grid>
                                {
                                    profiles.map((element) => {
                                        return (
                                            <Grid item xs={4}>
                                                <img src={element.image} style={Styles.image} alt='profile' />
                                                <Typography>{element.name}</Typography>
                                                <Typography style={Styles.directorText}>{element.position}</Typography>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Paper>
                }

            </>
        )
    }
}

const Styles = {
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh'
    },
    gridContainer: {
        marginTop: 16,
    },

    directorText: {
        color: '#057bfa',
        fontSize: '14px',
        fontWeight: 500,
    },
    headingText: {
        fontSize: '35px',
        fontWeight: 600,
        marginTop: 10,
        marginBottom: 30,
        fontStyle: 'bold'
    },
    gridItemHeading: {
        fontSize: '28px',
        color: '#057bfa',
        fontWeight: 1000,
        fontStyle: 'italic',
        marginBottom: 6,
    },
    gridItemText: {
        fontSize: '14px'
    },
    image: {
        width: '100%',
        height: '80%',
        borderRadius: '14px'
    },
}

