import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import type { AppTheme } from '../utils/types/Theme';
import { darkTheme, lightTheme } from '../utils/constants/theme';



const useTheme: () => AppTheme = () => {

  const schema = useColorScheme();
  const [theme, setTheme] = useState<AppTheme>(schema === 'light' ? lightTheme : darkTheme);

  useEffect(() => {
    setTheme(schema === 'light' ? lightTheme : darkTheme);
  }, [schema]);

  return theme;
}


export default useTheme;