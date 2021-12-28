import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

function Loading() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        variant='body2'
        align='center'
        mt={2}
        gutterBottom
        sx={{ fontSize: '1.2rem', fontWeight: 300 }}
      >
        Loading...
      </Typography>
      <LinearProgress />
    </Box>
  );
}

export default Loading;
