import { CSSObject } from '@emotion/core';

/**
 * This function create an object with a media query based on a given min-width and respective styles
 *
 * @param minWidth
 * @param styles
 */
export const getStylesForMinWidth = (minWidth: string, styles: CSSObject) => ({
  [`@media (min-width: ${minWidth})`]: styles,
});
