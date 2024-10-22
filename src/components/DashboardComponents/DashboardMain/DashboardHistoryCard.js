import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
  IconButton,
  Button,
  ButtonGroup,
  Box
} from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Calendar icon

function DashboardHistoryCard() {

  const [selected, setSelected] = useState('Today'); // Track the selected button

  const logs = [
    {
      id: 1,
      date: "2024-03-18",
      startTime: "12:00 PM",
      stopTime: "12:00 PM",
      duration: "4 hr: 34 min"
    },
    {
      id: 2,
      date: "2024-03-18",
      startTime: "12:00 PM",
      stopTime: "12:00 PM",
      duration: "4 hr: 34 min"
    },
   
  ];

  return (
    <Card sx={{ padding: '16px', borderRadius: '12px', boxShadow: 3  , mt: 0}}>
      <CardHeader 
        title={<Typography variant="h5">History</Typography>}
        action={
          // <Tabs>
          //   <Tab label="Today" />
          //   <Tab label="Last Week" />
          //   <Tab label="Last Month" />
          // </Tabs>
          <Box display="flex" justifyContent="flex-end">
          <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ border: '1px  #ff9800' }}>
            <Button
              onClick={() => setSelected('Today')}
              sx={{
                // backgroundColor: selected === 'Today' ? '#ff9800' : 'transparent',
                color: selected === 'Today' ? '#ff9800' : 'inherit',
                borderColor: '#ff9800', // Orange border color
                '&:hover': {
                  backgroundColor: selected === 'Today' ? '#transparent' : 'rgba(255, 152, 0, 0.1)', // Change on hover
                },
              }}
            >
              Today
            </Button>
    
            <Button
              onClick={() => setSelected('Last Week')}
              sx={{
                // backgroundColor: selected === 'Last Week' ? '#ff9800' : 'transparent',
                color: selected === 'Last Week' ? '#ff9800' : 'inherit',
                borderColor: '#ff9800', // Orange border color
                '&:hover': {
                  backgroundColor: selected === 'Last Week' ? '#transparent' : 'rgba(255, 152, 0, 0.1)', // Change on hover
                },
              }}
            >
              Last Week
            </Button>
    
            <Button
              onClick={() => setSelected('Last Month')}
              sx={{
                // backgroundColor: selected === 'Last Month' ? '#ff9800' : 'transparent',
                color: selected === 'Last Month' ? '#ff9800' : 'inherit',
                borderColor: '#ff9800', // Orange border color
                '&:hover': {
                  backgroundColor: selected === 'Last Month' ? '#transparent' : 'rgba(255, 152, 0, 0.1)', // Change on hover
                },
              }}
            >
              Last Month
            </Button>
          </ButtonGroup>
        </Box>
        }
        sx={{ paddingBottom: 2 }}
      />
      <Divider sx={{ marginBottom: '16px' }} />

      <Grid container spacing={2}>
        {logs.map((log) => (
          <Grid item xs={12} md={6} key={log.id}>
            <Card sx={{ padding: '16px', borderRadius: '8px', boxShadow: 2 }}>
              <Typography variant="h6">Engine Logs</Typography>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                <Typography variant="body2" color="textSecondary">
                  <CalendarTodayIcon fontSize="small" /> {log.date}
                </Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                <Typography variant="body2" color="textSecondary">Start: {log.startTime}</Typography>
                <Typography variant="body2" color="textSecondary">Stop: {log.stopTime}</Typography>
                <Typography variant="body2" color="textSecondary">Duration: {log.duration}</Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}

export default DashboardHistoryCard;
