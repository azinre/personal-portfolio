export const theme = {
  colors: {
    // Core colors
    core: {
      ivory: '#E4E4DE',      // Ethereal ivory
      noir: '#1B1B1B',       // Timeless noir
      sage: '#C4C5BA',       // Sophisticated sage
      moss: '#595F39',       // Muted moss
    },
    
    // Functional colors
    ui: {
      background: '#E4E4DE',  // Ethereal ivory
      text: '#1B1B1B',       // Timeless noir
      accent: '#C4C5BA',     // Sophisticated sage
      hover: '#595F39',      // Muted moss
      overlay: 'rgba(27, 27, 27, 0.7)',
    },
    
    // Interactive states
    state: {
      hover: '#595F39',
      active: '#C4C5BA',
      disabled: 'rgba(196, 197, 186, 0.5)',
    },
    primary: {
      main: '#6A0DAD', // Deep Purple
      light: '#E6E6FA', // Lavender
      dark: '#4B0082', // Darker Purple
    },
   
    neutral: {
      white: '#FFFFFF',
      light: '#F5F5F5',
      medium: '#E2E8F0',
      text: '#333333',
      dark: '#000000',
    },
    background: {
      primary: '#F5F5F5',
      secondary: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.7)',
    },
  },
  typography: {
    fontFamily: {
      body: 'Roboto, sans-serif',
      heading: 'Playfair Display, serif',
      accent: 'Montserrat, sans-serif',
    },
    fontSize: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.5rem',
      body: '1rem',
      small: '0.875rem',
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  animation: {
    transition: {
      fast: '0.2s ease',
      base: '0.3s ease',
      slow: '0.5s ease',
    },
    scale: {
      hover: 'scale(1.05)',
    },
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(27, 27, 27, 0.05)',
    md: '0 4px 6px rgba(27, 27, 27, 0.1)',
    lg: '0 10px 15px rgba(27, 27, 27, 0.1)',
  },
}; 