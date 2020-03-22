import React from 'react';
import styled from '@emotion/styled';
import { Criteria } from '../../atoms/criteria';

interface CriteriaListProps {
  descriptions: string[];
  fulfilledStates: boolean[];
}

export const CriteriaList: React.FC<CriteriaListProps> = ({
  descriptions,
  fulfilledStates,
  ...restProps
}) => (
  <StyledUl {...restProps}>
    {renderCriteria(descriptions, fulfilledStates)}
  </StyledUl>
);

const StyledUl = styled('ul')({
  '& li': {
    margin: '0.5rem 0'
  }
});

const renderCriteria = (
  allDescriptions: string[],
  allFulfilledStates: boolean[]
) =>
  allDescriptions.map((description, index) => (
    <Criteria fulfilled={allFulfilledStates[index]} key={`criteria_${index}`}>
      {description}
    </Criteria>
  ));
