export const colors = {
  white: {
    base: '#fff',
    light: '#f2f2f2', // Slightly softer white
    grey: '#d1d1d1',   // Similar to Apple's subtle grey
    dark: '#a6a6a6',   // Darker grey for less prominent text
  },
  black: {
    base: '#000',       // Pure black for the background
    light: '#1c1c1e',   // Slightly lighter black for subtle elements
    blue: '#1d1d1f',    // Another shade of dark grey/black
  },
  primary: {
    base: '#0071e3',    // Apple's signature blue
    light: '#51a7f9',
    dark: '#004385',
  },
  background: {
    light: '#1c1c1e',   // Dark background
    dark: '#000',       // Deeper dark background
  },
};

export const shadow = {
  card: '0 1px 2px rgba(0, 0, 0, 0.1)', // More subtle card shadow
  image: '0 2px 4px rgba(0, 0, 0, 0.1)', // More subtle image shadow
  suggestion: '0 -2px 5px rgba(0,0,0,0.1)', // Subtle suggestion shadow
  footer: '0 -1px 3px rgba(0,0,0,0.3)', // Less pronounced footer shadow
  feature: {
    big: {
      default: '0 5px 10px rgba(0, 0, 0, 0.1)', // Less intense feature shadow
      hover: '0 8px 15px rgba(0, 0, 0, 0.08)',
    },
    small: {
      default: '0 3px 7px rgba(0, 0, 0, 0.1)',
      hover: '0 5px 10px rgba(0, 0, 0, 0.08)',
    },
  },
  text: {
    small: '0 1px 2px rgba(0, 0, 0, 0.15)', // Subtle text shadow
    big: '0 2px 3px rgba(0, 0, 0, 0.1)',    // Subtle big text shadow
  },
};

export const gradient = {
  // Subtle dark gradients (can be used sparingly)
  leftToRight: `linear-gradient(-45deg, ${colors.background.light} 0%, ${colors.black.base} 100%)`,
  rightToLeft: `linear-gradient(45deg, ${colors.background.light} 0%, ${colors.black.base} 100%)`,
};

export const transition = {
  easeInOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)', // Apple-like easeInOut
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Slightly adjusted easeOutBack
  duration: '0.3s', // Slightly faster transitions
};

export const theme = {
  colors,
  gradient,
  shadow,
  breakpoints: {
    xs: '480px',   // Adjusted breakpoints
    s: '768px',
    m: '992px',
    l: '1200px',
  },
  fontFamily: {
    // Using fonts commonly seen on Apple websites
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  },
  layout: {
    article: '58rem', // Slightly wider for readability
    base: '80rem',    // Adjusted base width
    big: '90rem',     // Adjusted big width
  },
  borderRadius: {
    default: '0.2rem', // Flatter border radius
    round: '50rem',   // Still round for circles
  },
  transitions: {
    default: {
      duration: transition.duration,
      timing: transition.easeInOutCubic,
      transition: `all ${transition.duration} ${transition.easeInOutCubic}`,
    },
    boom: {
      duration: transition.duration,
      timing: transition.easeOutBack,
      transition: `all ${transition.duration} ${transition.easeOutBack}`,
    },
    headroom: {
      transition: 'all 0.2s ease-in-out', // Slightly faster headroom
    },
  },
};

export default theme;