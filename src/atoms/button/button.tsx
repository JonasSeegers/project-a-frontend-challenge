import styled from "@emotion/styled";
import { Typography } from "../../style/constants";

export const Button = styled("button")({
  backgroundColor: "#000",
  color: "#fff",
  fontSize: Typography.copySize,
  padding: "1rem",
  outline: "none",
  "&:hover": {
    backgroundColor: "#333"
  },

  "&:active": {
    backgroundColor: "#666"
  },

  "&:disabled": {
    backgroundColor: "#999"
  }
});
