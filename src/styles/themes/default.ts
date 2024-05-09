const helpers = {
  fonts: {
    Baloo2: '"Baloo 2", sans-serif',
    Roboto: '"Roboto", sans-serif',
  },
  weights: {
    regular: 400,
    bold: 700,
    extraBold: 800,
  },
  colors: {
    'color-white': '#FFF',
    'color-gray-100': '#fafafa',
    'color-gray-200': '#f3f2f2',
    'color-gray-300': '#ededed',
    'color-gray-400': '#e6e5e5',
    'color-gray-500': '#d7d5d5',
    'color-gray-600': '#8d8585',
    'color-gray-700': '#574f4d',
    'color-gray-800': '#403937',
    'color-gray-900': '#272221',
    'color-purple-light': '#ebe5f9',
    'color-purple': '#7f47f8',
    'color-purple-dark': '#4b2994',
    'color-yellow-light': '#f1e9c9',
    'color-yellow': '#dbac2c',
    'color-yellow-dark': '#c47f17',
  },
  sizes: {
    'size-0': 0,
    'size-50': '0.25rem',
    'size-100': '0.5rem',
    'size-200': '0.625rem',
    'size-300': '0.75rem',
    'size-400': '0.875rem',
    'size-500': '1rem',
    'size-600': '1.125rem',
    'size-700': '1.25rem',
    'size-800': '2rem',
    'size-900': '3rem',
  },
  breakpoints: {
    'breakpoint-100': '20rem', // '320px'
    'breakpoint-200': '45rem', // '720px'
    'breakpoint-300': '60rem', // '960px'
    'breakpoint-500': '75rem', // '1200px'
    'breakpoint-600': '80rem', // '1280px'
    'breakpoint-700': '90rem', // '1440px'
  },
  borderRadius: {
    'border-radius-100': '2px',
    'border-radius-200': '4px',
    'border-radius-300': '8px',
    'border-radius-400': '12px',
    'border-radius-500': '16px',
    'border-radius-600': '20px',
    'border-radius-700': '24px',
    'border-radius-800': '28px',
    'border-radius-900': '32px',
    'border-radius-pill': '99999px',
    'border-radius-circle': '50%',
  }
}

export const defaultTheme = {
  sizes: {
    base: helpers.sizes
  },
  colors: {
    base: {
      ...helpers.colors,
    },
    tokens: {
      'background': helpers.colors["color-gray-100"],
      
      'base-card': helpers.colors["color-gray-200"],
      'base-input': helpers.colors["color-gray-300"],

      'base-label': helpers.colors["color-gray-600"],
      'base-text': helpers.colors["color-gray-700"],
      'base-subtitle': helpers.colors["color-gray-800"],
      'base-title': helpers.colors["color-gray-900"],

      'cart-button-text': helpers.colors["color-yellow-dark"],
      'cart-button-background': helpers.colors["color-yellow-light"],

      'header-location-text': helpers.colors["color-purple-dark"],
      'header-location-background': helpers.colors["color-purple-light"],

      'base-button': helpers.colors["color-gray-400"],
      'base-hover': helpers.colors["color-gray-500"],

      'primary-button': helpers.colors["color-yellow"],
      'primary-text': helpers.colors["color-yellow-light"],
      'primary-button-hover': helpers.colors["color-yellow-dark"],

      'secondary-button': helpers.colors["color-purple-dark"],
      'secondary-button-text': helpers.colors["color-purple-light"],
      'secondary-button-hover': helpers.colors["color-purple"],
    }
  },
  fonts: {
    base: helpers.fonts,
    tokens: {
      'title-xl': `${helpers.weights.extraBold} 3rem / 130% ${helpers.fonts.Baloo2}`,
      'title-l': `${helpers.weights.extraBold} 2rem / 130% ${helpers.fonts.Baloo2}`,
      'title-m': `${helpers.weights.extraBold} 1.5rem / 130% ${helpers.fonts.Baloo2}`,
      'title-s': `${helpers.weights.bold} 1.25rem / 130% ${helpers.fonts.Baloo2}`,
      'title-xs': `${helpers.weights.bold} 1.125rem / 130% ${helpers.fonts.Baloo2}`,

      'text-l': `${helpers.weights.regular} 1.25rem / 130% ${helpers.fonts.Roboto}`,
      'text-m': `${helpers.weights.regular} 1rem / 130% ${helpers.fonts.Roboto}`,
      'text-s': `${helpers.weights.regular} 0.875rem / 130% ${helpers.fonts.Roboto}`,
      'text-xs': `${helpers.weights.regular} 0.75rem / 130% ${helpers.fonts.Roboto}`,

      'tag': `${helpers.weights.bold} 0.625rem / 130% ${helpers.fonts.Roboto}`,
      'button-l': `${helpers.weights.bold} 0.875rem / 160% ${helpers.fonts.Roboto}`,
      'button-m': `${helpers.weights.regular} 0.75rem / 160% ${helpers.fonts.Roboto}`,
    }
  },
  spacing: {
    base: {
      'spacing-0': helpers.sizes["size-0"],
      'spacing-50': helpers.sizes["size-50"],
      'spacing-100': helpers.sizes["size-100"],
      'spacing-200': helpers.sizes["size-200"],
      'spacing-300': helpers.sizes["size-300"],
      'spacing-400': helpers.sizes["size-400"],
      'spacing-500': helpers.sizes["size-500"],
      'spacing-600': helpers.sizes["size-600"],
      'spacing-700': helpers.sizes["size-700"],
      'spacing-800': helpers.sizes["size-800"],
      'spacing-900': helpers.sizes["size-900"],
    },
    tokens: {
      'spacing-none': `${helpers.sizes["size-0"]}`,
      'spacing-3xs': `${helpers.sizes["size-100"]}`,
      'spacing-2xs': `${helpers.sizes["size-200"]}`,
      'spacing-1xs': `${helpers.sizes["size-300"]}`,
      'spacing-s': `${helpers.sizes["size-400"]}`,
      'spacing-m': `${helpers.sizes["size-500"]}`,
      'spacing-l': `${helpers.sizes["size-600"]}`,
      'spacing-1xl': `${helpers.sizes["size-700"]}`,
      'spacing-2xl': `${helpers.sizes["size-800"]}`,
      'spacing-3xl': `${helpers.sizes["size-900"]}`,

      'spacing-stack-none': `${helpers.sizes["size-0"]} 0`,
      'spacing-stack-3xs': `${helpers.sizes["size-100"]} 0`,
      'spacing-stack-2xs': `${helpers.sizes["size-200"]} 0`,
      'spacing-stack-1xs': `${helpers.sizes["size-300"]} 0`,
      'spacing-stack-s': `${helpers.sizes["size-400"]} 0`,
      'spacing-stack-m': `${helpers.sizes["size-500"]} 0`,
      'spacing-stack-l': `${helpers.sizes["size-600"]} 0`,
      'spacing-stack-1xl': `${helpers.sizes["size-700"]} 0`,
      'spacing-stack-2xl': `${helpers.sizes["size-800"]} 0`,
      'spacing-stack-3xl': `${helpers.sizes["size-900"]} 0`,

      'spacing-inline-none': `0 ${helpers.sizes["size-0"]}`,
      'spacing-inline-3xs': `0 ${helpers.sizes["size-100"]}`,
      'spacing-inline-2xs': `0 ${helpers.sizes["size-200"]}`,
      'spacing-inline-1xs': `0 ${helpers.sizes["size-300"]}`,
      'spacing-inline-s': `0 ${helpers.sizes["size-400"]}`,
      'spacing-inline-m': `0 ${helpers.sizes["size-500"]}`,
      'spacing-inline-l': `0 ${helpers.sizes["size-600"]}`,
      'spacing-inline-1xl': `0 ${helpers.sizes["size-700"]}`,
      'spacing-inline-2xl': `0 ${helpers.sizes["size-800"]}`,
      'spacing-inline-3xl': `0 ${helpers.sizes["size-900"]}`,
    }
  },
  breakpoints: {
    base: helpers.breakpoints,
    tokens: {
      'breakpoint-1xs': helpers.breakpoints["breakpoint-100"],
      'breakpoint-s': helpers.breakpoints["breakpoint-200"],
      'breakpoint-m': helpers.breakpoints["breakpoint-300"],
      'breakpoint-l': helpers.breakpoints["breakpoint-500"],
      'breakpoint-1xl': helpers.breakpoints["breakpoint-600"],
      'breakpoint-2xl': helpers.breakpoints["breakpoint-700"],
    }
  },
  borderRadius: {
    base: helpers.borderRadius,
    tokens: {
      'border-radius-1xs': helpers.borderRadius["border-radius-200"],
      'border-radius-s': helpers.borderRadius["border-radius-300"],
      'border-radius-m': helpers.borderRadius["border-radius-400"],
      'border-radius-l': helpers.borderRadius["border-radius-700"],
      'border-radius-pill': helpers.borderRadius["border-radius-pill"],
      'border-radius-circle': helpers.borderRadius["border-radius-circle"],
      'border-radius-card': `0 ${helpers.borderRadius["border-radius-900"]} 0 ${helpers.borderRadius["border-radius-900"]}`
    }
  }
}