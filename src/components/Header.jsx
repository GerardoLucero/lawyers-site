import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import theme from '../theme';

function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, boxShadow: 'none' }}>
            <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography 
                        variant="h6" 
                        sx={{ fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase', color: 'white' }}
                    >
                        Olmedo Gonzalez
                    </Typography>
                    <Box>
                        <Button color="inherit" component={Link} to="/">Inicio</Button>
                        <Button color="inherit" component={Link} to="/services">Servicios</Button>
                        <Button color="inherit" component={Link} to="/about">Nosotros</Button>
                        <Button color="inherit" component={Link} to="/contact">Contacto</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
