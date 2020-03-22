import React from "react";
import styled from "@emotion/styled";

interface CriteriaProps {
  fulfilled: boolean;
}

// these are utf8 codes for the checkmark and the ballot x
// defined as constants to avoid magic numbers which would decrease readability
const HEAVY_CHECKMARK = "\u2714";
const HEAVY_BALLOT_X = "\u2718";

const FULFILLED_COLOR = "#459840";
const NOT_FULFILLED_COLOR = "#881a15";

export const Criteria: React.FC<CriteriaProps> = ({
  fulfilled,
  children,
  ...restProps
}) => (
  <StyledLi {...restProps}>
    <StyledSpan fulfilled={fulfilled}>
      {fulfilled ? HEAVY_CHECKMARK : HEAVY_BALLOT_X}
    </StyledSpan>
    {children}
  </StyledLi>
);

const StyledLi = styled("li")({
  listStyleType: "none"
});

const StyledSpan = styled("span")(({ fulfilled }: { fulfilled: boolean }) => ({
  color: `${fulfilled ? FULFILLED_COLOR : NOT_FULFILLED_COLOR}`,
  marginRight: "0.25rem"
}));
