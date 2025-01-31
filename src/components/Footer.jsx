import React from 'react';
import { Typography, Container } from '@mui/material';

function Footer() {
    return (
        <Container sx={{ mt: 4, py: 2, textAlign: 'center' }}>
            <Typography variant="body2">© 2024 Bufete de Abogados. Todos los derechos reservados.</Typography>
        </Container>
    );
}

export default Footer;
