/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import OptionsCheck from './OptionsCheck';

export default function FilterArchive({ optArchived }) {
	const options = [
		{ value: 'all', label: 'Semua', defaultChecked: true },
		{ value: 'active', label: 'Aktif', defaultChecked: false },
		{ value: 'archive', label: 'Arsip', defaultChecked: false },
	];
	return (
		<div className="mt-3">
			<div
				className="card col-sm-12 col-md-6 col-lg-4 mx-auto py-2"
				style={{ minWidth: '375px' }}
			>
				<p className="text-center fw-bold m-0">Tampilkan Catatan</p>
				<OptionsCheck onChange={optArchived} options={options} />
			</div>
		</div>
	);
}
