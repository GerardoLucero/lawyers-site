import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import office from '../assets/law-office.jpg'
import legal from '../assets/legal-team.jpg'

function Home() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>Bienvenido a Bufete Legal</Typography>
            <Typography variant="h6">
                Ofrecemos soluciones jurídicas personalizadas con experiencia en diversas áreas del derecho.
            </Typography>
            
            <Grid container spacing={4} sx={{ marginTop: 3 }}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="350"
                            image={office}
                            alt="Oficina de abogados"
                        />
                        <CardContent>
                            <Typography variant="h5">Compromiso y Confianza</Typography>
                            <Typography>
                                Nos dedicamos a proteger tus intereses con profesionalismo y ética.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="350"
                            image={legal}
                            alt="Equipo legal"
                        />
                        <CardContent>
                            <Typography variant="h5">Un equipo experto</Typography>
                            <Typography>
                                Contamos con especialistas en diversas ramas del derecho para brindarte la mejor asesoría.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;
