import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#2F4858",
        paddingTop: "6px",
        paddingBottom: "6px"
    },
    menuButtons: {
        marginLeft: "2rem",
        fontWeight: "500",
        color: "#eef4ed",
    },
    menu: {
        display: "flex",
        justifyContent: "center"
    }
}));

const headerMenu = [
    {
        label: "Projects",
        href: "/projects"
    },
    {
        label: "Skills",
        href: "/skills"
    },
    {
        label: "About Me",
        href: "/about-me"
    },
    {
        label: "Contact",
        href: "/contact"
    },
];

const Header = () => {

    const {header, menu, menuButtons} = useStyles();

    const displayDescktop = () => {
        return <Toolbar className={menu}> 
        <div>{getMenuButtons()}</div></Toolbar>
    };

    const getMenuButtons = () => {
        return headerMenu.map(({ label, href }) => {
            return (
                <Button  
                    {...{
                        key: label,
                        to: href,
                        component: Link,
                        className: menuButtons
                        }
                    }>
                    {label}
                </Button>)
        });
    };

    return (<AppBar position="relative" className={header} elevation={1}>{displayDescktop()} </AppBar>)
}

export default Header;