import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    siteTitle: "Bufete de Abogados",
    homeContent: "Bienvenidos a nuestro despacho legal. Ofrecemos soluciones jurídicas a la medida.",
    services: [
        { title: "Derecho Penal", description: "Defensa legal en casos penales." },
        { title: "Derecho Laboral", description: "Asesoría en litigios laborales." },
        { title: "Derecho Civil", description: "Soluciones en materia civil y familiar." }
    ],
    contactInfo: {
        phone: "+52 55 1234 5678",
        email: "contacto@bufete.com",
        address: "Av. Reforma 123, CDMX, México"
    }
};

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
});

export default contentSlice.reducer;
