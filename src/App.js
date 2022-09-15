import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Users from './components/Users/Users';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Header/>}>
        <Route path='user' element={<Users/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
