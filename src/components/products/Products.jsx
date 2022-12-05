import { useState } from 'react';

import Content from '../../layout/Content';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Spinner } from "react-bootstrap";
import { FaPen, FaTimesCircle, FaRegPlusSquare } from 'react-icons/fa';
import AddProduct from './AddProduct';


const Products = () => {
    const isLoading = false;
    const [showModal, setShowModal] = useState(false);

    const handleChangeShowModal = () => {
        setShowModal(showModal ? false : true);
    }

    return (
        <>
            <Content 
                title='Productos' 
                iconAdd={<FaRegPlusSquare size={'1.5rem'}/>}
                handleOnClick={handleChangeShowModal}
                />

            <div className="row">
                <div className="col-12">
                    {isLoading ? (
                        <div className="text-center mt-5">
                            <Spinner animation="border" variant="primary" size="lg"/>
                        </div>
                    ) : (
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>
                                        <Button variant="warning" size="sm">
                                            <FaPen />
                                        </Button>
                                        <Button variant="danger" size="sm">
                                            <FaTimesCircle />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>
                                        <Button variant="warning" size="sm">
                                            <FaPen />
                                        </Button>
                                        <Button variant="danger" size="sm">
                                            <FaTimesCircle />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>
                                        <Button variant="warning" size="sm">
                                            <FaPen />
                                        </Button>
                                        <Button variant="danger" size="sm">
                                            <FaTimesCircle />
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    )}
                </div>
            </div>

            <AddProduct showModal={showModal} setShowModal={handleChangeShowModal} />
        </>
    );
}
 
export default Products;