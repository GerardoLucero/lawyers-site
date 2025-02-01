import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, Typography, Button } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import heroBg from './assets/hero-bg.jpg';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col min-h-screen" style={{ backgroundColor: theme.palette.background.default, fontFamily: theme.typography.fontFamily }}>
                <Header />
                <main className="flex-grow" style={{ fontFamily: theme.typography.fontFamily }}>
                    {/* HERO SECTION */}
                    <Box 
                        sx={{
                            position: 'relative',
                            backgroundImage: `url(${heroBg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '80vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}
                    >
                        {/* Capa oscura para mejorar legibilidad */}
                        <Box 
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta la opacidad según necesites
                                zIndex: 1
                            }}
                        />

                        {/* Contenido sobre la imagen */}
                        <Container sx={{ position: 'relative', zIndex: 2 }}>
                            <Typography 
                                variant="h3" 
                                fontWeight="bold" 
                                sx={{ 
                                    color: 'white', 
                                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                                    fontFamily: theme.typography.fontFamily
                                }}
                            >
                                Defensa Legal con Compromiso y Experiencia
                            </Typography>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    mt: 2, 
                                    color: 'white', 
                                    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)',
                                    fontFamily: theme.typography.fontFamily
                                }}
                            >
                                Protegiendo sus derechos con excelencia y determinación.
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                href="#contact"
                                sx={{ mt: 4, backgroundColor: theme.palette.primary.main, fontSize: '18px', fontFamily: theme.typography.fontFamily }}
                            >
                                Contáctenos
                            </Button>
                        </Container>
                    </Box>

                    {/* SECCIÓN SERVICIOS */}
                    <section id="services" style={{ backgroundColor: theme.palette.background.paper, padding: '30px 0', fontFamily: theme.typography.fontFamily }}> 
                        <Services />
                    </section>

                    {/* SECCIÓN NOSOTROS */}
                    <section id="about" style={{ backgroundColor: theme.palette.background.default, padding: '30px 0', fontFamily: theme.typography.fontFamily }}>
                        <About />
                    </section>

                    {/* SECCIÓN CONTACTO */}
                    <section id="contact" style={{ backgroundColor: theme.palette.background.paper, padding: '30px 0', fontFamily: theme.typography.fontFamily }}>
                        <Contact />
                    </section>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
