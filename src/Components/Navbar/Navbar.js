import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './Styles';


//ICONS
import FormatQuoteIcon from '@material-ui/icons/FormatQuoteOutlined';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SchoolIcon from '@material-ui/icons/SchoolOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


function Navbar() {

    const classes = useStyles();


    return (
        <>
          <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} >
            <HomeIcon fontSize="large" /> 
          </Typography>
          
          <nav>
            <Tooltip title="Advise">
            <Link variant="button" color="textPrimary" href="/advise" className={classes.link} underline='none'>
              <SchoolIcon fontSize="large"/>
            </Link>
            </Tooltip>
            <Tooltip title="Quotes">
            <Link variant="button" color="textPrimary" href="/quotes" className={classes.link} underline='none'>
              <FormatQuoteIcon fontSize="large"/>
            </Link>
            </Tooltip>
            <Tooltip title="Jokes">
            <Link variant="button" color="textPrimary" href="/jokes" className={classes.link} underline='none'>
              <EmojiEmotionsIcon fontSize="large"/>
            </Link>
            </Tooltip>
            <Tooltip title="Bored">
            <Link variant="button" color="textPrimary" href="/bored" className={classes.link} underline='none'>
              <HelpOutlineIcon fontSize="large"/>
            </Link>
            </Tooltip>
          </nav>
        </Toolbar>
          </AppBar>   
        </>
    )
}


export default Navbar
