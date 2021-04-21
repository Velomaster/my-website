import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Grid, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#2F4858",
        
    },
    subtitle: {
        paddingTop: "2rem",
        paddingLeft: "3rem",
        color: "#F6AE2D", 
        fontWeight: "300",
        fontSize: "28px"
    },
    form: {
        paddingTop: "1rem",
        paddingLeft: "3rem",

    },
<<<<<<< HEAD
=======
    inputRoot: {
        color: "white",
        '&::after': {
            borderBottomColor: "white !important",
        },
        '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: "white !important",
        }
    },
    inputUnderline: {
        '&::before': {
            borderBottomColor: "white !important",
        }
    },
    labelRoot: {
        color: "white !important",
    },
>>>>>>> ec0b3789b51b69363209932711ab165a42050490
    button: {
        color: "#2F4858",
        backgroundColor: "#eef4ed",
        borderRadius: "20px",
        width: "150px",
        height: "40px",
        marginBottom: "2rem"
    },
<<<<<<< HEAD
    input: {
        "&$focusedLabel": {
            color: "cyan",
            fontWeight: "300"
        },
        color: "cyan",
        "&:after": {
            borderBottom: `2px solid cyan`,
            color: "cyan",
            
        }
    },
    inputField: {
        color: "#eef4ed",
        fontSize: "18px",
        fontWeight: "300"
    },
    inputLabel: {
        "&$focusedLabel": {
            color: "cyan"
          },
        color: "cyan", 
    },
    focusedLabel: {
    }
    
=======
>>>>>>> ec0b3789b51b69363209932711ab165a42050490
}))
const ContactForm = () => {
    const classes = useStyles();

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
      };

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} >
                <h3 className={classes.subtitle}>Have a project in mind? Send me a message and let's start working</h3>

            </Grid>
            <Grid item xs={12}>
                <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6}>
                                <Controller
                                    control={control}
                                    name="name"
                                    defaultValue=""
                                    className={classes.input}
                                    render={({ field }) => 
                                        <TextField {...field}
                                            id="name" 
                                            fullWidth 
                                            required
                                            label="Your Name" 
<<<<<<< HEAD
                                            InputProps={{classes: {
                                                root: classes.input,
                                                focused: classes.focusedLabel,
                                                } 
                                            }}
                                            InputLabelProps={{
                                                classes: {
                                                    root: classes.inputLabel,
                                                    focused: classes.inputField
                                                }
                                            }}
=======
                                            InputLabelProps={{classes: {
                                                root: classes.labelRoot,
                                            }}}
                                            InputProps={{classes: {
                                                root: classes.inputRoot,
                                                underline: classes.inputUnderline,
                                            }}}
>>>>>>> ec0b3789b51b69363209932711ab165a42050490
                                        />} 
                                />
                            </Grid>
                            <Grid item sm={12} md={6}>
                            <Controller
                                    control={control}
                                    name="email"
                                    defaultValue=""
                                    render={({ field }) => 
                                        <TextField {...field}
                                            id="email" 
                                            fullWidth 
                                            required
                                            label="Email" 
                                            InputProps={{className: classes.inputField}}
                                            InputLabelProps={{className: classes.inputField}}
                                            className={classes.input}
                                        />} 
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <Controller
                                    control={control}
                                    name="projectDetails"
                                    defaultValue=""
                                    render={({ field }) => 
                                        <TextField {...field}
                                            id="projectDetails" 
                                            fullWidth 
                                            required
                                            multiline
                                            rows={4}
                                            rowsMax={4}
                                            label="Project Details" 
                                            style={{marginBottom: "2rem"}}
                                            InputProps={{className: classes.inputField}}
                                            InputLabelProps={{className: classes.inputField}}
                                            className={classes.input}
                                        />} 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button disableElevation variant="contained" className={classes.button} type="submit">Submit</Button>
                            </Grid>
                        </Grid>
                </form>
            </Grid>
        </Grid>
    )
};

export default ContactForm;