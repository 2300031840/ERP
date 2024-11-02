import { Button, FormControl, Paper, Stack, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ handleAuthToggle, handleRoleChange }) {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(1); 

  const handleLogin = () => {
    handleRoleChange(selectedRole);
    handleAuthToggle();

    
    if (selectedRole === 1) { 
      navigate('/home'); 
    } else if (selectedRole === 2) { 
      navigate('/faculty/home'); 
    }
  };

  return (
    <div
    style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${process.env.PUBLIC_URL}/logokl.jpeg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingBottom: '10px',
    }}
  
  
    >
      <div style={{ marginBottom: '20px' }}>
      <img 
  src={`${process.env.PUBLIC_URL}/kl-removebg-preview.png`} 
  alt="College Logo" 
  style={{ width: '150px', height: '150px', objectFit: 'contain' }} 
/>


      </div>

      <FormControl style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper elevation={12} style={{ alignContent: 'center', width: '400px', padding: '20px', backgroundColor: 'white' }}>
          <Stack spacing={3}>
            <FormControl variant="filled">
              <InputLabel>Select Role</InputLabel>
              <Select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)} // Update selected role state
              >
                <MenuItem value={1}><center>Student</center></MenuItem>
                <MenuItem value={2}><center>Faculty</center></MenuItem>
              </Select>
            </FormControl>
            <TextField variant="filled" label="ID" />
            <TextField variant="filled" label="Password" type="password" />
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
            <div style={{ marginTop: '2px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%', color: 'darkblue' }}>
              <p style={{ margin: '2', fontSize: 'small' }}>Forgot Password?</p>
            </div>
          </Stack>
        </Paper>
      </FormControl>
    </div>
  );
}

export default LoginPage;
