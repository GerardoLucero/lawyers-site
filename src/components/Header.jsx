import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>Bufete de Abogados</Typography>
                <Button color="inherit" component={Link} to="/">Inicio</Button>
                <Button color="inherit" component={Link} to="/services">Servicios</Button>
                <Button color="inherit" component={Link} to="/about">Nosotros</Button>
                <Button color="inherit" component={Link} to="/contact">Contacto</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
