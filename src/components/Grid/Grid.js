import styled from "styled-components";
import React from "react";
function getWidthString(span) {
  if (!span) return;
  let width = (span / 12) * 100;
  return `width: ${width}%`;
}

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const Column = styled.div`
  float: left;

  @media only screen and (min-width: 40em) and (max-width: 52em) {
    ${({ sm }) => sm && getWidthString(sm)}
  }
  @media only screen and (min-width: 52em) and (max-width: 64em) {
    ${({ md }) => md && getWidthString(md)}
  }
  @media only screen and (min-width: 64em) {
    ${({ lg }) => lg && getWidthString(lg)}
  }
`;
export const breakpoints = {
  xs: "@media screen and (max-width: 40em)",
  sm: "@media screen and (min-width: 40em) and (max-width: 52em)",
  md: "@media screen and (min-width: 52em) and (max-width: 64em)",
  lg: "@media screen and (min-width: 64em)",
};

export const hidden = (key) => (props) =>
  props[key]
    ? {
        [breakpoints[key]]: {
          display: "none",
        },
      }
    : null;

export const xs = hidden("xs");
export const sm = hidden("sm");
export const md = hidden("md");
export const lg = hidden("lg");

export const Hide = styled.div([], xs, sm, md, lg);
