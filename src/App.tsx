import { createRoot } from 'react-dom/client';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Content } from './components/Content';
// import type {ContentProps } from './components/Content';

type textLorem = string;

function App() {
  return (
    <div className="App">
      <Header />
      <Content title="Главная страница" descrip="Это приветственный контент: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione iusto minus magnam laborum velit vel totam quidem iure quaerat animi, similique non! Labore, veniam aperiam quam numquam omnis quis?" />
      <Footer/>
    </div>
  );
}

export default App;
