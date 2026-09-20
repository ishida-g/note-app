import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import NewNote from './pages/NewNote/index';
import NoteDetail from './pages/NoteDetail/index';
import './App.css'
import Layout from './components/Layout/index';
import {NotificationProvider} from './contexts/NotificationContext';

function App() {

  return (
    <NotificationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/new" element={<NewNote />} />
            <Route path="/notes/:id" element={<NoteDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>`
    </NotificationProvider>
  )
}

export default App
