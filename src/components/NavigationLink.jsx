import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationLink({ to, children }) {
	const getClassName = (isActive) =>
		`text-center px-4 py-3 ${isActive ? 'text-slate-900 font-bold' : 'text-slate-600 font-reguler'} hover:text-slate-50`;

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
	children: PropTypes.node.isRequired,
};

export default NavigationLink;
