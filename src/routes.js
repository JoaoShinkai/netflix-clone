import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Film from './pages/Film';
import Home from './pages/Home';

import Header from './components/Header';

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/film' element={ <Film/> } />
            </Routes>
        </BrowserRouter>
    )
}