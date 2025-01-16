import PropTypes from 'prop-types';

function NotFound({ children }) {
	return <div className='p-4 text-center text-red-700 bg-red-100 rounded-md max-w-xl mx-auto'>{children}</div>;
}

NotFound.propTypes = {
	children: PropTypes.node.isRequired,
};

export default NotFound;
