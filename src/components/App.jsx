import { Component } from 'react';
import { Container } from './App.styled';
import Counter from './Counter/Counter';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import TodoList from './TodoList';
import ToDoListV1 from './ToDoListV1/ToDoList';

class App extends Component {
  state = { isShowModal: false };
  toggleModal = () => {
    this.setState(prev => ({ isShowModal: !prev.isShowModal }));
  };

  // showModal = () => {
	// 	this.setState({ isShowModal: true })
	// }

	// closeModal = () => {
	// 	this.setState({ isShowModal: false })
	// }

  render() {
    return (
      <>
        <Container>React homework template!</Container>
        <Header toggleModal={this.toggleModal} />
        {/* <Header showModal={this.showModal} /> */}
        <Counter />
        {this.state.isShowModal && (
          <Modal toggleModal={this.toggleModal}>Text for Modal</Modal>
        )}
        {/* {this.state.isShowModal && (
					<Modal closeModal={this.closeModal}>Some</Modal>
				)} */}
        <TodoList />
        <ToDoListV1 />
      </>
    );
  }
}

export default App;

// export const App = () => {
//   return (
//     <>
//     <Container>
//       React homework template!
//     </Container>
//     <Header />
//     <Counter/>
//     <Modal>Modal</Modal>
//     </>
//   );
// };

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template!
//     </div>
//   );
// };
