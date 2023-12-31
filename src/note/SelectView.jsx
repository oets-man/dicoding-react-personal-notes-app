/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Form from 'react-bootstrap/Form';

export default function SelectView({changeView}) {
	return (
		<div className='mt-3'>
			<div className='card col-sm-12 col-md-6 col-lg-4 mx-auto py-2' style={{minWidth:'375px'}}>

			<p className="text-center fw-bold m-0">Tampilkan Catatan</p>
			<div className="d-flex justify-content-center gap-3">
				<Form.Check type="radio" name="archived" onChange={changeView} label="Semua" id="all" defaultChecked />
				<Form.Check type="radio" name="archived" onChange={changeView} label="Aktif" id="isNotArchived" />
				<Form.Check type="radio" name="archived" onChange={changeView} label="Arsip" id="isArchived" />
			</div>
			</div>
		</div>
	);
}
