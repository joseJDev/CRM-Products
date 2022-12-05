import { useState } from "react";

import Content from "../../layout/Content";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaUserEdit, FaUserTimes, FaUserPlus } from 'react-icons/fa';
import { Spinner } from "react-bootstrap";

import AddCustomer from "./AddCustomer";

const Customers = () => {
    const isLoading = false;
    const [showModal, setShowModal] = useState(false);

    const handleChangeShowModal = () => {
        setShowModal(showModal ? false : true);
    }

    return (
        <>
            <Content 
                title="Clientes" 
                iconAdd={<FaUserPlus size={'1.5rem'}/>} 
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
                                    <th>Nombre Completo</th>
                                    <th>Email</th>
                                    <th>Dirección</th>
                                    <th>Telefóno</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>
                                        <Button variant="warning" size="sm">
                                            <FaUserEdit />
                                        </Button>
                                        <Button variant="danger" size="sm">
                                            <FaUserTimes />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>   
                                    <td>
                                        <Button variant="warning" size="sm">
                                            <FaUserEdit />
                                        </Button>
                                        <Button variant="danger" size="sm">
                                            <FaUserTimes />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>
                                        <Button variant="warning" size="sm">
                                            <FaUserEdit />
                                        </Button>
                                        <Button variant="danger" size="sm">
                                            <FaUserTimes />
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    )}
                </div>
            </div>

            <AddCustomer showModal={showModal} setShowModal={handleChangeShowModal} />
        </>
    );
}
 
export default Customers;