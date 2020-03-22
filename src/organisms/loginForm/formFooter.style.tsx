import styled from "@emotion/styled";
import { getStylesForMinWidth } from "../../style/mediaQuery";
import { Breakpoints } from "../../style/constants";

export const FormFooterElementContainer = styled("div")({
  flex: 1,
  display: "flex"
});

export const FormFooterButtonContainer = styled(FormFooterElementContainer)({
  alignItems: "flex-end",
  "& button": {
    width: "100%",
    marginTop: "1.25rem"
  }
});

export const CriteriaListContainer = styled("div")({
  ...getStylesForMinWidth(Breakpoints.tablet, {
    gridColumn: "1 / 2",
    gridRow: "2 / 3"
  }),
  ...getStylesForMinWidth(Breakpoints.desktop, {
    gridRow: "2 / 3",
    gridColumn: "2 / 3"
  })
});

export const ButtonContainer = styled("div")({
  ...getStylesForMinWidth(Breakpoints.tablet, {
    gridColumn: "2 / 3",
    gridRow: "2 / 3"
  }),
  ...getStylesForMinWidth(Breakpoints.desktop, {
    gridRow: "3 / 4",
    gridColumn: "2 / 3"
  })
});
