import { React, useState, useEffect } from 'react';
import { Toolbar, AppBar, makeStyles, Button, IconButton, SwipeableDrawer, MenuItem, Box, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { Link } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "#33658A",
        paddingTop: "6px",
        paddingBottom: "6px"
    },
    menuButtons: {
        margin: theme.spacing(2),
        marginBottom: "10px",
        paddingBottom: "2px",
        fontWeight: "400",
        fontSize: "16px",
        color: "#eef4ed",
        borderRadius: "0px",
        '&:hover': {
            borderBottom: "1px solid #F26419",
            backgroundColor: "transparent"
        }
    },
    menu: {
        display: "flex",
        justifyContent: "center"
    },
    toolBarMobile: {
        backgroundColor: "#2F4858",
        textDecoration: "none", 
        color: "#eef4ed",
        
    },
    drawerExitIcon: {
        backgroundColor: "#2F4858",
        color: "#eef4ed",        
        display: "block",
        marginTop: "7px",
        marginRight: "7px",
    },
     drawerButton: {
        backgroundColor: "#F26419",
        color: "#eef4ed",
        borderRadius: "35px",
        width: "160px",
        height: "45px",
        fontSize: "16px",
        fontWeight: "400",
        marginTop: "15px",
     },
     drawerBackgrounColor: {
         backgroundColor: "#2F4858",
         width: "100%"
     },
     menuItemAllignment: {
        justifyContent: "center",
        marginTop: "15px",
        marginBottom: "15px",
     }
}));

const headerMenu = [
    {
        label: "Projects",
        href: "projects"
    },
    {
        label: "Skills",
        href: "skills"
    },
    {
        label: "About Me",
        href: "about"
    },
    {
        label: "Contact",
        href: "contact"
    },
];

const Header = () => {

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsivness = () => {
            return window.innerWidth <= 800
            ? setState((prevState) => ({...prevState, mobileView: true})) 
            : setState((prevState) => ({...prevState, mobileView: false}));
        };
        setResponsivness();
        window.addEventListener("resize", () => setResponsivness())
    }, []);

    const {header, menu, menuButtons, toolBarMobile, drawerExitIcon, drawerButton, drawerBackgrounColor, menuItemAllignment} = useStyles();

    const displayDescktop = () => {
        return <Toolbar className={menu}><div>{getMenuButtons()}</div></Toolbar>
    };

    const closeDrawer = () => {
        setState((prevState) => ({...prevState, drawerOpen: false}));
    };

    const displayMobile = () => {
        const handleDrawerOpen = () => {
            setState((prevState) => ({...prevState, drawerOpen: true}));
        };
        const handleDrawerClose = () => {
            setState((prevState) => ({...prevState, drawerOpen: false}));
        };
        return (
            <Toolbar >
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        size: "medium",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                        onOpen: handleDrawerOpen,
                        classes: {paper: drawerBackgrounColor}
                    }}
                >
                    <Box display="flex" justifyContent="flex-end">
                        <CloseIcon 
                            className={drawerExitIcon}
                            fontSize="large"
                            onClick={closeDrawer} />
                    </Box>
                    {getDrawerChoices()}
                        
                        <Link to="contact-form" smooth="true" onClick={closeDrawer} style={{backgroundColor: "#2F4858", alignSelf: "center", paddingTop: "15px"}}>
                            <Button className={drawerButton} >
                                HIRE ME
                            </Button>
                        </Link> 
                </SwipeableDrawer>
            </Toolbar>
        )
    }

    const getMenuButtons = () => {
        return headerMenu.map(({ label, href }) => {
            return (
                <Button className={menuButtons} key={label}> 
                    <Link
                        {...{
                            to: href,
                            smooth: true,
                            }
                        }>
                        {label}
                    </Link>
                </Button>
                )
        });
    };

    const getDrawerChoices = () => {
        return (headerMenu.map(({ label, href }) => {
            return (
                <div className={toolBarMobile} key={label}>
                    <Link
                        {...{
                            to: href,
                            smooth: true,
                            onClick: closeDrawer,
                            }
                        }>
                        <MenuItem {...{classes:{root: menuItemAllignment}}} style={{fontSize: "24px", fontWeight: "200"}}>{label}</MenuItem>
                    </Link>
                    <Divider />
                </div>
            )
        })
        )}

    return (
        <AppBar position="relative" className={header} elevation={1}>
            {mobileView ? displayMobile() : displayDescktop()} 
        </AppBar>
    )
}

export default Header;