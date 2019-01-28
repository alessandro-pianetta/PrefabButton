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
import styles from "./styles";

interface Props {
  text: string;
  primary: boolean;
  secondary: boolean;
  success: boolean;
  danger: boolean;
  warning: boolean;
  info: boolean;
  light: boolean;
  dark: boolean;
  grayedOut: boolean;
  outline: boolean;
  small: boolean;
  large: boolean;
  rounded: boolean;
  block: boolean;
  full: boolean;
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
    gray: { bg: "#A6A6A6", border: "#A6A6A6", textColor: "#fff" },
    default: { bg: "transparent", border: "#000", textColor: "#000" }
  };

  setColor = () => {
    const {
      primary,
      secondary,
      success,
      danger,
      warning,
      info,
      light,
      grayedOut,
      dark
    } = this.props;

    if (grayedOut) {
      return "gray";
    } else if (primary) {
      return "primary";
    } else if (secondary) {
      return "secondary";
    } else if (success) {
      return "success";
    } else if (danger) {
      return "danger";
    } else if (warning) {
      return "warning";
    } else if (info) {
      return "info";
    } else if (light) {
      return "light";
    } else if (dark) {
      return "dark";
    } else {
      return "default";
    }
  };

  setSize() {
    const { large, small } = this.props;
    let text, button;

    if (small) {
      text = styles.smallText;
      button = styles.smallBtn;
    } else if (large) {
      text = styles.largeText;
      button = styles.largeBtn;
    }

    return { text, button };
  }

  setForm() {
    const { block, full } = this.props;
    if (block) {
      return styles.block;
    } else if (full) {
      return styles.fullButton;
    }
  }

  render() {
    const {
      text,
      light,
      outline,
      rounded,
      full,
      grayedOut,
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

    const color = this.setColor();
    const size = this.setSize();
    const form = this.setForm();

    return (
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
        disabled={disabled || grayedOut}
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
          styles.button,
          {
            backgroundColor:
              outline && !light
                ? this.color[color].textColor
                : this.color[color].bg,
            borderColor: this.color[color].border
          },
          size.button,
          rounded && styles.rounded,
          form,
          (disabled || grayedOut) && styles.disabled
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              color:
                outline && !light
                  ? this.color[color].bg
                  : this.color[color].textColor
            },
            size.text,
            full && styles.fullText
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  default: true,
  outline: false,
  small: false,
  large: false,
  primary: false,
  secondary: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
  light: false,
  dark: false,
  grayedOut: false,
  rounded: false,
  block: false,
  full: false,
  text: "Click here!"
};
