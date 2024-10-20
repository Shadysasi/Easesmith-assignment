import React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/main';
import ThankYouPage from "./components/ThankYouPage"
import './App.css';

const App=()=> {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/thankyou" element={<ThankYouPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
