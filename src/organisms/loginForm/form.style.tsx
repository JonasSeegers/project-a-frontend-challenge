import styled from '@emotion/styled';
import { getStylesForMinWidth } from '../../style/mediaQuery';
import { Breakpoints } from '../../style/constants';

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  ...getStylesForMinWidth(Breakpoints.tablet, {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto auto',
    gridColumnGap: '0.75rem'
  }),

  ...getStylesForMinWidth(Breakpoints.desktop, {
    gritTemplateRows: '1fr auto 1fr'
  })
});
