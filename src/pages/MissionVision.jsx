import React from "react";
import { Container, Typography, Card } from "@mui/material";

function MissionVision() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
                Nuestra Misión y Visión
            </Typography>
            <Card sx={{ p: 4, mb: 4 }}>
                <Typography variant="h5" fontWeight="bold">Misión</Typography>
                <Typography>Nuestra misión es brindar asesoramiento legal de calidad, protegiendo los derechos de nuestros clientes con compromiso y ética.</Typography>
            </Card>
            <Card sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight="bold">Visión</Typography>
                <Typography>Ser la firma legal de referencia en la región, garantizando justicia y equidad en cada caso que representamos.</Typography>
            </Card>
        </Container>
    );
}

export default MissionVision;