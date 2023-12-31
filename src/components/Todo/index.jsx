const Todo = ({ todo, handleDelete }) => {
	return (
		<li className='list-group-item'>
			{todo.title}
			<button
				type='button'
				className='btn-close'
				aria-label='Close'
				onClick={() => handleDelete(todo.id)}
			></button>
		</li>
	)
}

export default Todo

// // rafce
// //import React from 'react'
// - Ok
// const Todo = ({todo, handleDelete}) => {
//   return ( 
//   <li className="list-group-item">
//     {/* <div>{todo.title}</div> */}
//     {todo.title}
//     <button
// 				type='button'
// 				className='btn-close'
// 				aria-label='Close'
// 				onClick={() => handleDelete(todo.id)}
// 		></button>
//     </li>
  
//   )
// }

// export default Todo