import React from "react";
import styled from "@emotion/styled";

interface CriteriaProps {
  fulfilled?: boolean;
}

export const Criteria: React.FC<CriteriaProps> = ({
  fulfilled,
  children,
  ...restProps
}) => (
  <StyledLi {...restProps}>
    {`${!!fulfilled} `}
    {children}
  </StyledLi>
);

const StyledLi = styled("li")({ listStyleType: "none" });
