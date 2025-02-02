import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";

function MissionVision() {
    return (
        <Container sx={{ py: 5 }}>
            <Typography 
                variant="h3" 
                fontWeight="bold" 
                sx={{ textAlign: 'center', mb: 4, color: 'primary.main', textTransform: 'uppercase', letterSpacing: 2 }}
            >
                Nuestra Misión y Visión
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'center' }}>
                <Card sx={{ p: 4, maxWidth: 500, textAlign: 'center', boxShadow: 3, backgroundColor: 'background.paper' }}>
                    <CardContent>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: 'primary.main' }}>
                            Misión
                        </Typography>
                        <Typography sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                            Brindar asesoramiento legal de calidad, protegiendo los derechos de nuestros clientes con compromiso y ética, garantizando su seguridad jurídica.
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ p: 4, maxWidth: 500, textAlign: 'center', boxShadow: 3, backgroundColor: 'background.paper' }}>
                    <CardContent>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: 'primary.main' }}>
                            Visión
                        </Typography>
                        <Typography sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                            Ser la firma legal de referencia en la región, impulsando la equidad y la justicia con profesionalismo y excelencia.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default MissionVision;