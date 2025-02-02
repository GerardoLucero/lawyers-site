import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, Typography, Button, CssBaseline, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Header from './components/Header';
import Footer from './components/Footer';
import MissionVision from './pages/MissionVision';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import heroBg from './assets/hero-bg.jpg';
import theme from './theme';




const sections = [
    { id: 'services', component: <Services />, bg: theme.palette.background.paper },
    { id: 'mission-vision', component: <MissionVision />, bg: theme.palette.background.default },
    { id: 'about', component: <About />, bg: theme.palette.background.paper },
    { id: 'contact', component: <Contact />, bg: theme.palette.background.default }
];

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> 
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
                <Header />
                <Box component="main" sx={{ flexGrow: 1 }}>
                    {/* Hero Section */}
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
                            textAlign: 'center',
                            color: 'white',
                            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)'
                        }}
                    >
                        <Box 
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 1
                            }}
                        />

                        <Container sx={{ position: 'relative', zIndex: 2 }}>
                            <Typography variant="h3" fontWeight="bold">
                                Defensa Legal con Compromiso y Experiencia
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                Protegiendo sus derechos con excelencia y determinación.
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                href="#contact"
                                sx={{ mt: 4, fontSize: '18px' }}
                            >
                                Contáctenos
                            </Button>
                        </Container>
                    </Box>

                    {/* Sections */}
                    {sections.map(({ id, component, bg }) => (
                        <Box key={id} id={id} sx={{ backgroundColor: bg, py: 6 }}>
                            {component}
                        </Box>
                    ))}
                </Box>

                <Footer />

                {/* WhatsApp Floating Button */}
                <IconButton 
                    href="https://wa.me/525512345678" 
                    target="_blank" 
                    sx={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        backgroundColor: '#25D366',
                        color: 'white',
                        '&:hover': { backgroundColor: '#1EBE54' }
                    }}
                >
                    <WhatsAppIcon fontSize="large" />
                </IconButton>
            </Box>
        </ThemeProvider>
    );
}

export default App;