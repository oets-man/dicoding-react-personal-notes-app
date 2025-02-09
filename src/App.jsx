import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ErrorPage from './pages/ErrorPage';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import AddPage from './pages/AddPage';
import AuthLayout from './layout/AuthLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
				</Route>
				<Route element={<MainLayout />}>
					<Route path='/' element={<MainPage.Active />} />
					<Route path='archive' element={<MainPage.Archive />} />
					<Route path='add' element={<AddPage />} />
					<Route path='notes/:id' element={<DetailPage />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
