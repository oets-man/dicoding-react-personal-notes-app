import { Link, Outlet, useNavigate } from 'react-router-dom';
import NavigationLink from '../components/NavigationLink';
import { ButtonNormal } from '../components/Buttons';

export default function MainLayout() {
	const navigate = useNavigate();

	return (
		<>
			<header className='bg-slate-300 text-slate-800'>
				<div className='flex items-center justify-between'>
					<h1 className='p-4 text-xl font-semibold'>
						<Link to={'/'}>Aplikasi Catatan Pribadi</Link>
					</h1>
					<div className='flex items-center'>
						<nav className=''>
							<ul className='flex items-center'>
								<NavigationLink to={'/'}>Semua</NavigationLink>
								<NavigationLink to={'/active'}>Aktif</NavigationLink>
								<NavigationLink to={'/archive'}>Arsip</NavigationLink>
							</ul>
						</nav>
						<ButtonNormal onClick={() => navigate('/add')} iconName='material-symbols:note-add'>
							Catatan Baru
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
