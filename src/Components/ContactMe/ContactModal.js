import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ContactModal(props) {
  const [show] = useState(true);

  return (
    <Modal show={show} onClick={props.closeModal}>
      <Modal.Header>
        <Modal.Title className="mx-auto font-weight-bolder">
          FAJAR ALDYANSYAH SIDIK
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>E-mail: fajaraldi6110@gmail.com</h5>
        <h5>Tlp: +6295 3973-20823</h5>
        <h5>Address: Banten-Indonesia</h5>
        <p className="text-center mt-3">Arabic | Indonesia | English</p>
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
