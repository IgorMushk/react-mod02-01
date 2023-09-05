import { Component } from 'react';
import { Container } from './App.styled';
import Counter from './Counter/Counter';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import TodoList from './TodoList';

class App extends Component {
  state = { isShowModal: false };
  toggleModal = () => {
    this.setState(prev => ({ isShowModal: !prev.isShowModal }));
  };
  render() {
    return (
      <>
        <Container>React homework template!</Container>
        <Header toggleModal={this.toggleModal} />
        <Counter />
        {this.state.isShowModal && (
          <Modal toggleModal={this.toggleModal}>Text for Modal</Modal>
        )}
        <TodoList />
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
