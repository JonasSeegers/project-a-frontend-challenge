import styled from "@emotion/styled";
import { Typography } from "../../style/constants";

export const Input = styled("input")({
  fontSize: Typography.copySize,
  padding: "0.75rem",
  border: "2px solid black",
  "&:focus": {
    outline: 0
  }
});
