import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRecoilState } from 'recoil';
import { useDarkTheme } from '../Recoil/ThemeAtom';
import { Button, Typography, Box, Stack } from '@mui/material';
import Loading from '../Components/Loading';

function Home() {
  const { user, logout } = useAuth0();
  const [darkTheme, setDarkTheme] = useRecoilState(useDarkTheme);

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant='h1' gutterBottom>
          Home
        </Typography>
        <Typography align='center' variant='body2'>
          {JSON.stringify(user)}
        </Typography>
        <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
          <Button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </Button>
          <Button color='secondary' onClick={() => setDarkTheme(!darkTheme)}>
            Toggle Dark Mode
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Home;
