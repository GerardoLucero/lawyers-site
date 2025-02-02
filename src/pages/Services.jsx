import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from '../theme';
import criminal from '../assets/criminal-law.jpg'; 
import laboral from '../assets/labor-law.jpg';
import corporate from '../assets/corporate-law.jpg';
import appeals from '../assets/appeals.jpg';
import negotiations from '../assets/negotiations.jpg';
import conditional from '../assets/conditional.jpg';

const services = [
    { title: "Asesoramiento Legal", description: "Orientación sobre derechos y obligaciones en casos penales.", image: criminal },
    { title: "Defensa Penal", description: "Representación y defensa en procesos judiciales.", image: laboral },
    { title: "Recursos y Apelaciones", description: "Presentación de recursos para modificar sentencias.", image: corporate },
    { title: "Negociaciones y Conformidades", description: "Acuerdos con la fiscalía para obtener beneficios penales.", image: negotiations },
    { title: "Libertad Condicional", description: "Gestión de beneficios penitenciarios y reducción de penas.", image: conditional },
    { title: "Investigación y Pruebas", description: "Análisis y recopilación de pruebas para fortalecer la defensa.", image: appeals }
];

function Services() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container>
            <Typography variant="h3" gutterBottom sx={{ color: theme.palette.text.primary, textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
                Nuestros Servicios
            </Typography>
            <Slider {...settings}>
                {services.map((service, index) => (
                    <Box key={index} sx={{ padding: 2, display: 'flex', justifyContent: 'center', width: "100%" }}>
                        <Card sx={{ backgroundColor: theme.palette.background.paper, borderRadius: '4px', overflow: 'hidden', boxShadow: 2, textAlign: 'center', width: 320 }}>
                            <Box sx={{ position: 'relative' }}>
                                <img src={service.image} alt={service.title} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: '4px 4px 0 0' }} />
                            </Box>
                            <CardContent>
                                <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'bold', mb: 1 }}>{service.title}</Typography>
                                <Typography sx={{ color: theme.palette.text.secondary, fontSize: '0.9rem' }}>{service.description}</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Container>
    );
}

export default Services;
