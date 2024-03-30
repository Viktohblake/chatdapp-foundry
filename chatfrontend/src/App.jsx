import { configureWeb3Modal } from "./connection";
import Header from "./component/Header"
import './App.css';
import { ToastContainer } from 'react-toastify';
import '@radix-ui/themes/styles.css';
import Registration from "./component/Registration";
import "./output.css";
import { Container } from "@radix-ui/themes";


configureWeb3Modal();
function App() {
  return (
    <>
      <Container className="px-[2rem]">
      <Header/>
      <Registration/>
      <ToastContainer />
      </Container>
    </>
  )
}

export default App
