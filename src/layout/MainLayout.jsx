import { Outlet } from 'react-router-dom';
import TitleApp from '../components/TitleApp';

export default function MainLayout() {
	return (
		<>
			<header>
				<TitleApp>Aplikasi Catatan Pribadi</TitleApp>
			</header>
			<Outlet />
			<footer className='p-1 bg-dark'>
				<p className='m-0 text-center text-light'>by oets</p>
			</footer>
		</>
	);
}
