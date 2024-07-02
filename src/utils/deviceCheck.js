// src/utils/deviceCheck.js

export const isMobileOrTablet = () => {
    const width = window.innerWidth;
    return width <= 1024;
  };
  