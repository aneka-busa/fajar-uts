import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ContactModal(props) {
  const [show, setShow] = useState(true);

  return (
    <Modal show={show} onClick={props.closeModal}>
      <Modal.Header>
        <Modal.Title className="mx-auto font-weight-bolder">
          Amna Abdallah
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>E-mail: amnaabdallah@gmail.com</h5>
        <h5>Tel: +216-20-332-155</h5>
        <h5>Address: St. 2 Mars 1934, 5111 Mahdia, Tunisa</h5>
        <p className="text-center mt-3">Arabe | French | English | German</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactModal;
