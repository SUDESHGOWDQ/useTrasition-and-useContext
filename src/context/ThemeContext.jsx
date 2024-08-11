import React, { createContext, useReducer, useContext } from 'react';

const LIGHT_THEME = 'LIGHT_THEME';
const DARK_THEME = 'DARK_THEME';

const ThemeContext = createContext();

const initialState = {
  theme: LIGHT_THEME,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case LIGHT_THEME:
      return { theme: LIGHT_THEME };
    case DARK_THEME:
      return { theme: DARK_THEME };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const setLightTheme = () => dispatch({ type: LIGHT_THEME });
  const setDarkTheme = () => dispatch({ type: DARK_THEME });

  return (
    <ThemeContext.Provider value={{ state, setLightTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export { LIGHT_THEME, DARK_THEME }; 
