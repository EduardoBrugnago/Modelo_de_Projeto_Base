import React from "react";
import { validations } from "../../utils";

import Input from "./Input";
class InputPassword extends React.Component <any, any> {
  state = {
    showPassword: false,
  };
  render() {
    return (
      <Input
        {...this.props}
        validation={validations.isPassword}
        withHide={() => {
          this.setState({ showPassword: !this.state.showPassword });
        }}
        state={this.state.showPassword}
        type={
          this.state.showPassword
            ? "text"
            : this.props?.$type === "newPassword"
            ? "newPassword"
            : "password"
        }
      />
    );
  }
}
export default InputPassword;
