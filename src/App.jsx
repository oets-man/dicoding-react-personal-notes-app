// eslint-disable-next-line no-unused-vars
import React from 'react';
import data from '../src/data';

import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import ListContainer from './note/ListContainer';
import SelectView from './note/SelectView';
import InputSearch from './note/InputSearch';
import ModalForm from './note/ModalForm';
import ButtonAdd from './note/ButtonAdd';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: data(),
			view: 'all',
			strSearch: '',
			showModal: false,
		};

		this.toggleArchived_ev = this.toggleArchived_ev.bind(this);
		this.onChangeView = this.onChangeView.bind(this);
		this.onChangeSearch = this.onChangeSearch.bind(this);
		this.onReset = this.onReset.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleHideModal = this.handleHideModal.bind(this);
		this.addNote = this.addNote.bind(this);
	}

	filteredNotes() {
		let filterSearch = this.state.notes;
		if (this.state.strSearch.length) filterSearch = this.state.notes.filter((note) => note.body.toLowerCase().includes(this.state.strSearch));

		let filterView = filterSearch;
		if (this.state.view == 'isArchived') filterView = filterSearch.filter((note) => note.archived == true);
		if (this.state.view == 'isNotArchived') filterView = filterSearch.filter((note) => note.archived == false);

		return filterView;
	}

	toggleArchived_ev(id) {
		const notes = this.state.notes.map((note) => {
			if (note.id == id) {
				return (note = { ...note, archived: !note.archived });
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

	addNote(newNote) {
		this.setState((prevState) => {
			return {
				notes: [...prevState.notes, newNote],
			};
		});
		this.setState({ showModal: false });
		alertify.success('Catatan berhasil dibuat!');
	}
	render() {
		return (
			<Container>
				<h1 className="text-center p-1 mt-4">Aplikasi Catatan Pribadi</h1>
				<hr />
				<InputSearch strSearch={this.state.strSearch} onReset={this.onReset} onChangeSearch={this.onChangeSearch} />
				<SelectView changeView={this.onChangeView} />
				<ButtonAdd handleShowModal={this.handleShowModal} />
				<ListContainer notes={this.filteredNotes()} toggleArchived={this.toggleArchived_ev} onDelete={this.onDelete} />
				<ModalForm stateModal={this.state.showModal} hideModal={this.handleHideModal} addNote={this.addNote} />
			</Container>
		);
	}
}

export default App;
