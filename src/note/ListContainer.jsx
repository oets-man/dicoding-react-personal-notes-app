/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ListItems from './ListItems';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export default function ListContainer({ notes, toggleArchived, onDelete }) {
	if (notes.length) {
		return (
			<Row>
				{notes.map((note) => (
					<Col sm="12" md="6" lg="4" key={note.id} className="p-2">
						<ListItems {...note} toggleArchived={toggleArchived} onDelete={onDelete} />
					</Col>
				))}
			</Row>
		);
	} else {
		return (
			<Alert variant="warning" className="text-center">
				<p className=" fw-bold m-0">Tidak ada data untuk ditampilkan!</p>
				<p className="fst-italic m-0">Buat baru, ubah tampilan, atau coba kata kunci yang lain!</p>
			</Alert>
		);
	}
}
