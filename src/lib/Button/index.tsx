/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import styled from "styled-components/native";

interface Props {}
export default class Button extends Component<Props> {
  btnText: string = "Welcome to React Native!";

  StyledButton = styled.TouchableOpacity`
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    border-radius: 4px;
  `;

  StyledText = styled.Text`
    line-height: 24px;
    text-align: center;
    color: #212529;
    font-weight: 400;
    font-size: 14px;
  `;

  render() {
    return (
      <this.StyledButton>
        <this.StyledText>{this.btnText}</this.StyledText>
      </this.StyledButton>
    );
  }
}
