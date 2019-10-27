// functions
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// MUI colors
import { green, orange } from '@material-ui/core/colors';

const palette = {
    primary: green,
    secondary: orange,
    textLight: '#FFF'
}

const typography = {
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
    h1: {
        fontSize: '3.5rem',
        fontWeight: 700
    },
    h2: {
        fontSize: '2.8rem',
        fontWeight: 500
    },
    h3: {
        fontSize: '2.5rem',
        fontWeight: 500
    },
    body1: {
        fontWeight: 500
    },
    button: {
        textTransform: 'capitalize'
    },
}

const overrides = {
    MuiButton: {
        label: {
            color: '#FFF'
        }
    }
}

let Theme = createMuiTheme({
    overrides,
    palette,
    typography
});

export default Theme = responsiveFontSizes(Theme);