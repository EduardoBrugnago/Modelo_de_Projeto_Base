import React from "react";

import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";

import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { IconButton } from "@material-ui/core";
import { useFormFull } from "form-full";
import { Spacing } from "../../config";
import FontStyles from "../styles/fontStyles";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const Label = styled.p(
  ({ theme, $withValue, $withError, $alternativeColors }) => {
    const { palette: colors } = theme;
    return {
      ...FontStyles.bold16,
      fontFamily: $withValue
        ? FontStyles.bold16.fontFamily
        : FontStyles.medium16.fontFamily,
      textTransform: "uppercase",
      margin: 0,
      position: "absolute",
      zIndex: 999,
      top: 0,
      left: Spacing(1),
      color: $withError ? "red" : colors.text.secondary,
      transition: ".5s",
      pointerEvents: "none",
      alignItems: "center",
      display: "flex",
      paddingInline: Spacing(1),
      backgroundColor: $alternativeColors ? "#F7F7F7" : "white",
    };
  }
);

const StyledInput = styled(OutlinedInput)(
  ({
    theme,
    error,
    disabled,
    $inputStyle,
    $error,
    $small,
    $alternativeColors,
    $minHeight,
    ...rest
  }) => {
    return {
      ...FontStyles.light18,
      padding: $small ? "0px 0px  0px  8px" : "0px 8px  0px  8px",
      alignItems: $minHeight && "flex-start",
      paddingTop: $minHeight && Spacing(2.5),
      marginTop: Spacing(1.5),
      multiline: true,
      minHeight: $minHeight && Spacing(20),
      textOverflow: "ellipsis",
      color: error ? "red" : "black",
      backgroundColor: $alternativeColors ? "#F7F7F7" : "transparent",
      boxShadow: "transparent 0px 0px 0px 1000px inset !important",
      "& ..MuiOutlinedInput-input": {
        boxShadow: "transparent 0px 0px 0px 1000px inset !important",
      },
      "& .MuiInput-input": {
        color: error ? "red" : $alternativeColors ? "black" : "white",
        backgroundColor: $alternativeColors ? "#F7F7F7" : "transparent",
        boxShadow: "transparent 0px 0px 0px 1000px inset !important",
        "&::focus": {
          boxShadow: "transparent 0px 0px 0px 1000px inset !important",
        },
        "&::placeholder": {
          opacity: 0.8,
        },
        "&input:-internal-autofill-selected": {
          color: "red",
          background: "red",
        },
        "& .MuiInputBase-input": {
          color: error ? "red" : "black",
          backgroundColor: $alternativeColors ? "#F7F7F7" : "transparent",
          boxShadow: "transparent 0px 0px 0px 1000px inset !important",
        },
      },
      "& .MuiInputBase-input": {
        color: error ? "red" : "black",
        backgroundColor: $alternativeColors ? "#F7F7F7" : "transparent",
        boxShadow: "transparent 0px 0px 0px 1000px inset !important",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        paddingLeft: Spacing(30),
      },
      ...$inputStyle,
    };
  }
);
const Count = styled.p(({ theme, $withValue }) => {
  const { spacing, palette: colors } = theme;

  return {
    width: "100%",
    color: colors.text.primary,
    opacity: 0.6,
    textAlign: "end",
    marginTop: spacing(0.5),
    padding: 0,
    margin: 0,
    ...FontStyles.medium12,
  };
});

const ErrorMessage = styled(FormHelperText)(({ theme }) => {
  return {
    color: "red",
    minHeight: Spacing(2.5),
  };
});

function getErrorClassname(base, error, valid) {
  const className = base;
  if (error) return `${className} invalid`;
  if (valid) return `${className} valid`;
  return className;
}

function getHint(error) {
  if (error) return error;

  return null;
}
function InputComponent(props) {
  const { value, error, onBlur, ref, valid, onChange, ffHandler } =
    useFormFull.field(props);

  const {
    id,
    label,
    required,
    disableError,
    hideVisualError,
    type,
    withHide,
    placeholder,
    state,
    readOnly,
    maxlenght,
    endButton,
    alternativeColors,
    multiline,
    name,
  } = props;

  React.useEffect(() => {
    if (label) {
      const test = document.querySelector(
        ".form-input-" + label?.replace(/\s/g, "")
      )?.children;
      if (test) {
        const a = Array.from(test as HTMLCollectionOf<HTMLElement>).find(
          (element: any) => {
            if (element?.localName === "fieldset") {
              return element;
            } else {
              return null;
            }
          }
        );

        if (a) {
          a.style.paddingLeft = Spacing(3) + "px";
        }
      }
    }
  }, [label]);
  return (
    <FormControl
      className={getErrorClassname("form-control", error, valid)}
      fullWidth
      error={hideVisualError ? undefined : Boolean(error)}
    >
      {label && (
        <Label
          $alternativeColors={alternativeColors}
          className={"form-input-label-" + label?.replace(/\s/g, "")}
          $withValue={Boolean(value) || value === 0 || Boolean(placeholder)}
          $withError={Boolean(error)}
        >
          {label}
          {required && "*"}
        </Label>
      )}
      <StyledInput
        multiline={multiline}
        $minHeight={multiline}
        $alternativeColors={alternativeColors}
        labelWidth={() => {
          if (label) {
            let width = document.querySelector(
              ".form-input-label-" + label.replace(/\s/g, "")
            ) as HTMLElement;
            return width?.offsetWidth;
          } else {
            return 0;
          }
        }}
        inputProps={{
          maxLength: maxlenght,
          style: {
            WebkitBoxShadow: "0 0 0 1000px white inset",
            alignItems: "flex-start",
          },
        }}
        error={error}
        id={id}
        type={type ? type : null}
        disableUnderline={true}
        name={name}
        value={value}
        ref={ref}
        required={!!required}
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event, event.target.value);
        }}
        onBlur={() => {
          ffHandler?.testFieldError(name, false);
        }}
        readOnly={readOnly}
        className={"form-input-" + label?.replace(/\s/g, "")}
        endAdornment={
          withHide ? (
            <InputAdornment position="end">
              <IconButton
                size="small"
                aria-label="toggle password visibility"
                onClick={withHide}
                edge="end"
              >
                {state ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ) : endButton ? (
            endButton(onChange, value)
          ) : null
        }
      />

      {maxlenght ? (
        <Count>
          {value ? value?.length : "0"} / {maxlenght} caracteres
        </Count>
      ) : null}
      {disableError ? null : (
        <ErrorMessage error={Boolean(error)}>{getHint(error)}</ErrorMessage>
      )}
    </FormControl>
  );
}

export default withTheme(InputComponent);
