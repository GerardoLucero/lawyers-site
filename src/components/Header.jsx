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
                        <img 
                            src="/lawyers-site/logo.png" 
                            alt="Bufete de Abogados" 
                            style={{ height: 40, marginRight: 16 }} 
                        />
                        <Typography 
                            variant="h6" 
                            sx={{ fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }}
                        >
                            Bufete de Abogados
                        </Typography>
                    </Box>

                    {/* MENÚ */}
                    <Box>
                        <Button 
                            color="inherit" 
                            component={Link} 
                            to="/" 
                            sx={{ fontSize: '16px', textTransform: 'uppercase', fontWeight: 'bold', mx: 1 }}
                        >
                            Inicio
                        </Button>
                        <Button 
                            color="inherit" 
                            component={Link} 
                            to="/services" 
                            sx={{ fontSize: '16px', textTransform: 'uppercase', fontWeight: 'bold', mx: 1 }}
                        >
                            Servicios
                        </Button>
                        <Button 
                            color="inherit" 
                            component={Link} 
                            to="/about" 
                            sx={{ fontSize: '16px', textTransform: 'uppercase', fontWeight: 'bold', mx: 1 }}
                        >
                            Nosotros
                        </Button>
                        <Button 
                            color="inherit" 
                            component={Link} 
                            to="/contact" 
                            sx={{
                                fontSize: '16px',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                mx: 1,
                                border: '2px solid white',
                                padding: '6px 16px',
                                borderRadius: '8px'
                            }}
                        >
                            Contacto
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
