import React from 'react';
import data from '../data';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/default.min.css';
import InputSearch from '../components/InputSearch';
import FilterArchive from '../components/FilterArchive';
import ListContainer from '../components/ListContainer';
import ButtonAdd from '../components/ButtonAdd';
import ModalForm from '../components/ModalForm';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: data(),
			optArchived: 'all',
			optSearch: 'searchTitle',
			strSearch: '',
			showModal: false,
		};

		this.toggleArchived = this.toggleArchived.bind(this);
		this.onChangeOptionArchived = this.onChangeOptionArchived.bind(this);
		this.onChangeSearch = this.onChangeSearch.bind(this);
		this.onReset = this.onReset.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleHideModal = this.handleHideModal.bind(this);
		this.handleAddNote = this.handleAddNote.bind(this);
		this.onChangeOptionSearch = this.onChangeOptionSearch.bind(this);
	}

	filteredNotes() {
		const { notes, strSearch, optSearch, optArchived } = this.state;
		const filterSearch = notes.filter((note) => {
			const searchTitle = optSearch === 'searchTitle' ? note.title : note.title + note.body;
			return searchTitle.toLowerCase().includes(strSearch.toLowerCase());
		});

		const filterArchive =
			optArchived === 'active'
				? filterSearch.filter((note) => !note.archived)
				: optArchived === 'archive'
					? filterSearch.filter((note) => note.archived)
					: filterSearch;

		return filterArchive;
	}

	toggleArchived(id) {
		const notes = this.state.notes.map((note) => {
			if (note.id == id) {
				note = { ...note, archived: !note.archived };
				if (note.archived == true) alertify.success('Catatan dipindahkan ke arsip');
				else alertify.success('Catatan dihapus dari arsip');
			}
			return note;
		});
		this.setState({ notes });
	}

	onChangeOptionArchived(e) {
		this.setState({ optArchived: e.target.value });
	}

	onChangeSearch(e) {
		this.setState({ strSearch: e.target.value });
	}

	onChangeOptionSearch(e) {
		this.setState({ optSearch: e.target.value });
	}

	onReset() {
		this.setState({ strSearch: '' });
	}

	onDelete(id) {
		alertify.confirm(
			'Konfirmasi',
			'Hapus catatan ini?',
			() => {
				const notes = this.state.notes.filter((note) => note.id != id);
				this.setState({ notes });
				alertify.success('Catatan berhasil dihapus!');
			},
			() => {},
		);
	}

	handleHideModal() {
		this.setState({ showModal: false });
	}

	handleShowModal() {
		this.setState({ showModal: true });
	}

	handleAddNote(newNote) {
		this.setState((prevState) => {
			return {
				notes: [...prevState.notes, newNote],
			};
		});

		this.setState({ showModal: false });
		alertify.success('Catatan berhasil dibuat!');

		if (this.state.optArchived == 'archive') {
			alertify.notify(
				'Disimpan sebagai catatan aktif.<br/>Ubah tampilan untuk melihat catatan yang baru dibuat!',
			);
		}
	}

	render() {
		return (
			<>
				<main className='container'>
					<InputSearch
						strSearch={this.state.strSearch}
						onReset={this.onReset}
						onChangeSearch={this.onChangeSearch}
						optSearch={this.onChangeOptionSearch}
					/>
					<FilterArchive optArchived={this.onChangeOptionArchived} />
					<ButtonAdd handleShowModal={this.handleShowModal} />
					<ListContainer
						notes={this.filteredNotes()}
						toggleArchived={this.toggleArchived}
						onDelete={this.onDelete}
					/>
					<ModalForm
						stateModal={this.state.showModal}
						hideModal={this.handleHideModal}
						addNote={this.handleAddNote}
					/>
				</main>
			</>
		);
	}
}

export default HomePage;
