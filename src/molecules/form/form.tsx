import styled from "@emotion/styled";

export const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  "& input": { margin: "0.75rem 0" },
  "& button": { marginTop: "1.25rem" }
});
