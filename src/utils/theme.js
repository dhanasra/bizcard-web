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
              lineHeight: '1.4',
            },
            fontFamily: 'sans-serif',
            fontWeight: 600
        },
        body: {
            fontSize: '1.2em',
            '@media (max-width:600px)': {
              fontSize: '1rem',
              lineHeight: '1.4',
            },
            lineHeight: '1.8',
            fontFamily: 'sans-serif',
            fontWeight: 400
        },
        label: {
            fontSize: '0.95em',
            lineHeight: '2',
            fontFamily: 'sans-serif',
            fontWeight: 400
        },
        content: {
            fontSize: '0.85em',
            fontFamily: 'sans-serif',
            fontWeight: 400
        },
        labelLight: {
            fontSize: '0.85em',
            lineHeight: '2',
            color: '#666',
            fontFamily: 'sans-serif',
            fontWeight: 400
        },
        subtitle: {
            fontSize: '1.2em',
            lineHeight: '2',
            color: "#222f",
            fontFamily: 'sans-serif',
            fontWeight: 600
        },
        subtitleBold: {
            fontSize: '1.1em',
            lineHeight: '2',
            color: "#222f",
            fontFamily: 'sans-serif',
            fontWeight: 550
        },
        h5: {
            fontWeight: 600,
        },
        titleBold: {
            fontSize: '1.1em',
            fontWeight: 600,
            fontFamily: 'sans-serif',
        },
    },
    palette: {
        bgGrey: createColor("#EEE7"),
        inverted: createColor("#3C4A78"),
        white: createColor("#fff"),
        primary: {
            main: '#01042D',
        },
        secondary: {
            main: '#008080',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4, 
                    textTransform: 'none',
                    fontWeight: 500
                },
            },
        },
    },
});

export default theme;