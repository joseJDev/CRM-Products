import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Spinner } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

const AddProduct = ({ showModal, setShowModal }) => {
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
                <Modal.Title>Agregar Producto</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Código producto</Form.Label>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre producto</Form.Label>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="number"
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
 
export default AddProduct;