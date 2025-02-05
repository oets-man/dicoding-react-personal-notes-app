import { createContext, useState } from 'react';
import { getAccessToken, getUserLogged, putAccessToken } from '../utils/api';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';

const AuthContext = createContext({
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
});
export default AuthContext;

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(!!getAccessToken());

	const login = async (token) => {
		putAccessToken(token);
		setIsAuthenticated(true);
		const user = await getUserLogged();
		localStorage.setItem('user', JSON.stringify(user.data));
	};

	const logout = () => {
		return alertify.confirm(
			'Konfirmasi',
			'Keluar dari Aplikasi?',
			// on OK
			() => {
				putAccessToken('');
				setIsAuthenticated(false);
				localStorage.removeItem('user');
			},
			// on Cancel
			() => {},
		);
	};

	const authContextValue = {
		isAuthenticated,
		login,
		logout,
	};

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
