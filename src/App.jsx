import { useTheme, LIGHT_THEME, DARK_THEME } from './context/ThemeContext';
import './App.css'; 
import DataFetcher from './components/DataFetcher';

const App = () => {
  const { state, setLightTheme, setDarkTheme } = useTheme();
  const isDarkTheme = state.theme === DARK_THEME;

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <header>
        <h1>Theme Toggle Example</h1>
        <div className="theme-buttons">
          <button
            className={isDarkTheme ? 'button-inactive' : 'button-active'}
            onClick={setLightTheme}
          >
            Light Theme
          </button>
          <button
            className={isDarkTheme ? 'button-active' : 'button-inactive'}
            onClick={setDarkTheme}
          >
            Dark Theme
          </button>
        </div>
      </header>
      <main>
        <p>This is a sample application to demonstrate theme toggling.</p>
      </main>
      <DataFetcher/>
    </div>
  );
};

export default App;
