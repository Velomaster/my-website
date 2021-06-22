import {React, useState} from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { TextField, Grid, Button, Box, makeStyles } from "@material-ui/core";
import Loader from "react-loader-spinner";
import ModalElement from "../ModalElement/ModalElement";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#2F4858",
    },
    subtitle: {
        paddingLeft: "2rem",
        paddingTop: "1rem",
        color: "#F6AE2D", 
        fontWeight: "300",
        fontSize: "28px",
        textAlign: "start",
    },
    form: {
        paddingTop: "2rem",
    },
    inputRoot: {
        color: "#eef4ed",
        fontWeight: "300",
        fontSize: "18px",
        '&::after': {
            borderBottomColor: "#eef4ed !important",
        },
        '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: "#eef4ed !important",
        }
    },
    inputUnderline: {
        '&::before': {
            borderBottomColor: "#eef4ed !important",
        },
    },
    labelRoot: {
        color: "#eef4ed !important",
    },
    button: {
        color: "#2F4858",
        backgroundColor: "#eef4ed",
        borderRadius: "20px",
        width: "150px",
        height: "40px",
        marginBottom: "2rem",
    },
}))
const ContactForm = () => {
    const classes = useStyles();

    const schema = yup.object().shape({
        name: yup.string().min(2).required().max(60).trim().matches(/^[a-zA-Z\s]*$/, "enter letters only"),
        email: yup.string().email().required().trim(),
        jobDescription: yup.string().min(5, "project details must be at least 5 characters").required()
    });

    const { control, formState: { errors }, handleSubmit, reset } = useForm({resolver: yupResolver(schema)});

    const [unableButtton, setUnableButton] = useState(false);

    const [showLoader, setShowLoader] = useState(false);

    const loader =  <Loader
        type="Oval"
        color="#F26419"
        height={100}
        width={100}
        timeout={1000} //3 secs
    />
    
    const onSubmit = (data) => {
        setShowLoader(true);
        setUnableButton(true);
        
        fetch('/form', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => {
                        setShowLoader(false);
                        setUnableButton(false);
                        // error message
                        console.log('Error message: ', body.message)
                    });
            } else {
                // success message
                setShowLoader(false);
                setUnableButton(false);
                reset({
                    name: "",
                    email: "",
                    jobDescription: ""});
            };
        })
        .catch(error => {
            console.log('error: Network error');
        });
    };
    
    return (
        <Grid container justify="center" className={classes.root}>
            <ModalElement open={showLoader}>
                {loader}
            </ModalElement>
            <Grid item xs={12} >
                <h3 className={classes.subtitle}>Have a project in mind? Send me a message and let's start working</h3>
            </Grid>
            <Grid item xs={11}>
                <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <Grid container  spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Controller
                                    control={control}
                                    name="name"
                                    defaultValue=""
                                    className={classes.input}
                                    render={({ field }) => 
                                        <TextField {...field}
                                            id="name" 
                                            fullWidth 
                                            label="Your Name"
                                            error={errors.name ? true : null}
                                            helperText={errors.name?.message}
                                            InputLabelProps={{classes: {
                                                root: classes.labelRoot,
                                            }}}
                                            InputProps={{classes: {
                                                root: classes.inputRoot,
                                                underline: classes.inputUnderline,
                                            }}}
                                        />} 
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <Controller
                                    control={control}
                                    name="email"
                                    defaultValue=""
                                    render={({ field }) => 
                                        <TextField {...field}
                                            id="email" 
                                            fullWidth 
                                            label="Email" 
                                            error={errors.email ? true : null}
                                            helperText={errors.email?.message}
                                            InputLabelProps={{classes: {
                                                root: classes.labelRoot,
                                            }}}
                                            InputProps={{classes: {
                                                root: classes.inputRoot,
                                                underline: classes.inputUnderline,
                                            }}}
                                        />} 
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <Controller
                                    control={control}
                                    name="jobDescription"
                                    defaultValue=""
                                    render={({ field }) => 
                                        <TextField {...field}
                                            id="jobDescription" 
                                            fullWidth 
                                            multiline
                                            rows={4}
                                            rowsMax={4}
                                            label="Project Details" 
                                            error={errors.jobDescription ? true : null}
                                            helperText={errors.jobDescription?.message}
                                            style={{marginBottom: "2rem"}}
                                            InputLabelProps={{classes: {
                                                root: classes.labelRoot,
                                            }}}
                                            InputProps={{classes: {
                                                root: classes.inputRoot,
                                                underline: classes.inputUnderline,
                                            }}}
                                        />} 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="flex-start">
                                    <Button disableElevation variant="contained" className={classes.button} type="submit" disabled={unableButtton}>Send</Button>
                                </Box>
                            </Grid>
                        </Grid>
                </form>
            </Grid>
        </Grid>
    )
};

export default ContactForm;