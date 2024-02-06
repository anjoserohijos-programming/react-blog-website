import React from 'react';
import { Button, Container, CssBaseline, Grid, Paper, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const LoginPage = () => {
  const handleGoogleLogin = () => {
    // Handle Google login here (future backend implementation)
    console.log('Logging in with Google');
  };

  const handleSignUp = () => {
    // Handle Sign Up logic here
    console.log('Signing up');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5">Login</Typography>
          <form>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button fullWidth variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </form>
          <Grid container justifyContent="space-between" sx={{ marginTop: 2 }}>
            
            <Grid item>
              <Button onClick={handleSignUp} color="secondary">
                Sign Up
              </Button>
            </Grid>
            <Grid item>
                <Button variant="contained">Login With Google</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
