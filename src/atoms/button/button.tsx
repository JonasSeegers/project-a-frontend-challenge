import styled from "@emotion/styled";
import { Typography } from "../../style/constants";

export const Button = styled("button")({
  backgroundColor: "#000",
  color: "#fff",
  fontSize: Typography.copySize,
  padding: "0.75rem",
  outline: "none",
  border: 0,
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
