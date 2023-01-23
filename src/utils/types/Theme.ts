export interface AppTheme {
  theme: 'light' | 'dark',
  value: {
    primary?: string;
    secondary?: string;
    text?: string;
    success?: string;
    warning?: string;
    danger?: string;
    background?: string;
    variant1? : string;
    variant2? : string;
    variant3? : string;
    placeholder? : string;
  },
}