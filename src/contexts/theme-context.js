import { createContext } from 'react';

const themeContext = createContext();

export const themeProvider = themeContext.Provider;
export const themeConsumer = themeContext.Consumer;

export default themeContext;
