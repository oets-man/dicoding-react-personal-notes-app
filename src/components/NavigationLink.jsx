import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationLink({ to, children = 'Link' }) {
	const getClassName = (isActive) =>
		`text-center px-4 py-3 ${isActive ? 'text-slate-900 font-bold dark:text-slate-100' : 'text-slate-600 font-reguler dark:text-slate-200 '} hover:text-xl`;

	return (
		<li>
			<NavLink to={to} className={({ isActive }) => getClassName(isActive)}>
				<span className='inline-block w-24'>{children}</span>
			</NavLink>
		</li>
	);
}

NavigationLink.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export default NavigationLink;
