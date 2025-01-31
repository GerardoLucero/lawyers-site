import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

function About() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>Sobre Nosotros</Typography>
            <Typography>
                Somos un bufete con más de 20 años de experiencia en distintas áreas del derecho.
            </Typography>

            <Grid container spacing={4} sx={{ marginTop: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/src/assets/partner1.jpg"
                            alt="Abogado 1"
                        />
                        <CardContent>
                            <Typography variant="h6">Lic. Juan Pérez</Typography>
                            <Typography>Especialista en derecho penal y civil.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/src/assets/partner2.jpg"
                            alt="Abogada 2"
                        />
                        <CardContent>
                            <Typography variant="h6">Lic. María López</Typography>
                            <Typography>Experta en derecho corporativo y laboral.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/src/assets/partner3.jpg"
                            alt="Abogado 3"
                        />
                        <CardContent>
                            <Typography variant="h6">Lic. Roberto García</Typography>
                            <Typography>Especialista en propiedad intelectual.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default About;
