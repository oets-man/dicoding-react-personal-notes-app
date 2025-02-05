import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LoadingOverlay = ({ isLoading }) => {
	if (!isLoading) return null;

	return (
		<div className='absolute inset-0 flex items-center justify-center bg-slate-500 bg-opacity-50 backdrop-blur-sm z-50'>
			<motion.div
				className='w-12 h-12 border-4 border-t-transparent border-slate-700 rounded-full animate-spin'
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 1 }}
			/>
		</div>
	);
};
LoadingOverlay.propTypes = {
	isLoading: PropTypes.bool.isRequired,
};
export default LoadingOverlay;
