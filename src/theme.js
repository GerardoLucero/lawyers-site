import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2C3E50', // Azul oscuro
        },
        secondary: {
            main: '#F5F5DC', // Beige claro
        },
        background: {
            default: '#F5F5DC', // Fondo general beige
            paper: '#FFFFFF', // Fondo blanco para secciones
        },
        text: {
            primary: '#000000', // Texto principal negro
            secondary: '#2C3E50', // Texto secundario azul oscuro
        }
    }
});

export default responsiveFontSizes(theme);
