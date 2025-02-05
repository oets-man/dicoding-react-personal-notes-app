import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { getLocale } from '../utils/locale';

const LocaleContext = createContext();
export default LocaleContext;

export function LocaleProvider({ children }) {
	const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');

	useEffect(() => {
		if (locale === 'en') {
			document.querySelector('html').setAttribute('lang', 'en');
		} else {
			document.querySelector('html').setAttribute('lang', 'id');
		}
		localStorage.setItem('locale', locale);
	}, [locale]);

	const toggleLocale = () => {
		setLocale(locale === 'id' ? 'en' : 'id');
	};

	const label = getLocale(locale);

	return <LocaleContext.Provider value={{ locale, toggleLocale, label }}>{children}</LocaleContext.Provider>;
}

LocaleProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
