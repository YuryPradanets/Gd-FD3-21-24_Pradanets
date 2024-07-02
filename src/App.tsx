import { createRoot } from 'react-dom/client';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { Content } from './components/Content'

const textLorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione iusto minus magnam laborum velit vel totam quidem iure quaerat animi, similique non! Labore, veniam aperiam quam numquam omnis quis?";

function App() {
  return (
    <div className="App">
      <Header />
      <Content textContent={textLorem}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <Footer/>
    </div>
  );
}

export default App;
