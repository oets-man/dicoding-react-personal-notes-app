import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';

function ButtonNormal({ children, iconName, ...props }) {
	return (
		<button
			{...props}
			className='flex items-center px-4 py-2 m-2 text-sm bg-white rounded-md shadow-sm text-slate-900 ring-1 ring-inset ring-slate-600 hover:bg-slate-100'
		>
			{iconName && <Icon className='inline mr-2' icon={iconName} width='1.5em' height='1.5em' />}
			{children}
		</button>
	);
}

function ButtonDanger({ children, iconName, ...props }) {
	return (
		<button
			{...props}
			className='px-4 py-2 m-2 text-sm text-red-700 bg-white rounded-md shadow-sm ring-1 ring-inset ring-red-600 hover:bg-red-100'
		>
			{iconName && <Icon className='inline mr-2' icon={iconName} width='1.5em' height='1.5em' />}
			{children}
		</button>
	);
}

ButtonNormal.propTypes = {
	children: PropTypes.node.isRequired,
	iconName: PropTypes.string,
};

ButtonDanger.propTypes = {
	children: PropTypes.node.isRequired,
	iconName: PropTypes.string,
};

export { ButtonNormal, ButtonDanger };
