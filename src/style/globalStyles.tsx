import React from "react";
import { CSSObject, Global } from "@emotion/core";
import { Typography } from "./constants";

// I try to define as few global styles as possible, because they decrease code readability
// On the other hand it can make the code more dry to define some things as global styles
// Also keep in mind that in public/index.html a reset.css file is loaded to remove browser specific styling
const body: CSSObject = {
  fontFamily: Typography.fontFamily,
  fontWeight: 400
};

// I'm using an object over a string here, because the CSSProperties interface offers autocomplete in my
// IDE, which avoids typos
const globalStyles = {
  body
};

export const GlobalStyles = () => <Global styles={globalStyles} />;
