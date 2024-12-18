import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NewApp from './NewApp';
import {Routes, Route} from 'react-router-dom';
import Nasiproj from './Nasiproj';
import Onama from './Onama';
import KontaktirajNas from './KontaktirajNas';
import Napomene from './Napomene';
import Structure from './Strukturaobuke';
import Courses from './Kursevi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <Routes>

    <Route path='/' element={<App/>} />
    <Route path='/Obukeikursevi' element={<Courses/>} />*
    <Route path='/Nasiprojekti' element={<Nasiproj/>} />
    <Route path='/Onama' element={<Onama/>}/>
    <Route path='/Kontakt' element={<KontaktirajNas/>}/>
    <Route path='/Napomene' element={<Napomene/>}/>
    <Route path='/Strukturaobuke' element={<Structure/>}/>
    
  </Routes> 

  </BrowserRouter>
);

