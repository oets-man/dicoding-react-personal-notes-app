/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton'
function ContactItem({ imageUrl, name, tag, id, onDelete }) {
	return (
		<div className="contact-item">
			<ContactItemImage imageUrl={imageUrl} />
			<ContactItemBody name={name} tag={tag} />
			<DeleteButton id={id} onDelete={onDelete}/>
		</div>
	);
}
ContactItem.propTypes = {
	imageUrl: PropTypes.string,
	name: PropTypes.string,
	tag: PropTypes.string,
};
export default ContactItem;
