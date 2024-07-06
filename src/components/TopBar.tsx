import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Grid } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

interface TopBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography style={{ textAlign: 'start' }} variant="h6">Income Tax Calculator</Typography>
            <Typography style={{ fontSize: '10px', }} >Updated: July 2024</Typography>
          </Grid>
          <Grid item xs={4} container justifyContent="flex-end">
            <IconButton edge="end" color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
