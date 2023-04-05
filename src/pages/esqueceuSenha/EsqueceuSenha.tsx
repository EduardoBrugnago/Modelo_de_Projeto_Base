import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ptBr from "../../config/texts/pt-br";
import { Swiper } from "../../components/index";
import Styles from "./EsqueceuSenhaStyles";

import { hooks } from "../../utils";
import StepEmail from "./Steps/StepEmail";

function EsqueceuSenha() {
  const texts = ptBr.login;
  //const version = packageJson.version;
  const navigate = useNavigate();
  const { loading, call } = hooks.useRequest();
  const [formData, setFormData] = useState<any>({});
  const Submit = async (data) => {};

  const FinishStepOne = async (data, Callback) => {
    setFormData({ ...formData, ...data });
    Callback();
  };

  return (
    <Styles.ImageBG>
      <Styles.CardContent>
        <Swiper
          screens={[
            ({ goNext }) => (
              <StepEmail
                loading={loading}
                onSubmit={(data) => {
                  FinishStepOne(data, goNext);
                }}
                goBack={() => navigate("/")}
              />
            ),
            ({ goNext }) => <p>Teste</p>,
          ]}
        />
      </Styles.CardContent>
    </Styles.ImageBG>
  );
}

export default EsqueceuSenha;
