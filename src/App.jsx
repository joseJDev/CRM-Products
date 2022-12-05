import NavbarPage from "./layout/NavbarPage";
import SidebarPage from "./layout/SidebarPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Components 
import Customers from "./components/customers/Customers";
import Products from "./components/products/Products";
import Orders from "./components/orders/Orders";

function App() {

  return (
    <BrowserRouter>
      <div id="page-top">
        <div id="wrapper">
          <SidebarPage />
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <NavbarPage/>
                <div className="container-fluid mt-5">
                    <Routes>
                      <Route path="/customers" element={<Customers />}/>
                      <Route path="/products" element={<Products/>}/>
                      <Route path="/orders" element={<Orders/>}/>
                    </Routes>
                  {/* <Content title='Clientes' icon={<FaPlusCircle/>} /> */}
                </div>
              </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
