import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
export default ThemeContext;

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
