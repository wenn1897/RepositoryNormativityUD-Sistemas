import React from 'react';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Routes, Link, BrowserRouter} from "react-router-dom";

import Search from '../pages/Search/Search';
import NotFound from '../pages/NotFound';
import NormaDetail from '../pages/Normas/NormaDetail';
import NormaList from '../components/NormaList';

//import './styles.scss';

const router = createBrowserRouter(
    // createRoutesFromElements(
    //     <Route exact path="/" element={<Search/>} />
    //     <Route exact path="normas" element={<NormaList/>} />
    //     <Route exact path="/normas/:id" element={<NormaDetail/>} />
    //     <Route exact path='*' element={<NotFound/>} /> 
    // )
    
    [
    {
      path: "/",
      element: (<Search/>)
      //element: (<h2>HOLA MUNDO</h2>)
    },
    {
      path: "/normas",
      element: (<NormaList/>),
    },
  ]
  );
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

// const App= () => {
//      return(
//          <BrowserRouter>
//              <Routes>
//                  <Route exact path="/" element={<Search/>} />
//                  <Route  path="/normas" element={<NormaList/>} />
//                  <Route exact path="/normas/:id" element={<NormaDetail/>} />
//                  <Route exact path='*' element={<NotFound/>} /> 
//              </Routes>        
//          </BrowserRouter>
//      );
//  }

// export default App;