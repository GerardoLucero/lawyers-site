import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#1C3D5A', boxShadow: 'none' }}>
            <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* LOGO */}
                    <Box display="flex" alignItems="center">
                        <Typography 
                            variant="h6" 
                            sx={{ fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }}
                        >
                            Olmedo Gonzalez 
                        </Typography>
                    </Box>

                    {/* MENÚ */}

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
