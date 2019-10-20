// function
import { createMuiTheme } from '@material-ui/core/styles';
// MUI colors
import { green, orange } from '@material-ui/core/colors';

const palette = {
    primary: {
      main: green[700],
    },
    secondary: {
      main: orange[300],
    },
  }

export const Theme = createMuiTheme({
  palette,
});