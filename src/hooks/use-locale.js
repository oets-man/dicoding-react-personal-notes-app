import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

export default function useLocale() {
	return useContext(LocaleContext);
}
