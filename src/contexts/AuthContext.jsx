import { createContext, useState } from 'react';
import { getAccessToken, getUserLogged, putAccessToken } from '../utils/api';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
	const localUser = JSON.parse(localStorage.getItem('user')) || {};
	const [isAuthenticated, setIsAuthenticated] = useState(!!getAccessToken());
	const [user, setUser] = useState(localUser);

	const login = async (token) => {
		putAccessToken(token);
		const { data } = await getUserLogged();
		localStorage.setItem('user', JSON.stringify(data));
		setUser(data);
		setIsAuthenticated(true);
		alertify.success('Selamat datang kembali ' + data.name);
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
				setUser({});
			},
			// on Cancel
			() => {},
		);
	};

	const authContextValue = {
		isAuthenticated,
		login,
		logout,
		user,
	};

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
