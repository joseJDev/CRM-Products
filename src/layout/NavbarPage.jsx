import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarPage = () => {
    return ( 
        <nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
            <div
                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <h3>CRM - REACT</h3>
                </div>
            </div>
        </nav>
    );
}
 
export default NavbarPage;