import styled from "@emotion/styled";
import { getStylesForMinWidth } from "../../style/mediaQuery";
import { Breakpoints } from "../../style/constants";

export const Box = styled("div")({
  border: "2px solid #000",
  padding: "2rem 1rem",
  flex: 1,
  ...getStylesForMinWidth(Breakpoints.tablet, {
    flex: "none",
    width: "80%"
  })
});
