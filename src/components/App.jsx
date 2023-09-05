import { Container } from "./App.styled";
import Counter from "./Counter/Counter";
import Header from "./Header/Header";
import Modal from "./Modal/Modal";

export const App = () => {
  return (
    <>
    <Container>
      React homework template!
    </Container>
    <Header />
    <Counter/>
    <Modal>Modal</Modal>
    </>
  );
};


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
