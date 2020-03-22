import styled from '@emotion/styled';
import { getStylesForMinWidth } from '../../style/mediaQuery';
import { Breakpoints } from '../../style/constants';

export const ContentContainer = styled('div')({
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  ...getStylesForMinWidth(Breakpoints.tablet, {
    alignItems: 'center',
    flex: 1,
  }),
});
