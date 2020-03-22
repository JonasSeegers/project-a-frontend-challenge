import React from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../style/constants';

interface CriteriaProps {
  fulfilled: boolean;
}

// these are utf8 codes for the checkmark and the ballot x
// defined as constants to avoid magic numbers which would decrease readability
const HEAVY_CHECKMARK = '\u2714';
const HEAVY_BALLOT_X = '\u2718';

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

const StyledLi = styled('li')({
  listStyleType: 'none',
});

const StyledSpan = styled('span')(({ fulfilled }: { fulfilled: boolean }) => ({
  color: `${fulfilled ? Colors.succesColor : Colors.errorColor}`,
  marginRight: '0.25rem',
}));
