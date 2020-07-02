export const theme: ITheme = {
  colors: {
    lightPrimary: '#ede7f6',
    primary: '#673ab7',
    darkPrimary: '#482880',
    superDarkPrimary: '#410f55',
    secondary: '#f50057'
  },
  spacing: {
    gap: '16px',
    gapValue: 16,
    gapUnit: 'px',
    maxWidth: '1000px'
  },
  size: {
    small: '24px',
    smallValue: 24,
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
    superDarkPrimary: string,
    secondary: string
  },
  spacing: {
    gap: string,
    gapValue: number,
    gapUnit: string,
    maxWidth: string
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

export enum Size {
  small = 'small',
  regular = 'regular',
  large = 'large'
}