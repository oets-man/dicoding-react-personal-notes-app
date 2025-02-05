import { useEffect, useState } from 'react';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/default.min.css';
import InputSearch from '../components/InputSearch';
import ListContainer from '../components/ListContainer';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes, getArchivedNotes } from '../utils/api';
import LoadingSpinner from '../components/LoadingSpinner';
import NotFound from '../components/NotFound';

const MainPage = ({ status }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams();
	const [notes, setNotes] = useState([]);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		if (status === 'archive') {
			getArchivedNotes().then(({ data }) => {
				setNotes(data);
				setIsLoading(false);
			});
		} else {
			getActiveNotes().then(({ data }) => {
				setNotes(data);
				setIsLoading(false);
			});
		}
	}, [status, rerender]);

	const initSearch = () => {
		const title = searchParams.get('title');
		const body = searchParams.get('body');
		const any = searchParams.get('any');

		if (title) return { option: 'title', text: title };
		if (body) return { option: 'body', text: body };
		if (any) return { option: 'any', text: any };
		return { option: 'title', text: '' };
	};

	const [search, setSearch] = useState(initSearch());

	const onSearch = (e) => {
		const keyword = e.target.value;
		setSearchParams({ [search.option]: keyword });
		setSearch((prev) => ({ ...prev, text: keyword }));
	};

	const onChangeOption = (e) => {
		const option = e.target.value;
		setSearchParams({ [option]: search.text });
		setSearch((prev) => ({ option, text: prev.text }));
	};

	const onReset = () => {
		setSearchParams({ [search.option]: '' });
		setSearch((prev) => ({ option: prev.option, text: '' }));
	};

	const filteredNotes = () => {
		const searchText = search.text?.toLowerCase();
		return notes.filter((note) => {
			switch (search.option) {
				case 'title':
					return note.title.toLowerCase().includes(searchText);
				case 'body':
					return note.body.toLowerCase().includes(searchText);
				case 'any':
					return (
						note.title.toLowerCase().includes(searchText) || note.body.toLowerCase().includes(searchText)
					);
				default:
					return true;
			}
		});
	};

	return (
		<div>
			<main className='container mx-auto'>
				<InputSearch onReset={onReset} onSearch={onSearch} onChangeOption={onChangeOption} search={search} />
				{isLoading ? (
					<LoadingSpinner />
				) : notes.length === 0 ? (
					<NotFound>Tidak ada data untuk ditampilkan!</NotFound>
				) : (
					<>
						<ListContainer
							notes={filteredNotes()}
							onUpdate={() => {
								setRerender((prev) => !prev);
							}}
						/>
					</>
				)}
			</main>
		</div>
	);
};

MainPage.propTypes = {
	status: PropTypes.oneOf(['all', 'active', 'archive']),
};

MainPage.Active = () => MainPage({ status: 'active' });
MainPage.Archive = () => MainPage({ status: 'archive' });

export default MainPage;
