import React from 'react';
import { Toolbar, AppBar, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "#2F4858",
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

    const {header, menu, menuButtons} = useStyles();

    const displayDescktop = () => {
        return <Toolbar className={menu}> 
        <div>{getMenuButtons()}</div></Toolbar>
    };

    const getMenuButtons = () => {
        return headerMenu.map(({ label, href }) => {
            return (
                <Button className={menuButtons}> 
                    <Link
                        {...{
                            key: label,
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

    return (<AppBar position="relative" className={header} elevation={1}>{displayDescktop()} </AppBar>)
}

export default Header;