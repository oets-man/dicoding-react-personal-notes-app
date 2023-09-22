/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, onDelete }) {
	return (
		<div className="contact-list">
			{contacts.map((contact) => (
				<ContactItem key={contact.id} onDelete={onDelete} {...contact} />
			))}
		</div>
	);
}

export default ContactList;
