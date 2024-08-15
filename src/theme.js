import { createTheme, responsiveFontSizes } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "#d5e0e0"
        },
        secondary: {
            main: grey[800]
        }
    }
});

export default responsiveFontSizes(theme);