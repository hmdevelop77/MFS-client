import React, { useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
 
	function handleBudget(e) {
		setValue(e.target.value)
	}

	return (
		<>
			<input
				required='required'
				type='number'
				className='form-control mr-3'
				id='item'
				value={value}
				onChange={handleBudget}
			/>
			<button
				type='button'
				className='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;