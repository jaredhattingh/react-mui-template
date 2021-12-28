import React from 'react';
import { Typography, Box } from '@mui/material';

function NotFound404() {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant='h1'>Page not found!</Typography>
    </Box>
  );
}

export default NotFound404;
