//* since css variables are not allowed in @media we have to write exact value.
export const breakpoints = {
  xs: `screen and (min-width: 320px)`, //* --breakpoint-sm
  sm: `screen and (min-width: 640px)`, //* --breakpoint-sm
  md: `screen and (min-width: 750px)`, //* --breakpoint-md
  xl: `screen and (min-width: 1280px)`, //* --breakpoint-xl
};
