import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import theme from '../theme';
import partner1 from '../assets/partner1.jpg';
import partner2 from '../assets/partner2.jpg';
import partner3 from '../assets/partner3.jpg';

function About() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom sx={{ color: theme.palette.text.primary }}>
                Sobre Nosotros
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>
                Somos un bufete con más de 20 años de experiencia en distintas áreas del derecho.
            </Typography>

            <Grid container spacing={4} sx={{ marginTop: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                        <CardMedia
                            component="img"
                            height="350"
                            image={partner1}
                            alt="Abogado 1"
                        />
                        <CardContent>
                            <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>Lic. Juan Pérez</Typography>
                            <Typography sx={{ color: theme.palette.text.secondary }}>
                                Especialista en derecho penal y civil.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                        <CardMedia
                            component="img"
                            height="350"
                            image={partner2}
                            alt="Abogada 2"
                        />
                        <CardContent>
                            <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>Lic. María López</Typography>
                            <Typography sx={{ color: theme.palette.text.secondary }}>
                                Experta en derecho corporativo y laboral.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                        <CardMedia
                            component="img"
                            height="350"
                            image={partner3}
                            alt="Abogado 3"
                        />
                        <CardContent>
                            <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>Lic. Roberto García</Typography>
                            <Typography sx={{ color: theme.palette.text.secondary }}>
                                Especialista en propiedad intelectual.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default About;
