/* eslint-disable no-console */
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

import Colors from "./colors";

const breakpointValues = {
  xs: 0,
  ssm: 460,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1600,
  xxl: 1920,
};

function createLightTheme({
  backgroundColor,
  backgroundColorHover,
  backgroundAlternativeColor,
  paperBackgroundColor,
  paperColorHover,
  textPrimaryColor,
  textSecondaryColor,
  textTertiaryColor,
  textQuarterlyColor,
  secondaryBackgroundColor,
  buttonTextColor,
  buttonBackgroundColor,
  backgroundDisabled,
  textDisabledColor,
  contrastColor,
  inputBackgroundColor,
}: any) {
  return createTheme({
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: {
        xs: 0,

        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
      },
    },
    palette: {
      primary: {
        contrastText: buttonTextColor,
        main: buttonBackgroundColor,
      },
      secondary: {
        main: buttonTextColor,
        contrastText: buttonBackgroundColor,
      },
      error: {
        main: Colors.redError,
        contrastText: Colors.white,
      },
      text: {
        primary: textPrimaryColor,
        secondary: textSecondaryColor,

        disabled: textPrimaryColor + 99,
        hint: textPrimaryColor,
      },
      background: {
        paper: paperBackgroundColor,

        default: backgroundColor,
      },
      action: {
        active: textSecondaryColor,
        hover: textSecondaryColor + "60",
        hoverOpacity: 0.04,
        selected: textSecondaryColor,
        selectedOpacity: 0.08,
        disabled: textDisabledColor,
        disabledBackground: backgroundDisabled,
        disabledOpacity: 0.38,
        focus: "#6CFF00",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },

    shape: {
      borderRadius: 4,
    },
  });
}

//TODO mudar as cores de acordo com a necessidade
const Light = createLightTheme({
  backgroundColor: Colors.whiteBackground,
  secondaryBackgroundColor: Colors.blue,
  backgroundColorHover: Colors.softGrayHover,
  paperBackgroundColor: Colors.softGray,
  paperColorHover: Colors.darkGray,
  backgroundAlternativeColor: Colors.softBlue,
  backgroundDisabled: Colors.grayDisabled,
  textDisabledColor: Colors.white,
  textPrimaryColor: Colors.grayText,
  textSecondaryColor: Colors.blue,
  textTertiaryColor: Colors.white,
  textQuarterlyColor: Colors.darkGray2TextOpacity,
  buttonTextColor: Colors.white,
  buttonBackgroundColor: Colors.blue,
  contrastColor: Colors.mediumBlue,
  inputBackgroundColor: Colors.white,
});

const Themes = {
  Light: responsiveFontSizes(Light),
};

export default Themes;
