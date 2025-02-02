import React, { useState } from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Modal, Box } from "@mui/material";
import theme from "../theme";
import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";
import partner3 from "../assets/partner3.jpg";

const teamMembers = [
    {
        name: "Lic. Juan Pérez",
        role: "Especialista en derecho penal y civil.",
        image: partner1,
        experience: "Posee más de 20 años de experiencia representando clientes en procesos judiciales penales y civiles. Ha trabajado en casos de alto perfil y colabora con diversas organizaciones jurídicas.",
        education: "Licenciatura en Derecho por la UNAM, Maestría en Derecho Penal.",
        associations: "Miembro del Colegio de Abogados de México, Asociación Nacional de Juristas.",
        email: "juan.perez@firma.com",
        phone: "(52) 55 1234 5678"
    },
    {
        name: "Lic. María López",
        role: "Experta en derecho corporativo y laboral.",
        image: partner2,
        experience: "Ha asesorado a múltiples empresas en su constitución, redacción de contratos y manejo de conflictos laborales. Es reconocida por su precisión en temas corporativos.",
        education: "Licenciatura en Derecho por la Universidad Panamericana, Especialización en Derecho Corporativo.",
        associations: "Miembro de la Barra Mexicana de Abogados, Asociación de Derecho Empresarial.",
        email: "maria.lopez@firma.com",
        phone: "(52) 55 8765 4321"
    },
    {
        name: "Lic. Roberto García",
        role: "Especialista en propiedad intelectual.",
        image: partner3,
        experience: "Cuenta con amplia experiencia en la protección de derechos de autor, marcas y patentes. Ha asesorado a empresas nacionales e internacionales en litigios de propiedad intelectual.",
        education: "Licenciatura en Derecho por el ITAM, Diplomado en Propiedad Intelectual.",
        associations: "Miembro del Instituto Mexicano de la Propiedad Intelectual.",
        email: "roberto.garcia@firma.com",
        phone: "(52) 55 1122 3344"
    }
];

function About() {
    const [open, setOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleOpen = (member) => {
        setSelectedMember(member);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedMember(null);
    };

    return (
        <Container sx={{ py: 6 }}>
            <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ textAlign: "center", color: theme.palette.primary.main, textTransform: "uppercase", letterSpacing: 2, mb: 4 }}
            >
                Sobre Nosotros
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, textAlign: "center", mb: 6, fontSize: "1.2rem", maxWidth: "800px", margin: "auto" }}>
                Somos un bufete con más de 20 años de experiencia en distintas áreas del derecho, brindando soluciones legales con profesionalismo y ética.
            </Typography>

            <Grid container spacing={4} sx={{ justifyContent: "center" }}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ backgroundColor: theme.palette.background.paper, boxShadow: 2, borderRadius: 1, transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
                            <CardMedia component="img" height="350" image={member.image} alt={member.name} sx={{ filter: "grayscale(30%)", transition: "0.3s", "&:hover": { filter: "none" } }} />
                            <CardContent sx={{ textAlign: "center", p: 3 }}>
                                <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}>{member.name}</Typography>
                                <Typography sx={{ color: theme.palette.text.secondary, fontSize: "1rem", mt: 1 }}>{member.role}</Typography>
                                <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => handleOpen(member)}>
                                    Ver Trayectoria
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Modal para mostrar detalles del miembro del equipo */}
            <Modal open={open} onClose={handleClose} aria-labelledby="team-member-detail" aria-describedby="team-member-description">
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 600,
                    bgcolor: theme.palette.background.paper,
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    textAlign: 'center'
                }}>
                    {selectedMember && (
                        <>
                            <img src={selectedMember.image} alt={selectedMember.name} style={{ width: 150, height: 150, borderRadius: '50%', marginBottom: 16 }} />
                            <Typography id="team-member-detail" variant="h4" fontWeight="bold" sx={{ color: theme.palette.primary.main }}>
                                {selectedMember.name}
                            </Typography>
                            <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                                {selectedMember.role}
                            </Typography>
                            <Typography sx={{ color: theme.palette.text.primary, fontSize: '1rem', mb: 2 }}>
                                {selectedMember.experience}
                            </Typography>
                            <Typography sx={{ color: theme.palette.text.secondary, fontSize: '1rem', mb: 2 }}>
                                <strong>Educación:</strong> {selectedMember.education}
                            </Typography>
                            <Typography sx={{ color: theme.palette.text.secondary, fontSize: '1rem', mb: 2 }}>
                                <strong>Asociaciones:</strong> {selectedMember.associations}
                            </Typography>
                            <Typography sx={{ color: theme.palette.text.secondary, fontSize: '1rem' }}>
                                <strong>Email:</strong> {selectedMember.email}
                            </Typography>
                            <Typography sx={{ color: theme.palette.text.secondary, fontSize: '1rem', mb: 3 }}>
                                <strong>Teléfono:</strong> {selectedMember.phone}
                            </Typography>
                            <Button variant="contained" color="primary" onClick={handleClose}>
                                Cerrar
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </Container>
    );
}

export default About;
