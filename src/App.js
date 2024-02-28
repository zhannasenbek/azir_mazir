import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pagesComponents/__homePage/HomePage';
import SignUp from './pagesComponents/__auth/__signup/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home></Home>}></Route>
        <Route path='/register' index element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
