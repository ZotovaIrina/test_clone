export const theme: ITheme = {
  colors: {
    lightPrimary: '#8561c5',
    primary: '#673ab7',
    darkPrimary: '#482880',
    secondary: '#f50057'
  },
  spacing: {
    gap: '16px',
    gapValue: 16,
    gapUnit: 'px'
  },
  size: {
    small: '16px',
    smallValue: 16,
    unit: 'px',
    regular: '32px',
    regularValue: 32,
    large: '48px',
    largeValue: 48
  }
};

export interface ITheme {
  colors: {
    lightPrimary: string,
    primary: string,
    darkPrimary: string,
    secondary: string
  },
  spacing: {
    gap: string,
    gapValue: number,
    gapUnit: string
  },
  size: {
    small: string,
    smallValue: number,
    unit: string,
    regular: string,
    regularValue: number,
    large: string,
    largeValue: number
  }
}