// eslint-disable-next-line no-unused-vars
import React from 'react';
import ContactList from './ContactList';
import { getData } from '../data';
import ContactInput from './ContactInput';

class ContactApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: getData(),
		};
		this.onDelete_ev = this.onDelete_ev.bind(this);
		this.onAddContact_ev = this.onAddContact_ev.bind(this);
	}

	onDelete_ev(id) {
		const contacts = this.state.contacts.filter((contact) => contact.id != id);
		this.setState({ contacts });
	}

	onAddContact_ev({ name, tag }) {
		this.setState((prevState) => {
			return {
				contacts: [
					...prevState.contacts,
					{
						id: +new Date(),
						name,
						tag,
						imageUrl: '/images/default.jpg',
					},
				],
			};
		});
	}

	render() {
		return (
			<div className="contact-app">
				<h1>Aplikasi Kontak</h1>
				<h2>Tambah Kontak</h2>
				<ContactInput addContact={this.onAddContact_ev} />
				<h2>Daftar Kontak</h2>
				<ContactList contacts={this.state.contacts} onDelete={this.onDelete_ev} />
			</div>
		);
	}
}

export default ContactApp;
