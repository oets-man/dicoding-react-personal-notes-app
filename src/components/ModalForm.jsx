import { Component } from 'react';
import alertify from 'alertifyjs';

const TITLE_COUNTER = 50;
const BODY_COUNTER = 256;

class ModalForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
			titleCounter: TITLE_COUNTER,
			bodyCounter: BODY_COUNTER,
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onBodyChange = this.onBodyChange.bind(this);
		this.onReset = this.onReset.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		const { title, body } = this.state;

		// validate title
		if (title.trim().length == 0) {
			alertify.alert('Not valid', 'Mohon isi judul!');
			return;
		}

		//validate body
		if (body.trim().length == 0) {
			alertify.alert('Not valid', 'Mohon isi catatan!');
			return;
		}

		const id = +new Date();
		const createdAt = new Date().toISOString();
		const archived = false;
		this.props.addNote({ id, title, body, createdAt, archived });

		// reset form
		this.onReset();
	}

	onReset() {
		this.setState({ title: '' });
		this.setState({ body: '' });
		this.setState({ titleCounter: TITLE_COUNTER });
		this.setState({ bodyCounter: BODY_COUNTER });
	}

	onTitleChange(e) {
		const title = e.target.value;
		if (title.length <= TITLE_COUNTER) {
			this.setState({
				titleCounter: TITLE_COUNTER - title.length,
				title: title,
			});
		}
	}

	onBodyChange(e) {
		const body = e.target.value;
		if (body.length <= BODY_COUNTER) {
			this.setState({
				bodyCounter: BODY_COUNTER - body.length,
				body: body,
			});
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div>
						<div>Buat Catatan Baru</div>
					</div>
					<div>
						<label>Judul</label>
						<input
							type='text'
							placeholder='Judul catatan'
							value={this.state.title}
							onChange={this.onTitleChange}
						/>
						<div className='text-end'>
							<small>{this.state.titleCounter}</small>
						</div>
						<label>Catatan</label>
						<input rows={3} value={this.state.body} onChange={this.onBodyChange} />
						<div className='text-end'>
							<small>{this.state.bodyCounter}</small>
						</div>
					</div>
					<div>
						<button onClick={this.onReset}>Reset</button>
						<button onClick={null}>Tutup</button>
						<button type='submit'>Simpan</button>
					</div>
				</form>
			</div>
		);
	}
}

export default ModalForm;
