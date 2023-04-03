const baseRequiredMessage = "Campo obrigatório.";
// const baseRequiredFieldsDescription = "* Preenchimento obrigatório";

const baseReload = {
  message: "Não há dados para exibição.",
  buttonLabel: "Recarregar",
};

const ptBr = {
  months: [
    { initials: "Jan", fullName: "Janeiro" },
    { initials: "Fev", fullName: "Fevereiro" },
    { initials: "Mar", fullName: "Março" },
    { initials: "Abr", fullName: "Abril" },
    { initials: "Mai", fullName: "Maio" },
    { initials: "Jun", fullName: "Junho" },
    { initials: "Jul", fullName: "Julho" },
    { initials: "Ago", fullName: "Agosto" },
    { initials: "Set", fullName: "Setembro" },
    { initials: "Out", fullName: "Outubro" },
    { initials: "Nov", fullName: "Novembro" },
    { initials: "Dez", fullName: "Dezembro" },
  ],
  version: "v ",
  modals: {
    success: {
      buttonLabel: "OK",
    },
    errors: {
      buttonLabel: "Ok",
    },
  },
  home:{
   
  },
  pagesConfig: {
  
  },

  login: {

    title: "LOGIN",
    remember: "Lembrar-me",
    forgotPass: "Esqueceu sua senha?",
    enter: "Entrar",
    continue: "Continuar",
    password: "Senha",

    passwordMessage: baseRequiredMessage,
    user: "Usuário",
    userMessage: baseRequiredMessage,
  },
  forgotPass: {
    title: "ESQUECEU SUA SENHA?",
    subTitle:
      "Efetue o processo de recuperação de sua senha informando seu email",
    successResponse: "Senha alterada com sucesso.",
    resendCode: "Reenviar código",
    inputEmailLabel: "E-mail",
    inputEmailRequiredMessage: baseRequiredMessage,
    inputCodeLabel: "Código",
    inputCodeRequiredMessage: baseRequiredMessage,
    inputPasswordLabel: "Nova senha",
    inputPasswordRequiredMessage: baseRequiredMessage,
    inputConfirmPasswordLabel: "Confirme sua senha",
    inputConfirmPasswordRequiredMessage: baseRequiredMessage,
    submitEmailButton: "ENVIAR SOLICITAÇÃO",
    submitCodeButton: "ENVIAR CÓDIGO",
    submitPassButon: "TROCAR SENHA",
    goBack: "VOLTAR",
  },
  settings: {
    userSettings: {
      users: "Usuários",
      userRegister: {
        userRegister: "Cadastro de Usuário",
        fullName: "Nome Completo",
        fullNameMessage: baseRequiredMessage,
        email: "E-mail",
        emailMessage: baseRequiredMessage,
        password: "Senha",
        passwordMessage: baseRequiredMessage,
        passwordConfirm: "Confirmar Senha",
        passwordConfirmMessage: baseRequiredMessage,
        userAdmin: "Usuário Administrador?",
        register: "Cadastrar",
        successResponse: "Usuário cadastrado com sucesso.",
      },
     
    },
    changePassword: {
      changePassword: "Alterar Senha",
      passwordChange: "Mudança de Senha",
      successResponse: "Senha alterada com sucesso.",
      actualPassword: "Senha Atual",
      newPassword: "Nova Senha",
      passwordConfirmation: "Confirmação de Nova Senha",
      passwordMessage: baseRequiredMessage,
      confirm: "Confirmar",
    },
  },
  
};

export default ptBr;
