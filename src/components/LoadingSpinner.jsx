import { motion } from 'framer-motion';

const LoadingSpinner = () => {
	return (
		<div className='flex justify-center items-center h-40'>
			<motion.div
				className='w-10 h-10 border-4 border-t-transparent border-slate-500 rounded-full animate-spin'
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 1 }}
			/>
		</div>
	);
};

export default LoadingSpinner;
