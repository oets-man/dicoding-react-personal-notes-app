import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import useInput from '../hooks/use-input';
import { ButtonNormal } from '../components/Buttons';
import { useState } from 'react';
import { register } from '../utils/api';

function RegisterPage() {
	const [name, onNameChange] = useInput('');
	const [email, onEmailChange] = useInput('');
	const [password, onPasswordChange] = useInput('');
	const [confirmPassword, onConfirmPasswordChange] = useInput('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		setError('');
		setIsLoading(true);

		// Validasi password
		if (password !== confirmPassword) {
			setError('Kata sandi tidak cocok');
			setIsLoading(false);
			return;
		}

		try {
			const response = await register({
				name,
				email,
				password,
			});

			if (!response || response.error) {
				setError(response.message || 'Registrasi gagal');
			} else {
				// Redirect ke halaman login atau langsung login
				navigate('/login');
			}
		} catch (err) {
			setError(err.message || 'Terjadi kesalahan saat registrasi');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<h2 className='p-2 text-xl text-center text-slate-800'>Registrasi</h2>
			{error && <div className='p-2 text-red-500 bg-red-100'>{error}</div>}
			<form onSubmit={handleRegister}>
				<InputField
					label='Nama Lengkap'
					name='name'
					placeholder='Masukkan nama Anda'
					type='text'
					value={name}
					onChange={onNameChange}
					id='name'
					required
				/>
				<InputField
					label='Email'
					name='email'
					placeholder='Masukkan email Anda'
					type='email'
					value={email}
					onChange={onEmailChange}
					id='email'
					required
				/>
				<InputField
					label='Kata Sandi'
					name='password'
					placeholder='Masukkan kata sandi Anda'
					type='password'
					value={password}
					onChange={onPasswordChange}
					id='password'
					required
				/>
				<InputField
					label='Konfirmasi Kata Sandi'
					name='confirm-password'
					placeholder='Ulangi kata sandi'
					type='password'
					value={confirmPassword}
					onChange={onConfirmPasswordChange}
					id='confirm-password'
					required
				/>
				<ButtonNormal type='submit' disabled={isLoading}>
					{isLoading ? 'Memproses...' : 'Daftar'}
				</ButtonNormal>
			</form>
			<p className='p-2 text-sm'>
				Sudah punya akun?{' '}
				<Link to={'/login'} className='underline'>
					Masuk
				</Link>
			</p>
		</>
	);
}

export default RegisterPage;
