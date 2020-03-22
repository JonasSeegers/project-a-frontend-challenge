import styled from "@emotion/styled";
import { getStylesForMinWidth } from "../../style/mediaQuery";
import { Breakpoints } from "../../style/constants";

export const FormFooterRow = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  ...getStylesForMinWidth(Breakpoints.tablet, {
    flexDirection: "row"
  })
});

export const FormFooterElementContainer = styled("div")({
  flex: 1,
  display: "flex"
});

export const FormFooterButtonContainer = styled(FormFooterElementContainer)({
  alignItems: "flex-end",
  "& button": {
    width: "100%"
  }
});
