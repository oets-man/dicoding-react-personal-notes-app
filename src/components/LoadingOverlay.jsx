import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LoadingOverlay = ({ isLoading }) => {
	if (!isLoading) return null;

	return (
		<div className='absolute inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-slate-500 backdrop-blur-sm'>
			<motion.div
				className='w-12 h-12 border-4 rounded-full border-t-transparent border-slate-700 dark:border-slate-300 animate-spin'
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
