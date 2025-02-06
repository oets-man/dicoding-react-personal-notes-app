import { Field, Label, Switch } from '@headlessui/react';
import PropTypes from 'prop-types';

function SwitchField({ checked, onChange, label }) {
	return (
		<Field className='flex gap-x-2 sm:col-span-2'>
			<div className='flex items-center h-6'>
				<Switch
					checked={checked}
					onChange={onChange}
					className='group flex w-8 flex-none cursor-pointer rounded-full bg-slate-200 dark:bg-slate-600 p-px ring-1 ring-inset ring-slate-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 data-[checked]:bg-slate-600 dark:data-[checked]:bg-slate-100'
				>
					{label && <span className='sr-only'>{label}</span>}
					<span
						aria-hidden='true'
						className='size-4 transform rounded-full bg-slate-50 dark:bg-slate-900 shadow-sm ring-1 ring-slate-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5'
					/>
				</Switch>
			</div>
			<Label className='text-slate-700 text-sm/6 dark:text-slate-300'>{label}</Label>
		</Field>
	);
}

SwitchField.propTypes = {
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string,
};

export default SwitchField;
