/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
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
		if ( body.trim().length == 0) {
			alertify.alert('Not valid', 'Mohon isi catatan!');
			return;
		}

		const id = +new Date();
		const createdAt = new Date();
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
		if (this.state.titleCounter > 0) {
			this.setState((state) => {
				return {
					titleCounter: state.titleCounter - 1,
				};
			});
			this.setState({ title: e.target.value });
		}
	}

	onBodyChange(e) {
		if (this.state.bodyCounter > 0) {
			this.setState((state) => {
				return {
					bodyCounter: state.bodyCounter - 1,
				};
			});
			this.setState({ body: e.target.value });
		}
	}

	render() {
		const { hideModal, stateModal } = this.props;
		return (
			<Modal show={stateModal} onHide={hideModal}>
				<Form onSubmit={this.onSubmit}>
					<Modal.Header closeButton>
						<Modal.Title>Buat Catatan Baru</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group className="mb-3">
							<Form.Label>Judul</Form.Label>
							<Form.Control type="text" placeholder="Judul catatan" value={this.state.title} onChange={this.onTitleChange} />
							<div className="text-end">
								<small>{this.state.titleCounter}</small>
							</div>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Catatan</Form.Label>
							<Form.Control as="textarea" rows={3} value={this.state.body} onChange={this.onBodyChange} />
							<div className="text-end">
								<small>{this.state.bodyCounter}</small>
							</div>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={this.onReset}>
							Reset
						</Button>
						<Button variant="secondary" onClick={hideModal}>
							Tutup
						</Button>
						<Button variant="success" type="submit">
							Simpan
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		);
	}
}

export default ModalForm;
