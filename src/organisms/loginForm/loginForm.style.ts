import styled from '@emotion/styled';
import { getStylesForMinWidth } from '../../style/mediaQuery';
import { Breakpoints } from '../../style/constants';
import { LabeledInputsContainer } from '../../molecules/labeledInputContainer';

/**
 * The EmailInputContainer and the PasswordInputContainer swap places. On tablet,
 * the PasswordInputContainer is on the left hand side, on desktop, the PasswordInputContainer
 * is on the right hand side. That's everything the following two styled calls do
 */
export const EmailInputContainer = styled(LabeledInputsContainer)({
  ...getStylesForMinWidth(Breakpoints.tablet, {
    gridColumn: '2 / 3',
    gridRow: '1 / 1',
  }),

  ...getStylesForMinWidth(Breakpoints.desktop, {
    gridColumn: '1 / 2',
  }),
});

export const PasswordInputContainer = styled(LabeledInputsContainer)({
  ...getStylesForMinWidth(Breakpoints.tablet, {
    gridColumn: '1 / 2',
    gridRow: '1 / 1',
  }),

  ...getStylesForMinWidth(Breakpoints.desktop, {
    gridColumn: '2 / 3',
  }),
});

/**
 * Tablet: The CriteriaList is on the left hand side, same row as the Button
 * Desktop: The CriteriaList is on the right hand side, above the button
 */
export const CriteriaListContainer = styled('div')({
  ...getStylesForMinWidth(Breakpoints.tablet, {
    gridColumn: '1 / 2',
    gridRow: '2 / 3',
  }),

  ...getStylesForMinWidth(Breakpoints.desktop, {
    gridRow: '2 / 3',
    gridColumn: '2 / 3',
  }),
});

/**
 * Tablet: The button is on the right hand side, same row as the CriteriaList
 * Desktop: The button is on the right hand side, but underneath the CriteriaList
 */
export const ButtonContainer = styled('div')({
  '& button': {
    width: '100%',
  },
  marginTop: '2rem',

  ...getStylesForMinWidth(Breakpoints.tablet, {
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
    marginTop: '0',
    alignSelf: 'end',
  }),

  ...getStylesForMinWidth(Breakpoints.desktop, {
    gridRow: '3 / 4',
    gridColumn: '2 / 3',
    marginTop: '1.5rem',
  }),
});
