const text = {
	personalNote: { en: 'Personal Note', id: 'Catatan Pribadi' },
	addNote: { en: 'Add Note', id: 'Tambah Catatan' },
	logout: { en: 'Logout', id: 'Keluar' },
	darkMode: { en: 'Dark Mode', id: 'Mode Gelap' },
	active: { en: 'Active', id: 'Aktif' },
	archive: { en: 'Archive', id: 'Arsip' },
	title: { en: 'Title', id: 'Judul' },
	content: { en: 'Content', id: 'Isi' },
	any: { en: 'Any', id: 'Semua' },
	textToSearch: { en: 'Enter text to search', id: 'Masukkan teks pencarian' },
	createdAt: { en: 'Created at', id: 'Dibuat pada' },
	locale: { en: 'en-US', id: 'id-ID' },
	edit: { en: 'Edit', id: 'Edit' },
	delete: { en: 'Delete', id: 'Hapus' },
	createNote: { en: 'Create Note', id: 'Buat Catatan' },
	save: { en: 'Save', id: 'Simpan' },
	reset: { en: 'Reset', id: 'Reset' },
	note: { en: 'Note', id: 'Catatan' },
};

export const getLocale = (lang = 'id') =>
	Object.fromEntries(Object.entries(text).map(([key, value]) => [key, value[lang]]));
