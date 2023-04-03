import React, { Component } from "react";
import { validations } from "../../utils";
import Input from "./Input";

export default class InputEmail extends Component <any, any> {
  render() {
    const { ...props } = this.props;

    return (
      <Input {...props} type="email" validation={validations.isEmailValid} />
    );
  }
}
