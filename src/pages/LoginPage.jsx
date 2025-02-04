import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import useInput from '../hooks/use-input';
import { ButtonNormal } from '../components/Buttons';
import { useState } from 'react';
import { login, putAccessToken } from '../utils/api';

function LoginPage() {
	const [email, onEmailChange] = useInput('');
	const [password, onPasswordChange] = useInput('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setError('');
		setIsLoading(true);

		try {
			const response = await login({ email, password });
			if (!response || response.error) {
				setError(response.message || 'Login gagal');
			} else {
				putAccessToken(response.data.accessToken);
				navigate('/');
			}
		} catch (err) {
			setError(err.message || 'Terjadi kesalahan saat login');
		} finally {
			setIsLoading(false);
		}
	};

	// TODO: add required
	return (
		<>
			<h2 className='p-2 text-xl text-center text-slate-800'>Login</h2>
			{error && <div className='p-2 text-red-500 bg-red-100'>{error}</div>}
			<form onSubmit={handleLogin}>
				<InputField
					label='Pengguna'
					name='email'
					placeholder='Masukkan email Anda'
					type='email'
					value={email}
					onChange={onEmailChange}
					id='email'
				/>
				<InputField
					label='Kata Sandi'
					name='password'
					placeholder='Masukkan kata sandi Anda'
					type='password'
					value={password}
					onChange={onPasswordChange}
					id='password'
				/>
				<ButtonNormal type='submit' disabled={isLoading}>
					{isLoading ? 'Memproses...' : 'Masuk'}
				</ButtonNormal>
			</form>
			<p className='p-2 text-sm'>
				Belum punya akun?{' '}
				<Link to={'/register'} className='underline'>
					Daftar
				</Link>
			</p>
		</>
	);
}

export default LoginPage;
