/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Form from 'react-bootstrap/Form';

export default function SelectView({changeView}) {
	return (
		<>
			<p className="text-center fw-bold m-0">Tampilkan</p>
			<div className="d-flex justify-content-center gap-3">
				<Form.Check type="radio" name="archived" onChange={changeView} label="Semua" id="all" defaultChecked />
				<Form.Check type="radio" name="archived" onChange={changeView} label="Diarsipkan" id="isArchived" />
				<Form.Check type="radio" name="archived" onChange={changeView} label="Tidak diarsipkan" id="isNotArchived" />
			</div>
		</>
	);
}
