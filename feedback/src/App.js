import styled from "styled-components";

import './App.css';
import { Feedback } from './components/Feedback';

const BoxS = styled.div`
  background-color: rgb(255, 153, 122);
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
  border-radius: 30px;

`

function App() {
  return (
    <BoxS className="App">
        <Feedback/>
    </BoxS>
  );
}

export default App;
