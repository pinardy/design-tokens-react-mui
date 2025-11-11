import { tokens } from 'design-tokens/tokens';
import { type ThemeOptions } from '@mui/material/styles';
import { buttonStyleOverrides } from 'design-tokens/styleOverrides';

const { typography, cc } = tokens;

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: cc.ref.palette.cyan['400'],
    },
    secondary: {
      main: cc.ref.palette.grey['400'],
    },
    // tertiary: {
    //   main: cc.ref.palette.grey['00'],
    // }, // MUI does not support tertiary natively, can potentially extend palette later in mui-component-override.d.ts. Allows tertiary color usage in Button component.
    success: {
      main: cc.ref.palette.green['400'],
    },
    error: {
      main: cc.ref.palette.red['400'],
    },
    warning: {
      main: cc.ref.palette.amber['400'],
    },
    info: {
      main: cc.ref.palette.blue['400'],
    },
    background: {
      default: cc.ref.palette.grey['100'],
    },
  },
  typography: {
    fontFamily: typography.fontFamily,
  },
  components: {
    MuiButton: buttonStyleOverrides,
  },
};

export default themeOptions;
