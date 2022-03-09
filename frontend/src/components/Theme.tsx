import { createTheme } from "@mui/material/styles";
/**
 * Theme.tsx
 *  Component for theme managment.
 */

const darkTheme = createTheme ({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5893df',
    },
    secondary: {
      main: '#2ec5d3',
    },
    background: {
      default: '#192231',
    },
  },
});

export default darkTheme;