import React, { useState } from "react";
import { Container, Typography, Box, Grid, Card, CardContent, IconButton } from "@mui/material";
import { Gavel, Balance, Article, CorporateFare, Business, Policy, EditNote, Groups, AccountBalance, Work, Assignment, PersonSearch } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import theme from "../theme";

const iconsMap = {
    "Asesoramiento Legal": <Gavel fontSize="large" sx={{ color: theme.palette.primary.main, mr: 1 }} />,
    "Defensa en Juicios Penales": <Balance fontSize="large" sx={{ color: theme.palette.primary.main, mr: 1 }} />,
    "Recursos y Apelaciones": <Article fontSize="large" sx={{ color: theme.palette.primary.main, mr: 1 }} />,
    "Negociación de Acuerdos y Conformidades": <CorporateFare fontSize="large" sx={{ color: theme.palette.primary.main, mr: 1 }} />,
    "Libertad Condicional y Beneficios Penitenciarios": <Business fontSize="large" sx={{ color: theme.palette.primary.main, mr: 1 }} />,
    "Investigación y Recopilación de Pruebas": <PersonSearch fontSize="large" sx={{ color: theme.palette.primary.main, mr: 1 }} />,
    "Asistencia en Declaraciones y Detenciones": <Policy fontSize="large" sx={{ color: theme.palette.primary.main, mr: 1 }} />,
    "Asesoría Legal para Empresas": <Groups fontSize="large" sx={{ color: theme.palette.primary.main, mr: 1 }} />,
    "Constitución de Sociedades": <AccountBalance fontSize="large" sx={{ color: theme.palette.primary.main, mr: 1 }} />,
    "Redacción de Estatutos y Contratos": <Work fontSize="large" sx={{ color: theme.palette.primary.main, mr: 1 }} />,
    "Redacción de Poderes": <EditNote fontSize="large" sx={{ color: theme.palette.primary.main, mr: 1 }} />,
};

const services = [
    { title: "Asesoramiento Legal", description: "Orientación y consejo legal sobre derechos y obligaciones en casos penales, explicando posibles consecuencias legales." },
    { title: "Defensa en Juicios Penales", description: "Representación y defensa en procesos judiciales, presentación de pruebas e interrogación de testigos." },
    { title: "Recursos y Apelaciones", description: "Presentación de recursos ante tribunales superiores para intentar revertir o modificar decisiones judiciales." },
    { title: "Negociación de Acuerdos y Conformidades", description: "Negociación con la fiscalía o partes contrarias para llegar a acuerdos favorables." },
    { title: "Libertad Condicional y Beneficios Penitenciarios", description: "Gestión de solicitudes de libertad condicional y otros beneficios penitenciarios." },
    { title: "Investigación y Recopilación de Pruebas", description: "Análisis y recopilación de pruebas para fortalecer la defensa del cliente." },
    { title: "Asistencia en Declaraciones y Detenciones", description: "Acompañamiento en declaraciones ante autoridades para garantizar el respeto de los derechos del cliente." },
    { title: "Asesoría Legal para Empresas", description: "Asesoría legal a pequeñas empresas y emprendimientos en temas contractuales y regulatorios." },
    { title: "Constitución de Sociedades", description: "Asesoría en la creación y estructuración de sociedades mercantiles y civiles." },
    { title: "Redacción de Estatutos y Contratos", description: "Redacción y revisión de estatutos de sociedades y contratos civiles, mercantiles y laborales." },
    { title: "Redacción de Poderes", description: "Elaboración de poderes para representantes legales en diversas áreas del derecho corporativo." }
];

function Services() {
    const [expanded, setExpanded] = useState(false);
    const visibleServices = expanded ? services : services.slice(0, 3); // Mostrar más si está expandido

    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h3" fontWeight="bold" sx={{ textAlign: "center", color: theme.palette.primary.main, textTransform: "uppercase", letterSpacing: 1.5, mb: 4 }}>
                Áreas de Práctica
            </Typography>
            <Typography sx={{ textAlign: "center", color: theme.palette.text.secondary, mb: 4, fontSize: "1.2rem" }}>
                Los servicios que brindamos están orientados por una visión multidisciplinaria, ofreciendo soluciones legales integrales.
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
                {visibleServices.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ backgroundColor: theme.palette.background.paper, boxShadow: 3, borderRadius: 2, p: 2, height: "100%" }}>
                            <CardContent>
                                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                    {iconsMap[service.title]}
                                    <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
                                        {service.title}
                                    </Typography>
                                </Box>
                                <Typography sx={{ color: theme.palette.text.secondary, fontSize: "1rem" }}>
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <IconButton color="primary" onClick={() => setExpanded(!expanded)}>
                    {expanded ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
                </IconButton>
            </Box>
        </Container>
    );
}

export default Services;
