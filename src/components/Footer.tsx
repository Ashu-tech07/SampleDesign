import { Box, Link, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default class Footer extends Component {
  render() {
    return (
      <>
      <Box component='footer'
       style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor:'transparent',
                }}>
                    <Typography  style={{marginRight:'10%', fontWeight:'bold', fontSize:'14px'}}>
                        @2023 Copyright
                    </Typography>
                    <Box style={{ margin: '1.3rem 0 1rem 0', display: 'flex', columnGap: '1rem' }}>
                        <Link href="https://www.instagram.com/" color='secondary' style={{ fontSize: '14px' }}>
                            <InstagramIcon fontSize='small' /></Link>
                        <Link href="https://twitter.com/" style={{ fontSize: '14px', color: '#1DA1F2' }}>
                            <TwitterIcon fontSize='small' /></Link>
                        <Link href="https://www.facebook.com/" color='primary' style={{ fontSize: '14px' }}>
                            <FacebookIcon fontSize='small' /></Link>
                            <Link href="https://www.linkedin.com/" color='primary' style={{ fontSize: '14px' }}>
                            <LinkedInIcon fontSize='small' /></Link>
                    </Box>
                </Box>
        
      </>
    )
  }
}

