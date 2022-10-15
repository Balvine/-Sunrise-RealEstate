import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';




const BackgroundWrapper = styled('div')(({ theme }) => ({
    backgroundColor: '#2B2B39',
    padding: '10px 20px',
    [theme.breakpoints.up('md')]: {
      padding: '30px 60px',
    },
  }));
  
  const FooterWrapper = styled('div')(({ theme }) => ({
    backgroundColor: '#20202d',
    padding: '10px 20px',
    [theme.breakpoints.up('md')]: {
      padding: '30px 150px',
    },
  }));




const Footer = (props: any) => {
    return (
      <>
      <BackgroundWrapper>
        <CssBaseline />
        <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
          <Grid container>
            <Grid item xs={3} md={2}>
              <List
                component="nav"
                subheader={
                  <ListSubheader component="div" sx={{backgroundColor: 'transparent', fontSize: '18px', color: '#fff'}}>
                    Home
                  </ListSubheader>
                }
              >
                <ListItemButton sx={{color: '#e7e7e7'}}>Home</ListItemButton>
                <ListItemButton sx={{color: '#e7e7e7'}}>Open Days</ListItemButton>
                <ListItemButton sx={{color: '#e7e7e7'}}>Events</ListItemButton>
                <ListItemButton sx={{color: '#e7e7e7'}}>Contact us</ListItemButton>
              </List>
            </Grid>
            <Grid item xs={3} md={2}>
              <List
                component="nav"
                subheader={
                  <ListSubheader component="div" sx={{backgroundColor: 'transparent', fontSize: '18px', color: '#fff'}}>
                    
                  </ListSubheader>
                }
              >
               
              </List>
            </Grid>
            <Grid item xs={3} md={2}>
              <List
                component="nav"
                subheader={
                  <ListSubheader component="div" sx={{backgroundColor: 'transparent', fontSize: '18px', color: '#fff'}}>
                   
                  </ListSubheader>
                }
              >
               
              </List>
            </Grid>
            <Grid item xs={3} md={2}>
              <List
                component="nav"
                subheader={
                  <ListSubheader component="div" sx={{backgroundColor: 'transparent', fontSize: '18px', color: '#fff'}}>
                    Main links
                  </ListSubheader>
                }
              >
                <ListItemButton sx={{color: '#e7e7e7'}}>Sunrise Homes</ListItemButton>
                <ListItemButton sx={{color: '#e7e7e7'}}>Upcoming Projects</ListItemButton>
                <ListItemButton sx={{color: '#e7e7e7'}}>Our Team</ListItemButton>
                <ListItemButton sx={{color: '#e7e7e7'}}>sunrise Tatu city</ListItemButton>
              </List>
            </Grid>
            
          </Grid>
        </Container>
      </BackgroundWrapper>
      <FooterWrapper>
        <Grid container textAlign={'center'}>
          <Grid item xs={12} md={4}>
        
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{color: '#fff'}}></Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack direction='row' spacing={1} sx={{justifyContent: {xs: 'center', md: 'flex-end'}}}>
            <Avatar sx={{bgcolor: '#fff'}}><TwitterIcon sx={{color: "#2b2b39"}}/></Avatar>
            <Avatar sx={{bgcolor: '#fff'}}><InstagramIcon sx={{color: "#2b2b39"}}/></Avatar>
            <Avatar sx={{bgcolor: '#fff'}}><FacebookIcon sx={{color: "#2b2b39"}}/></Avatar>
            <Avatar sx={{bgcolor: '#fff'}}><LinkedInIcon sx={{color: "#2b2b39"}}/></Avatar>
            </Stack>
          </Grid>
        </Grid>
      </FooterWrapper>
      </>
    );
  };
  export default Footer