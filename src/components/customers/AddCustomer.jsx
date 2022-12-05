import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Spinner } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

const AddCustomer = ({ showModal, setShowModal }) => {
    const isLoading = false;

    const handleSubmit = e => {
        e.preventDefault();
        
        // Validar Campos

        // Guardar 

        // Redirigir
    }

    return (
        <Modal show={showModal} onHide={setShowModal}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Cliente</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre Completo</Form.Label>
                            <Form.Control
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Telefóno</Form.Label>
                            <Form.Control
                                type="text"
                            />
                        </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={setShowModal}>
                        <FaTimes />
                    </Button>
                    <Button type='submit' variant="success">
                        {isLoading ? (
                            <Spinner animation="border" size='sm'/>
                        ) : "Guardar"}
                    </Button>
                </Modal.Footer>
            </Form>
      </Modal>
    );
}
 
export default AddCustomer;