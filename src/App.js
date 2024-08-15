import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Gridbase from './grid/gridbase';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        bgcolor:"#212121", 
        height: "100vh",
      }}>
        <Gridbase/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
