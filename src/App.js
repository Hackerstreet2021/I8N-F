import './App.css';

import AddProduct from './components/AddProduct';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from "react";
import axios from 'axios';
import Home from './Home';

function App() {


    return (
        <div>


            <Router>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>

                    <Route path="/addProduct" element={<AddProduct />} ></Route>

                </Routes>
            </Router>


        </div>
    );
}
export default App;
