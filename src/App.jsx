// eslint-disable-next-line no-unused-vars
import React from 'react';
import data from '../src/data';
import ListContainer from './note/ListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: data(),
		};
	}

	render() {
		return (
			<Container>
				<h1 className='text-center p-1 mt-4'>Aplikasi Catatan Pribadi</h1>
				<hr/>
				<ListContainer notes={this.state.notes}/>
			</Container>
		);
	}
}

export default App;
