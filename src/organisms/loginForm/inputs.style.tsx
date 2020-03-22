import styled from "@emotion/styled";
import { getStylesForMinWidth } from "../../style/mediaQuery";
import { Breakpoints } from "../../style/constants";

export const InputsRow = styled("div")({
  display: "flex",
  flexDirection: "column",
  ...getStylesForMinWidth(Breakpoints.tablet, {
    flexDirection: "row-reverse"
  })
});

export const LabeledInputsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  ...getStylesForMinWidth(Breakpoints.tablet, {
    flex: 1,
    // keep in mind, that the first child will be displayed at the very right on tablet
    // because of the row-reverse
    ":first-child": {
      marginLeft: "0.75rem"
    }
  })
});
