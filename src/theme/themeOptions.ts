import { parseFontSize } from '../utils/utils';
import { tokens } from 'design-tokens/tokens';
import { alpha, type ThemeOptions } from '@mui/material/styles';
// import { violetButtonOverrides } from 'design-tokens/styleOverrides';

const { typography, cc } = tokens;

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: cc.ref.palette.cyan['400'],
    },
    secondary: {
      main: cc.ref.palette.grey['400'],
    },
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
    // fontWeightBold: typography.fontWeight,
    // fontSize: parseFontSize(typography.fontSize),
    fontFamily: typography.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '400',
          fontSize: 14,
          // color: cc.sem.colour.text.inverse,
          // backgroundColor: cc.sem.colour.action.primary, // not needed at root level
          textTransform: 'capitalize',
          '&:hover': {
            // backgroundColor: cc.sem.colour.action['primary-hovered'], // not needed at root level
          },
          '&:active': {
            // backgroundColor: cc.sem.colour.action['primary-pressed'], // not needed at root level
          },
          '&.Mui-disabled': {
            color: alpha(cc.sem.colour.text.disabled, 0.38),
            backgroundColor: alpha(cc.sem.colour.action.disabled, 0.12),
          },
        },
        outlined: {
          color: cc.sem.colour.text.tertiary, // to discuss whether this is appropriate since we cannot have cc.sem.colour.text
          border: `1px solid ${cc.sem.colour.action.tertiary}`,
          '&:hover': {
            backgroundColor: alpha(cc.sem.colour.text.tertiary, 0.08),
          },
          // contained: {
          //   backgroundColor: cc.sem.colour.action.primary,
          //   color: cc.sem.colour.text.inverse,
          //   boxShadow: 'none',
          //   '&:hover': {
          //     backgroundColor: cc.sem.colour.action['primary-hovered'],
          //     boxShadow: 'none',
          //   },
          //   '&:active': {
          //     backgroundColor: cc.sem.colour.action['primary-pressed'],
          //     boxShadow: 'none',
          //   },

          //   // Custom styles applied on top of existing contained styles above
          //   ...violetButtonOverrides.contained,
          // },
          // // example of importing style overrides from design tokens package
          // outlined: {
          //   ...violetButtonOverrides.outlined,
          // },
        },
      },
      // MuiTouchRipple: {
      //   styleOverrides: {
      //     root: {
      //       color: palette.green['40'],
      //       opacity: 0.9,
      //     },
      //     child: {
      //       backgroundColor: palette.green['40'],
      //     },
      //   },
      // },
    },
  },
};
// };

export default themeOptions;
