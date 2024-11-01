import {
    Box,
    Button,
    Checkbox,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoginImg from "../../../assets/Login.png";

import Ukeylogo from "../../../assets/UkeyLogo.png";
import GoogleLogo from "../../../assets/Google.svg";
import { useNavigate } from "react-router-dom";
import { RegistrationStyles } from "../../UI/Styles";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


function Signup() {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [slideLeft, setSlideLeft] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const loginNavigation = () => {
        setSlideLeft(true); // Start the slide animation

        // Introduce a delay of 500ms (0.5 seconds) before navigating to the next route
        setTimeout(() => {
            navigate("/login"); // Perform the navigation after the animation completes
        }, 500); // Delay matches the CSS animation duration
    };

    return (
        <Box sx={{
            backgroundImage: `url(${LoginImg})`,
            backgroundSize: "cover", // Ensures the image covers the whole area
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents tiling the image
            display: "flex",
            justifyContent: "flex-end",
            height: "100%",
            minHeight: "100vh", // Ensures the box takes full viewport height
            width: "100vw"
        }} >
            <Box
                className={`sliding-box ${slideLeft ? 'slide-left' : ''}`}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{ width: { lg: "45%", md: "50%", sm: "100%", xs: "100%" }, opacity: "95%", background: "#FFF", height: "100vh" }}

            >

<Box 
    sx={{ 
        paddingBottom: { xl: "0rem", lg: "0rem", md: "0rem", sm: "1rem", xs: "0.5rem" }, 
        paddingTop: { xl: "0rem", lg: "0rem", md: "5rem", sm: "1rem", xs: "0.5rem" }
    }}
>
    <img 
        src={Ukeylogo} 
        alt="Ukey Logo" // Provide a meaningful alt text
        style={{ 
            height: {xl:"100%" , lg:"100%" , md:"60%" , sm:"60%" , xs:"60%"}, // Maintain aspect ratio
            width: "100%",   // Make image responsive
        }} 
        // Use the sx prop for responsive styling instead of inline styles
        sx={{ 
            maxHeight: { xl: "143px", lg: "65px", md: "20px", sm: "55px", xs: "50px" }, // Set max height based on screen size
            maxWidth: { xl: "200px", lg: "80px", md: "20px", sm: "115px", xs: "105px" } // Set max width based on screen size
        }}
    />
</Box>




                <Typography
                    variant="h1"
                    mt={{ xl: "0em", lg: "-1em", md: "0em", sm: "1em", xs: "0.8em" }} // Responsive margin-top
                       sx={{ fontWeight: 600, 
                        fontSize: { xl: "1.675rem", lg: "1.2rem", md: "0.7rem", sm: "1.25rem", xs: "1.6rem" }, // Responsive font size
                        
                        fontFamily: "Inter", color: "#14181F", }}
                >
                    Register
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} gap={"3px"} >
                    <Typography
                        sx={{
                            fontFamily: "Inter",
                            color: "#14181F",
                            textAlign: "center",
                            fontSize: { xl: "1rem", lg: "0.8rem", md: "0.7rem", sm: "1rem", xs: "1rem" },
                        }}
                    >
                        Already have an account?
                    </Typography>
                    <Typography
                        color={"#F38712"}
                        sx={{
                            fontSize: { xl: "1rem", lg: "0.8rem", md: "0.7rem", sm: "1rem", xs: "1rem" },
                        }}
                        style={{
                            fontWeight: 600,
                            fontFamily: "Inter",
                            cursor: "pointer",
                            textAlign: "center",
                           
                        }}
                        onClick={loginNavigation}
                    >
                        Login here
                    </Typography>
                </Stack>

                <Box sx={{ width: { xs: "80%", sm: "60%" }, maxWidth: "370px",  }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 500,
                            fontSize: "0.8rem",
                            fontFamily: "Inter",
                            color: "#14181F",
                        }}
                    >
                        Full Name
                    </Typography>
                    <TextField
                        sx={RegistrationStyles.textField}
                        fullWidth
                        size="small"
                        placeholder="Enter your full name"
                    />
                </Box>
                <Box sx={{ width: { xs: "80%", sm: "60%" }, maxWidth: "370px" }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 500, fontSize: "0.8rem",
                            fontFamily: "Inter",
                            color: "#14181F",
                        }}
                    >
                        E-mail
                    </Typography>
                    <TextField sx={RegistrationStyles.textField} fullWidth size="small" placeholder="Enter your email" />
                </Box>
                <Box sx={{ width: { xs: "80%", sm: "60%" }, maxWidth: "370px" }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 500, fontSize: "0.8rem",
                            fontFamily: "Inter",
                            color: "#14181F",
                        }}
                    >
                        Phone Number
                    </Typography>
                    <TextField sx={RegistrationStyles.textField} fullWidth size="small" placeholder="Enter your Phone number" />
                </Box>
                <Box sx={{ width: { xs: "80%", sm: "60%" }, maxWidth: "370px", position: "relative" }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 500, fontSize: "0.8rem",
                            fontFamily: "Inter",
                            color: "#14181F",
                        }}
                    >
                        Password
                    </Typography>


                    <TextField sx={RegistrationStyles.textField} fullWidth size="small" placeholder="Enter your password" type={passwordVisible ? 'text' : 'password'} />
                    <Box
                        sx={RegistrationStyles.passwordEyeBox}
                        onClick={togglePasswordVisibility}
                    >
                        {passwordVisible ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                    </Box>
                </Box>
                <Box sx={{ width: { xs: "80%", sm: "60%" }, maxWidth: "370px", position: "relative" }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 500, fontSize: "0.8rem",
                            fontFamily: "Inter",
                            color: "#14181F",
                        }}
                    >
                        Confirm Password
                    </Typography>

                    <TextField sx={RegistrationStyles.textField} fullWidth size="small" placeholder="Confirm your password" type={confirmPasswordVisible ? 'text' : 'password'} />
                    <Box
                        sx={RegistrationStyles.passwordEyeBox}
                        onClick={toggleConfirmPasswordVisibility}
                    >
                        {confirmPasswordVisible ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                    </Box>
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        width: { xs: "80%", sm: "60%" },
                        maxWidth: "370px",
                        height: "3.1rem",
                        backgroundColor: "#212122;",
                        color: "white",
                        // marginTop: "1.8em",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: "#212122",
                        },
                    }}
                    onClick={() => navigate("/dashboard/dashboardmain")}
                >
                    Register
                </Button>
                <Typography
                    variant="body1"
                   
                    
                    color={"#6F7C8E"}
                    sx={{
                        fontWeight: 500,
                        fontSize: "1rem",
                        fontFamily: "Poppins",
                        cursor: "pointer",
                        marginTop: { md: "0.3rem", sm: "1rem", xs: "0.5rem" }
                    }}
                >
                    or continue with
                </Typography>
                <Stack  >
                    <img src={GoogleLogo} />
                </Stack>

                  
            </Box>
        </Box>
    );
}

export default Signup;
