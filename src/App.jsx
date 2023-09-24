// eslint-disable-next-line no-unused-vars
import React from 'react';
import data from '../src/data';
import ListContainer from './note/ListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import SelectView from './note/SelectView';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: data(),
			view: 'all',
		};
		this.toggleArchived_ev = this.toggleArchived_ev.bind(this);
		this.changeView = this.changeView.bind(this);
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

	changeView(e) {
		this.setState({ view: e.target.id });
	}

	render() {
		return (
			<Container>
				<h1 className="text-center p-1 mt-4">Aplikasi Catatan Pribadi</h1>
				<hr />
				<SelectView changeView={this.changeView}/>
				<hr />
				<ListContainer notes={this.state.notes} view={this.state.view} toggleArchived={this.toggleArchived_ev} />
			</Container>
		);
	}
}

export default App;
