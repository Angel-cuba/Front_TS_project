import { CSSProperties } from 'react';

export interface IThemeService {
  theme: string;
  setTheme: any;
}

export interface NavTheme {
  light: string;
  dark: string;
}

export interface AppTheme {
  light: CSSProperties;
  dark: CSSProperties;
  common?: CSSProperties;
}
