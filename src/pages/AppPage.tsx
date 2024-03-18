import { Outlet } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { LayoutPage } from "../styles";
import { DarkTheme, LightTheme } from '../styles/themes';
import { SelectableTheme } from '../utils/types';

export const AppPage = () => {
    const storageTheme = localStorage.getItem('theme') as SelectableTheme || 'dark';
    const theme: SelectableTheme = 'dark';
    
    return (
    <ThemeProvider
      theme={
        storageTheme
          ? storageTheme === 'dark'
            ? DarkTheme
            : LightTheme
          : theme === 'dark'
          ? DarkTheme
          : LightTheme
      }
    >
      <LayoutPage>
        <Outlet />
      </LayoutPage>
    </ThemeProvider>
  );
}