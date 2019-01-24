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
import { View, TouchableOpacity, Text, LayoutChangeEvent } from "react-native";
import { defaultStyles } from "./Styles";

interface Props {
  text: string;
  accessibilityHint: string;
  accessibilityLabel: string;
  accessibilityRole: string;
  accessibilityStates: string[];
  accessible: boolean;
  activeOpacity: number;
  delayLongPress: number;
  delayPressIn: number;
  delayPressOut: number;
  disabled: boolean;
  hitSlop: { top: number; left: number; bottom: number; right: number };
  onBlur(event: any): void;
  onFocus(event: any): void;
  onLayout(event: LayoutChangeEvent): void;
  onLongPress(event: any): void;
  onPress(event: any): void;
  onPressIn(event: any): void;
  onPressOut(event: any): void;
  pressRetentionOffset: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  setOpacityTo(value: number, duration: number): void;
}

export default class Button extends Component<Props> {
  color = {
    primary: { bg: "#007bff", border: "#007bff", textColor: "#fff" },
    secondary: { bg: "#6c757d", border: "#6c757d", textColor: "#fff" },
    success: { bg: "#28a745", border: "#28a745", textColor: "#fff" },
    danger: { bg: "#dc3545", border: "#dc3545", textColor: "#fff" },
    warning: { bg: "#ffc107", border: "#ffc107", textColor: "#fff" },
    info: { bg: "#17a2b8", border: "#17a2b8", textColor: "#fff" },
    light: { bg: "#f8f9fa", border: "#f8f9fa", textColor: "#212529" },
    dark: { bg: "#343a40", border: "#343a40", textColor: "#fff" },
    default: { bg: "transparent", border: "#000", textColor: "#000" }
  };

  render() {
    const {
      text,
      accessibilityHint,
      accessibilityLabel,
      accessibilityRole,
      accessibilityStates,
      accessible,
      activeOpacity,
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      onBlur,
      onFocus,
      onLayout,
      onLongPress,
      onPress,
      onPressIn,
      onPressOut,
      pressRetentionOffset,
      setOpacityTo
    } = this.props;

    return (
      <View
        style={[
          defaultStyles.container,
          { borderColor: this.color["primary"].border }
        ]}
      >
        <TouchableOpacity
          hitSlop={hitSlop}
          accessibilityHint={accessibilityHint}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole={accessibilityRole}
          accessibilityStates={accessibilityStates}
          accessible={accessible}
          activeOpacity={activeOpacity}
          delayLongPress={delayLongPress}
          delayPressIn={delayPressIn}
          delayPressOut={delayPressOut}
          disabled={disabled}
          onBlur={onBlur}
          onFocus={onFocus}
          onLayout={onLayout}
          onLongPress={onLongPress}
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          pressRetentionOffset={pressRetentionOffset}
          setOpacityTo={setOpacityTo}
          style={[
            defaultStyles.button,
            { backgroundColor: this.color["primary"].bg }
          ]}
        >
          <Text
            style={[
              defaultStyles.text,
              { color: this.color["primary"].textColor }
            ]}
          >
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Button.defaultProps = {
  color: "primary",
  forms: "default",
  text: "Click here!"
};
