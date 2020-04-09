import React from "react";
import Button from "./Button";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import styled, { css } from "styled-components";

export default {
  title: "components|Button",
  component: Button,
  decorators: [withKnobs],
};

export const button = () => {
  const label = text("children", "BUTTON");
  const size = select("size", ["small", "medium", "big"], "medium");
  const theme = select("theme", ["primary", "secondary", "tertiary"], "primary");
  const disabled = boolean("disabled", false);
  const width = text("width", "");
  return (
    <Button size={size} theme={theme} disabled={disabled} width={width} onClick={action("onClick")}>
      {label}
    </Button>
  );
};

button.story = {
  name: "Default",
};

export const primaryButton = () => {
  return <Button>PRIMARY</Button>;
};

export const secondaryButton = () => {
  return <Button theme="secondary">SECONDARY</Button>;
};
export const tertiaryButton = () => {
  return <Button theme="tertiary">TERTIARY</Button>;
};

const StyledDescriptionDiv = styled.div`
  margin-bottom: 0.5rem;
`;

const StyledButtonWrapper = styled.div`
  div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <StyledButtonWrapper>
      <div>
        <StyledDescriptionDiv>Small</StyledDescriptionDiv>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <StyledDescriptionDiv>Medium</StyledDescriptionDiv>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <StyledDescriptionDiv>Big</StyledDescriptionDiv>
        <Button size="big">BUTTON</Button>
      </div>
    </StyledButtonWrapper>
  );
};

export const disabled = () => {
  return (
    <StyledButtonWrapper>
      <div>
        <Button disabled>Primary</Button>
      </div>
      <div>
        <Button disabled theme="secondary">
          Secondary
        </Button>
      </div>
      <div>
        <Button disabled theme="tertiary">
          Tertiary
        </Button>
      </div>
    </StyledButtonWrapper>
  );
};

export const customSized = () => {
  return (
    <StyledButtonWrapper>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </StyledButtonWrapper>
  );
};
