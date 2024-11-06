import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import ShareData from '../src/context/Createcontent'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShareData>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </ShareData>
   
);

