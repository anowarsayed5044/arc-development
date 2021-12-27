import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, useScrollTrigger, Tabs, Tab, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginTop: '1em'
    },
    logo: {
        height: '5em'
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px',
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        color: 'white',
    }
}));

export default function Header(){
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (e, value) => {
        setValue(value);
    }

    React.useEffect(() => {
        if (window.location.pathname === '/' && value !== 0){
            setValue(0);
        }else if (window.location.pathname === '/services' && value !== 1){
            setValue(1);
        }else if (window.location.pathname === '/revolutions' && value !== 2){
            setValue(2);
        }else if (window.location.pathname === '/about-us' && value !== 3){
            setValue(3);
        }else if (window.location.pathname === '/contact' && value !== 4){
            setValue(4);
        }
    }, [value]);

    return (
        <>
            <ElevationScroll>
                <AppBar position={'fixed'}>
                    <Toolbar disableGutters={true} >
                        <Button component={Link} to={'/'} className={classes.logoContainer}
                                onClick={()=> setValue(0)}
                                disableRipple={true}
                        >
                            <img src={logo} alt={'Company Logo'} className={classes.logo}/>
                        </Button>
                        <Tabs value={value} className={classes.tabContainer} onChange={handleChange} indicatorColor={'secondary'}>
                            <Tab className={classes.tab} component={Link} to={'/'} label={'Home'}/>
                            <Tab className={classes.tab} component={Link} to={'/services'} label={'Services'}/>
                            <Tab className={classes.tab} component={Link} to={'/revolutions'} label={'The Revolutions'}/>
                            <Tab className={classes.tab} component={Link} to={'/about-us'} label={'About US'}/>
                            <Tab className={classes.tab} component={Link} to={'/contact'} label={'Contact US'}/>
                        </Tabs>
                        <Button variant={'contained'} color={'secondary'} className={classes.button}>
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
}
