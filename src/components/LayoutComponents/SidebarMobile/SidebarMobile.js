import { Box, Button, Divider, Stack, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import Ukeylogo from "../../../assets/Layout/Ukeylogo-removebg-preview.png";
import DashboardLogo from "../../../assets/Layout/post.png";
import MaintenanceLogo from "../../../assets/Layout/pajamas_issue-type-maintenance.png";
import FuelLogo from "../../../assets/Layout/lucide_fuel.png";
import SettingLogo from "../../../assets/Layout/settings.png";
import LogoutLogo from "../../../assets/Layout/Left_icon.png";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar2({ onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  const listItems = [
    { text: "Dashboard", icon: DashboardLogo, route: "dashboardmain" },
    { text: "Maintenance Scheduling", icon: MaintenanceLogo, route: "maintenance-scheduling" },
    { text: "Fuel Management", icon: FuelLogo, route: "fuel-management" },
    { text: "Setting", icon: SettingLogo, route: "setting" },
  ];

  // Synchronize the selected item with the current route
  useEffect(() => {
    const currentItemIndex = listItems.findIndex(item => item.route === location.pathname.split('/').pop());
    if (currentItemIndex !== -1) {
      setSelectedItem(currentItemIndex);
    } else {
      setSelectedItem(null); // Reset if not found
    }
  }, [location.pathname]); // Run when location changes

  const handleListItemClick = (index, route) => {
    setSelectedItem(index); // Update the selected item
    navigate(route);
    onClose(); // Close the sidebar when an item is clicked
  };

  return (
    <Box
      sx={{
        width: { xs: '70vw', sm: '40vw', md: '40vw' },
        height: { xs: '97%', sm: '97%', md: '97%' },
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: "#15294E",
        display: "flex",
        flexDirection: "column",
        padding: 'clamp(0.5rem, 1vw, 1rem)',
        boxShadow: "2px 0 5px rgba(0,0,0,0.5)",
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" justifyContent="center" mb={0}>
          <img src={Ukeylogo} alt="logo" style={{ width: '100%', maxWidth: '120px', marginBottom: "2px" }} />
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ backgroundColor: "#F38712" }} />

      <List sx={{ flexGrow: 1 }}>
        {listItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleListItemClick(index, item.route)}
            sx={{
              backgroundColor: selectedItem === index ? "#F38712" : "transparent",
              "&:hover": { backgroundColor: "#F38712" },
              fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
              padding: 'clamp(0.4rem, 0.8vw, 0.8rem)',
            }}
          >
            <ListItemIcon>
              <img src={item.icon} alt={item.text} style={{ width: 'clamp(14px, 3vw, 22px)', height: 'clamp(14px, 3vw, 22px)' }} />
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: 'white' }} />
          </ListItem>
        ))}
      </List>

      <Stack spacing={1} mt={2}>
        <Divider sx={{ backgroundColor: "#F38712" }} />
        <Button
          variant="contained"
          fullWidth
          startIcon={<img src={LogoutLogo} alt="logout" style={{ width: 'clamp(10px, 1.5vw, 14px)', height: 'clamp(10px, 1.5vw, 14px)' }} />}
          onClick={() => navigate("/login")}
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": { backgroundColor: "lightgray" },
            fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
            padding: 'clamp(0.4rem, 0.8vw, 0.8rem)',
          }}
        >
          Logout
        </Button>
      </Stack>
    </Box>
  );
}

export default Sidebar2;
