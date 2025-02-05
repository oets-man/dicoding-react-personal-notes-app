import useLocale from '../hooks/use-locale';
import { ButtonNormal } from './Buttons';
import OptionsCheck from './OptionsCheck';
import PropTypes from 'prop-types';

function InputSearch({ search, onSearch, onReset, onChangeOption }) {
	const { label } = useLocale();
	const options = [
		{
			value: 'title',
			label: label.title,
			defaultChecked: search.option === 'title',
		},
		{
			value: 'body',
			label: label.content,
			defaultChecked: search.option === 'body',
		},
		{ value: 'any', label: label.any, defaultChecked: search.option === 'any' },
	];

	return (
		<div className='grid max-w-xl grid-cols-5 grid-rows-2 mx-auto mb-4 border rounded-lg bg-slate-200 border-slate-300'>
			<div className='col-span-4 row-span-1 py-2 pl-2'>
				<input
					className='w-full p-2 rounded-md focus:ring-1 focus:ring-slate-500'
					placeholder={label.textToSearch}
					aria-label={label.textToSearch}
					aria-describedby='search'
					value={search.text}
					onChange={onSearch}
				/>
			</div>

			<div className='relative col-span-1 row-span-1'>
				<div className='absolute right-0'>
					<ButtonNormal onClick={onReset} iconName='carbon:reset'>
						Reset
					</ButtonNormal>
				</div>
			</div>

			<div className='col-span-4 row-span-1 pl-2 mt-2'>
				<OptionsCheck onChange={onChangeOption} options={options} />
			</div>
		</div>
	);
}

InputSearch.propTypes = {
	onSearch: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	onChangeOption: PropTypes.func.isRequired,
	search: PropTypes.shape({
		option: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	}),
};

export default InputSearch;
