import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ArchivedPage from './pages/ArchivedPage';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';
import MainLayout from './layout/MainLayout';

const App = () => {
	const ValidateRoute = ({ component: Component }) => {
		const { id } = useParams();
		return /^\d+$/.test(id) ? <Component key={id} /> : <ErrorPage />;
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='archived' element={<ArchivedPage />} />
					<Route path=':id' element={<ValidateRoute component={DetailPage} />} />
					<Route path=':id/edit' element={<ValidateRoute component={EditPage} />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
