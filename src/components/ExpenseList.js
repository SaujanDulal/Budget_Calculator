import React from 'react';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
	return (
		<React.Fragment>
			<ul className='list'>
				{expenses.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							expense={expense}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
						/>
					);
				})}
			</ul>
			{expenses.length > 0 && (
				<button className='btn' onClick={clearItems}>
					Clear expenses
					<MdDelete className=' btn-icon ' />
				</button>
			)}
		</React.Fragment>
	);
};

export default ExpenseList;
