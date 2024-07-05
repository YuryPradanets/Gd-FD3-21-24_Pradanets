import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutPage } from '../src/pages/AboutPage/About';
import { PostsPage } from '../src/pages/PostsPage/Posts';
import { TermsPage } from './pages/TermsPage/Terms';
import { StartPage } from './pages/StartPage/Start';
import { Other } from './pages/OtherPage/Other';
import { PostDynamic } from "../src/pages/PostsPage/Post_ID";


export function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <main>
          <Routes>
          <Route path = '/' element= {<StartPage />}/>
          <Route path='/about' element={<AboutPage />} />
          <Route path = '/terms' element= { <TermsPage/>}/>
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/posts/:id' element={<PostDynamic/>} />
          <Route path = '/other' element= {<Other/>}/>
          </Routes>
        </main>
        
        <Footer />
    </div>
    </BrowserRouter>
  );
}