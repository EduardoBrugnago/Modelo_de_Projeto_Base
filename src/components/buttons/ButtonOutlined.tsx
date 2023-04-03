import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Spacing } from "../../config";

import { useFormFull } from "form-full";
import FontStyles from "../styles/fontStyles";
const StyledButton = styled(Button)(({ theme, $upper }) => {
 const { palette: colors, spacing } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: Spacing(1.1, 2),
    marginTop: Spacing(0.75),
    flexShrink: 0,
    overflow: "hidden",
    color: "orange",
    borderColor: colors.text.secondary,
    borderWidth: Spacing(0.3),
    textTransform: "uppercase",
    ...FontStyles.medium16,
    ".MuiButton-startIcon": {
      fill: "blue",
      width: 17,
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

function ButtonTextComponent({
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
      variant="outlined"
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

export default ButtonTextComponent;
