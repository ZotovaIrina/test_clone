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
  }
}