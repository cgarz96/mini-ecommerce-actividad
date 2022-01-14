import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes } from "react-router-dom";
import {Header} from "./components/Header";
import { Home } from './views/Home'
import { Product } from './views/Product'
import { Purchase } from './views/Purchase'


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path={"/"}  element={<Home />} />
        <Route path={"/product/:id"}  element={<Product />} />
        <Route path={"/purchase"}  element={<Purchase />} />
        <Route path="*" element={ <div>404 NOT FOUND</div>} />
      </Routes>
      
    </>
  );
}

export default App;
