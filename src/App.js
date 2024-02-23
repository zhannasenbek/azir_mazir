import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pagesComponents/__homePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
