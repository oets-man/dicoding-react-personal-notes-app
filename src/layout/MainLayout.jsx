import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import NavigationLink from '../components/NavigationLink';
import { ButtonNormal } from '../components/Buttons';
import SwitchField from '../components/SwitchField';
import useTheme from '../hooks/use-theme';
import useAuth from '../hooks/use-auth';

export default function MainLayout() {
	const navigate = useNavigate();
	const { theme, toggleTheme } = useTheme();
	const { isAuthenticated, logout, user } = useAuth();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}
	return (
		<>
			<header className='bg-slate-300 text-slate-800 dark:bg-slate-800 dark:text-slate-200'>
				<div className='flex items-center justify-between'>
					<Link to={'/'} className='p-4 '>
						<h1 className='text-xl font-medium '>Catatan Pribadi</h1>
						<p className='font-thin' style={{ fontVariant: 'small-caps' }}>
							{user.name}
						</p>
					</Link>
					<div className='flex items-center'>
						<nav className=''>
							<ul className='flex items-center'>
								<NavigationLink to={'/'}>Semua</NavigationLink>
								<NavigationLink to={'/active'}>Aktif</NavigationLink>
								<NavigationLink to={'/archive'}>Arsip</NavigationLink>
							</ul>
						</nav>
						<div className='px-2 py-1.5 m-2 border rounded-md border-slate-400'>
							<SwitchField
								label='Mode Malam'
								checked={theme == 'light' ? false : true}
								onChange={toggleTheme}
							/>
						</div>
						<ButtonNormal onClick={() => navigate('/add')} iconName='material-symbols:note-add'>
							Catatan Baru
						</ButtonNormal>
						<ButtonNormal onClick={logout} iconName='material-symbols:logout'>
							Keluar
						</ButtonNormal>
					</div>
				</div>

				<hr />
			</header>
			<main className='p-4'>
				<Outlet />
			</main>
			<footer className='fixed inset-x-0 bottom-0 w-full px-4 py-1 text-sm bg-gray-600 text-slate-100'>
				<p className='m-0 text-center'>
					<a href='https://github.com/idsantri' target='_blank'>
						by oets
					</a>
				</p>
			</footer>
		</>
	);
}
