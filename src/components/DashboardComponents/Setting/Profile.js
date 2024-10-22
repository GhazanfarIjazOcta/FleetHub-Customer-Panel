import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { loginLeftContentContainerItemWidth } from "../../UI/styles/Login";
import { settingStyles } from "../../UI/styles/Main";

function Profile() {
  return (
    <Paper sx={settingStyles.profilePaper}>
      <Box 
      
    

      sx={{
        ...settingStyles.profileContainer,
        paddingLeft: {
            xs: '20px', // Padding for extra-small devices
            lg: '40px', // Padding for large devices
        },
      }} 
      
      >
        <Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={4}
              mb={1}
              style={settingStyles.profileLabel}
            >
              Full Name
            </Typography>
            <TextField
              sx={settingStyles.profileTextField}
              label="Enter your full name"
            />
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={settingStyles.profileLabel}
            >
              E-mail
            </Typography>
            <TextField
              sx={settingStyles.profileTextField}
              label="Enter your email"
            />
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={settingStyles.profileLabel}
            >
              Phone Number
            </Typography>
            <TextField
              sx={settingStyles.profileTextField}
              label="Enter your Phone number"
            />
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={settingStyles.profileLabel}
            >
              Profile Picture
            </Typography>
            <TextField
  placeholder={`Click to add a picture`}
  variant="outlined"
  // No size prop here
  InputProps={{
    endAdornment: (
      <InputAdornment position="end" sx={{ marginRight: 0 }}>
        <IconButton sx={{ padding: 0 }}>
          <Box sx={settingStyles.addPhoto}>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 500,
                color: "#F38712",
                fontSize: "14px",
              }}
            >
              Add Photo
            </Typography>
          </Box>
        </IconButton>
      </InputAdornment>
    ),
  }}
  sx={{
    "& .MuiInputBase-root": {
      height: {
        xs: "56px", // Adjust height for mobile
        sm: "76px",  // Adjust height for larger screens
      },
    },
    width: {
      xs: "100%", // Full width on mobile
      sm: "35%",  // 35% width on larger screens
    },
    marginLeft: "5px",
  }}
/>

          </Box >

        </Box >

        <Stack sx={settingStyles.profileButtonContainer} mr={5} mt={{lg:0 , xs:2}}>
          <Button variant="outlined" sx={settingStyles.resetButtomn}>
            Reset Changes
          </Button>
          <Button variant="contained" sx={settingStyles.updateButton}>
            Update
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Profile;
