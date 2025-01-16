import { useNavigate } from 'react-router-dom';
import { ButtonDanger } from '../components/Buttons';

const ErrorPage = () => {
	const navigate = useNavigate();
	return (
		<div className='flex items-center justify-center min-h-screen bg-slate-100'>
			<div className='mx-auto text-center text-slate-600'>
				<p className='text-4xl font-bold '>Ups...</p>
				<h1 className='my-4 text-2xl font-light'>Halaman tidak ditemukan!!!</h1>
				<ButtonDanger onClick={() => navigate(-1)}>Kembali</ButtonDanger>
			</div>
		</div>
	);
};
export default ErrorPage;
