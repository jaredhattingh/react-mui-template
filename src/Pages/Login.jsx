import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Box, Typography, Button } from '@mui/material';

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant='h1' gutterBottom>
          Anodamine Web App
        </Typography>
        <Button
          disableElevation
          variant='contained'
          onClick={() => loginWithRedirect()}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
