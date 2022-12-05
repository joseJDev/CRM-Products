import { FaCartPlus } from 'react-icons/fa';
import Content from '../../layout/Content';

const Orders = () => {
    return (
        <>
            <Content title='Pedidos' iconAdd={<FaCartPlus size={'1.5rem'}/>}/>
        </>
    );
}
 
export default Orders;