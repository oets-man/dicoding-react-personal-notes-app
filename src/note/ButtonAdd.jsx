/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from 'react-bootstrap';

export default function ButtonAdd({ handleShowModal }) {
	return (
		<div
			className="d-grid col-sm-12 col-md-6 col-lg-4 mx-auto m-3"
			style={{ minWidth: '375px' }}
		>
			<Button variant="outline-success" onClick={handleShowModal}>
				<Icon
					icon="material-symbols:note-add"
					width="1.5em"
					height="1.5em"
				/>
				<span style={{ marginLeft: '4px' }}>Buat Baru</span>
			</Button>
		</div>
	);
}
