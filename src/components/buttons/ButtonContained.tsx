import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import {  Spacing } from "../../config";

import FontStyles from "../styles/fontStyles";
import { useFormFull } from "form-full";

const StyledButton = styled(Button)(({ theme, fullWidth, $upper }) => {
    const { spacing, palette: colors } = theme;
  return {
    width: fullWidth ? "100%" : "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: Spacing(1.1, 2),
    flexShrink: 0,
    overflow: "hidden",
    textTransform: "uppercase",
    marginTop: Spacing(0.75),
    ...FontStyles.medium16,
    color: colors.secondary?.main,
    backgroundColor: colors.text.secondary,
    "&:hover": {
      backgroundColor: colors.text.secondary,
    },
    ".MuiButton-startIcon": {
      fill: colors.text.secondary,
      width: 17,
    },
    ".MuiButton": {
      color: "red",
    },
  };
});

const StyledCircularProgress = styled(CircularProgress)(({ theme, $show }) => {
   const { palette: colors } = theme;
  return {
    position: "absolute",
    color: colors.text.secondary,
    transition: ".5s",
    opacity: $show ? 1 : 0,
  };
});

const ChildrenContainer = styled.div(({ $show }) => {
  return {
    transition: ".5s",
    opacity: $show ? 1 : 0.5,
  };
});

function ButtonContainedComponent({
  fullWidth = true,
  label,
  children,
  type,
  disabled,
  loading,
  name,
  feedback,
  action,

  onClick: onClickProps,
  ...props
}: any): JSX.Element {
  const { onClick, formLoading, formDisabled } = useFormFull.button({
    feedback,
    action,
    onClick: onClickProps,
  });

  return (
    <StyledButton
      variant="contained"
      loading={loading || formLoading}
      disabled={disabled || formDisabled}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      <StyledCircularProgress size={Spacing(3)} $show={loading} />
      <ChildrenContainer $show={!loading}>
        {label ? label : children}
      </ChildrenContainer>
    </StyledButton>
  );
}

export default ButtonContainedComponent;
