import styled from '@emotion/styled';
import { Typography, Breakpoints } from '../../style/constants';
import { getStylesForMinWidth } from '../../style/mediaQuery';

export const Header = styled('header')({
  backgroundColor: '#000',
  color: '#fff',
  padding: '1rem',
  fontSize: Typography.copySize,
  fontWeight: 200,
  display: 'flex',
  ...getStylesForMinWidth(Breakpoints.tablet, {
    fontSize: Typography.h1Size,
    justifyContent: 'center',
  }),
});
