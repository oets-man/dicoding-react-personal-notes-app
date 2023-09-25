/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

class ModalForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: +new Date(),
			title: '',
			body: '',
			createdAt: new Date(),
			archived: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onBodyChange = this.onBodyChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const newNote = this.state;
		this.props.addNote(newNote);

		this.setState({ title: '' });
		this.setState({ body: '' });
	}

	onTitleChange(e) {
		this.setState({ title: e.target.value });
	}

	onBodyChange(e) {
		this.setState({ body: e.target.value });
	}

	render() {
		const { hideModal, stateModal } = this.props;
		return (
			<Modal show={stateModal} onHide={hideModal}>
				<Form onSubmit={this.handleSubmit}>
					<Modal.Header closeButton>
						<Modal.Title>Buat Catatan Baru</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group className="mb-3">
							<Form.Label>Judul</Form.Label>
							<Form.Control type="text" placeholder="Judul catatan" value={this.state.title} onChange={this.onTitleChange} />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Catatan</Form.Label>
							<Form.Control as="textarea" rows={3} value={this.state.body} onChange={this.onBodyChange} />
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
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
