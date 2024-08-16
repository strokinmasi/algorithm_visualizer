import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#d5e0e0'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '10px',
                    border: '2px solid',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: '#d5e0e0',
                    width: '200px',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontSize: '10px',
                    color: 'black',
                },
            },
        },
    },
});

export default responsiveFontSizes(theme);