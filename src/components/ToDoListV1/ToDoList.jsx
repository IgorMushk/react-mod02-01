import React, { Component } from 'react'
import ToDoV1 from '../ToDoV1/ToDo'
import todo from '../todo.json'


class ToDoListV1 extends Component {
	state ={
		todoList: todo,
	}

	handleCheckCompleted = (id) => {
		this.setState((prevState)=>{
			return {
				todoList: prevState.todoList.map(todo => todo.id ===id
					? {...todo,completed: !todo.completed}
					: todo
					),
			}
		})
	}
	
	render() {
		return (
			<>
				<h1>My To-Do list</h1>
				<ul className='list-group list-group-flush'>
					{this.state.todoList.map((todo) => (
						<ToDoV1
							key={todo.id}
							todo={todo}
							handleCheckCompleted = {this.handleCheckCompleted}
						/>
					))}
				</ul>
			</>
		)
	}
}

export default ToDoListV1

// - ok - work
// class ToDoListV1 extends Component {
// 	state = {
// 		todoList: todo,
// 	}

// 	handleCheckCompleted = (id) => {
// 		this.setState((prevState) => ({
// 			todoList: prevState.todoList.map((todo) =>
// 				todo.id === id ? { ...todo, completed: !todo.completed } : todo
// 			),
// 		}))
// 	}

// 	handleDelete = (id) => {
// 		this.setState((prev) => ({
// 			todoList: prev.todoList.filter((todo) => todo.id !== id),
// 		}))
// 	}

// 	render() {
// 		return (
// 			<>
// 				<h1>My To-Do list</h1>
// 				<ul className='list-group list-group-flush'>
// 					{this.state.todoList.map((todo) => (
// 						<ToDo
// 							key={todo.id}
// 							todo={todo}
// 							handleCheckCompleted={this.handleCheckCompleted}
// 							handleDelete={this.handleDelete}
// 						/>
// 					))}
// 				</ul>
// 			</>
// 		)
// 	}
// }

// export default ToDoListV1