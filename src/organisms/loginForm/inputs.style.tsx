import styled from "@emotion/styled";
import { getStylesForMinWidth } from "../../style/mediaQuery";
import { Breakpoints } from "../../style/constants";

export const LabeledInputsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  "& input": { margin: "0.75rem 0" }
});

export const EmailInputContainer = styled(LabeledInputsContainer)({
  ...getStylesForMinWidth(Breakpoints.tablet, {
    gridColumn: "2 / 3",
    gridRow: "1 / 1"
  }),

  ...getStylesForMinWidth(Breakpoints.desktop, {
    gridColumn: "1 / 2"
  })
});

export const PasswordInputContainer = styled(LabeledInputsContainer)({
  ...getStylesForMinWidth(Breakpoints.tablet, {
    gridColumn: "1 / 2",
    gridRow: "1 / 1"
  }),

  ...getStylesForMinWidth(Breakpoints.desktop, {
    gridColumn: "2 / 3"
  })
});
