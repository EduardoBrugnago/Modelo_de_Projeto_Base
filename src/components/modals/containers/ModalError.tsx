import React from "react";
import { errorModal } from "../utils";

import { Fade } from "@material-ui/core";
import { ButtonText } from "../../index";
import { Styles } from "../styles";
import { Theme } from "../../../config";
import ThemeProviderComponent from "../../others/ThemeProvider";

function ModalContainer() {
  const [infos, setInfos] = React.useState<any>({});
  const [open, setOpen] = React.useState(false);
  const { title, text, confirmButton, exitButton } = infos;

  const handleModal = React.useCallback(
    (config) => {
      if (config.open) {
        setInfos(config.infos);
      }
      setOpen(config.open);
    },
    [setInfos, setOpen]
  );

  errorModal.setCallback(handleModal);
  return (
    <ThemeProviderComponent theme={Theme.Light}>
      <Styles.StyledModal
        open={open}
        onClose={() => setOpen(false)}
        BackdropComponent={Styles.StyledBackdrop}
        aria-labelledby="Título do modal"
        aria-describedby="Descrição do modal"
        disableBackdropClick
      >
        <Fade in={open}>
          <Styles.Container>
            <Styles.ContentContainer>
              <Styles.HeaderContainer>
                <Styles.Title>{title}</Styles.Title>

                {/* <IconButton onClick={errorModal.close}>
                  <Styles.Close />
                </IconButton> */}
              </Styles.HeaderContainer>
              <Styles.HeaderContainer>
                <Styles.ContentText>{text}</Styles.ContentText>
              </Styles.HeaderContainer>
            </Styles.ContentContainer>
            <Styles.FooterContainer>
              {confirmButton ? (
                <ButtonText fullWidth={false} {...confirmButton}>
                  {confirmButton.label}
                </ButtonText>
              ) : null}
              {exitButton ? (
                <ButtonText fullWidth={false} {...exitButton}>
                  {exitButton.label}
                </ButtonText>
              ) : null}
            </Styles.FooterContainer>
          </Styles.Container>
        </Fade>
      </Styles.StyledModal>
    </ThemeProviderComponent>
  );
}

export default React.memo(ModalContainer);
