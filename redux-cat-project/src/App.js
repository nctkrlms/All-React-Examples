import {  Container, Row } from "reactstrap";
import CustomNavbar from "./components/common/Navbar";
import Orders from "./components/cart/Orders";

import CartDetail from "./components/cart/Detail";
import Dashboard from "./components/root/Dashboard";
import { Routes,Route } from "react-router-dom";
import BuyPage from "./components/cart/BuyPage";
import Success from "./components/cart/Success";

function App() {
  return (
    <>
    <Container>
      <Row>
        <CustomNavbar/>
      </Row>
    </Container>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/cart" element={<CartDetail/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/buyPage" element={<BuyPage/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="*" element={<h1>Not Found Error</h1>}/>

    </Routes>

    </>
  );
}

export default App;
