import React from 'react';
import { Box, Typography, Container, Grid, Link, Divider, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, WhatsApp } from '@mui/icons-material';
import theme from '../theme';

function Footer() {
    return (
        <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 4, mt: 4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {/* Columna 1: Información */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Bufete de Abogados</Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Defendiendo sus derechos con compromiso y excelencia.
                        </Typography>
                    </Grid>

                    {/* Columna 2: Enlaces rápidos */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Enlaces</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
                            <Link href="#home" color="inherit" underline="hover">Inicio</Link>
                            <Link href="#services" color="inherit" underline="hover">Servicios</Link>
                            <Link href="#about" color="inherit" underline="hover">Nosotros</Link>
                            <Link href="#contact" color="inherit" underline="hover">Contacto</Link>
                        </Box>
                    </Grid>

                    {/* Columna 3: Contacto */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Contacto</Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>📍 Calle Falsa 123, CDMX</Typography>
                        <Typography variant="body2">📞 +52 55 1234 5678</Typography>
                        <Typography variant="body2">📧 contacto@bufete.com</Typography>
                    </Grid>
                </Grid>

                {/* Línea divisoria */}
                <Divider sx={{ my: 3, backgroundColor: 'white', opacity: 0.2 }} />

                {/* Redes Sociales */}
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Síguenos en</Typography>
                    <IconButton href="https://wa.me/525512345678" target="_blank" sx={{ color: 'white' }}>
                        <WhatsApp fontSize="large" />
                    </IconButton>
                    <IconButton href="https://www.facebook.com/tuempresa" target="_blank" sx={{ color: 'white' }}>
                        <Facebook fontSize="large" />
                    </IconButton>
                    <IconButton href="https://twitter.com/tuempresa" target="_blank" sx={{ color: 'white' }}>
                        <Twitter fontSize="large" />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/company/tuempresa" target="_blank" sx={{ color: 'white' }}>
                        <LinkedIn fontSize="large" />
                    </IconButton>
                </Box>

                {/* Derechos reservados */}
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} Bufete de Abogados. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
