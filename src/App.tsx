import React from 'react';
import ProductForm from "./components/product/ProductForm";
import {Route, Routes} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";

function App() {
    return (
        <BrowserRouter >
          <div className="App">
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/login'}>Login</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path={'/'} element={<ProductForm/>}></Route>
            <Route path={'/login'}></Route>
          </Routes>
          </div>
        </BrowserRouter>
    );
}

export default App;
