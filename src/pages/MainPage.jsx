import { useState } from 'react';
import {
	getAllNotes,
	getActiveNotes,
	getArchivedNotes,
	getNote,
	unarchiveNote,
	archiveNote,
} from '../utils/local-data';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/default.min.css';
import InputSearch from '../components/InputSearch';
import ListContainer from '../components/ListContainer';
import PropTypes from 'prop-types';

const MainPage = ({ status }) => {
	const getNotes = () => {
		if (status === 'active') {
			return getActiveNotes();
		} else if (status === 'archive') {
			return getArchivedNotes();
		}
		return getAllNotes();
	};

	const [notes, setNotes] = useState(getNotes());
	const [optSearch, setOptSearch] = useState('searchTitle');
	const [strSearch, setStrSearch] = useState('');

	const filteredNotes = () => {
		switch (optSearch) {
			case 'searchTitle':
				return notes.filter((note) => note.title.toLowerCase().includes(strSearch.toLowerCase()));
			case 'searchBody':
				return notes.filter((note) => note.body.toLowerCase().includes(strSearch.toLowerCase()));
			case 'searchAll':
				return notes.filter(
					(note) =>
						note.title.toLowerCase().includes(strSearch.toLowerCase()) ||
						note.body.toLowerCase().includes(strSearch.toLowerCase()),
				);

			default:
				return notes;
		}
	};

	const onToggleArchived = (id) => {
		const note = getNote(id);
		note.archived ? unarchiveNote(id) : archiveNote(id);
		note.archived != true
			? alertify.success('Catatan dipindahkan ke arsip')
			: alertify.success('Catatan dihapus dari arsip');
		setNotes(getNotes());
	};

	const onChangeSearch = (e) => {
		setStrSearch(e.target.value);
	};

	const onReset = () => {
		setStrSearch('');
	};

	const onChangeOption = (e) => {
		setOptSearch(e.target.value);
	};

	return (
		<div>
			<main className='container mx-auto'>
				<InputSearch
					onReset={onReset}
					onChangeSearch={onChangeSearch}
					onChangeOption={onChangeOption}
					strSearch={strSearch}
				/>
				<ListContainer notes={filteredNotes()} onToggleArchived={onToggleArchived} />
			</main>
		</div>
	);
};

MainPage.propTypes = {
	status: PropTypes.oneOf(['all', 'active', 'archive']),
};

MainPage.All = () => MainPage({ status: 'all' });
MainPage.Active = () => MainPage({ status: 'active' });
MainPage.Archive = () => MainPage({ status: 'archive' });

export default MainPage;
