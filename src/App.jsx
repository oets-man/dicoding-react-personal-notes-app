import React from 'react';
import data from '../src/data';

import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/default.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ListContainer from './note/ListContainer';
import SelectView from './note/SelectView';
import InputSearch from './note/InputSearch';
import ModalForm from './note/ModalForm';
import ButtonAdd from './note/ButtonAdd';
import TitleApp from './note/TitleApp';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: data(),
			view: 'all',
			strSearch: '',
			showModal: false,
		};

		this.toggleArchived = this.toggleArchived.bind(this);
		this.onChangeView = this.onChangeView.bind(this);
		this.onChangeSearch = this.onChangeSearch.bind(this);
		this.onReset = this.onReset.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleHideModal = this.handleHideModal.bind(this);
		this.handleAddNote = this.handleAddNote.bind(this);
	}

	filteredNotes() {
		let filterSearch = this.state.notes;
		if (this.state.strSearch.length) filterSearch = this.state.notes.filter((note) => note.body.toLowerCase().includes(this.state.strSearch));

		let filterView = filterSearch;
		if (this.state.view == 'isArchived') filterView = filterSearch.filter((note) => note.archived == true);
		if (this.state.view == 'isNotArchived') filterView = filterSearch.filter((note) => note.archived == false);

		return filterView;
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

	onChangeView(e) {
		this.setState({ view: e.target.id });
	}

	onChangeSearch(e) {
		this.setState({ strSearch: e.target.value });
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
			() => {}
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

		if (this.state.view == 'isArchived') {
			alertify.notify('Disimpan sebagai catatan yang tidak diarsipkan.<br/> Ubah tampilan untuk melihat catatan yang baru dibuat!');
		}
	}

	render() {
		return (
			<>
				<header>
					<TitleApp>Aplikasi Catatan Pribadi</TitleApp>
				</header>
				<main className='container'>
						<InputSearch strSearch={this.state.strSearch} onReset={this.onReset} onChangeSearch={this.onChangeSearch} />
						<SelectView changeView={this.onChangeView} />
						<ButtonAdd handleShowModal={this.handleShowModal} />
						<ListContainer notes={this.filteredNotes()} toggleArchived={this.toggleArchived} onDelete={this.onDelete} />
						<ModalForm stateModal={this.state.showModal} hideModal={this.handleHideModal} addNote={this.handleAddNote} />
				</main>
				<footer className='p-1 bg-dark'>
					<p className='m-0 text-light text-center'>by oets</p>
				</footer>
			</>
		);
	}
}

export default App;
