import { createTheme } from '@mui/material/styles';
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
    typography: {
        fontFamily: "sans-serif",
        header: {
            fontSize: '3em',
            '@media (max-width:600px)': {
              fontSize: '1.5rem',
            },
            fontFamily: 'sans-serif',
            fontWeight: 600
        },
        body: {
            fontSize: '1.2em',
            '@media (max-width:600px)': {
              fontSize: '1.5rem',
            },
            fontFamily: 'sans-serif',
            fontWeight: 400
        },
        h5: {
            fontWeight: 600,
        }
    },
    palette: {
        inverted: createColor("#3C4A78"),
        white: createColor("#fff"),
        primary: {
            main: '#01042D',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4, 
                    textTransform: 'none',
                    fontWeight: 600
                },
            },
        },
    },
});

export default theme;