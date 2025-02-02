import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import theme from '../theme';

const sections = [
    { id: 'services', label: 'Servicios' },
    { id: 'mission-vision', label: 'Misión y Visión' },
    { id: 'about', label: 'Nosotros' },
    { id: 'contact', label: 'Contacto' }
];

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const yOffset = -64; // Ajuste para la altura del AppBar
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

function Header() {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main, boxShadow: 'none' }}>
            <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography 
                        variant="h6" 
                        sx={{ fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase', color: 'white', cursor: 'pointer' }}
                        onClick={() => scrollToSection('hero')}
                    >
                        Olmedo Gonzalez
                    </Typography>
                    <Box>
                        {sections.map(({ id, label }) => (
                            <Button key={id} color="inherit" onClick={() => scrollToSection(id)}>
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
