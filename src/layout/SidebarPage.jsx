import { FaUserFriends, FaBoxes, FaShoppingCart, FaChartBar } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const SidebarPage = () => {
    return ( 
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className='sidebar-brand d-flex align-items-center justify-content-center' to={'/'}>
                <div className="sidebar-brand-icon rotate-n-15">
                    <i>
                        <FaChartBar size={'2.5rem'}/>
                    </i>
                </div>
                <div className="sidebar-brand-text mx-3">CRM<sup> WILMAR</sup></div>
            </Link>
            <li className="nav-item">
                <Link className="nav-link" to={'/customers'}>
                    <i><FaUserFriends size={'1.3rem'}/></i>
                    <span>Clientes</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/products'}>
                    <i><FaBoxes size={'1.3rem'}/></i>
                    <span>Productos</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/orders'}>
                    <i><FaShoppingCart size={'1.3rem'}/></i>
                    <span>Pedidos</span>
                </Link>
            </li>
        </ul>
    );
}
 
export default SidebarPage