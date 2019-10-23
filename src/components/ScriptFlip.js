import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ScriptFlip = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal,setModal] = React.useState(false);

  const toggle = () => setModal(!modal);
  return(
    <div>
    <Button color="danger" onClick={toggle}>{buttonLabel}Read More</Button>
    <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
      toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>ScriptFlip</ModalHeader>
      <ModalBody>
        A writing platform where users can create accounts and receive feeback
        on their writing, as well as critique other user's work. Seeded data
        is taken from excerpts of my novel, Overture.

        Tech Used:  MongoDB, Express, Node, Pug/Jade, Material UI.
      </ModalBody>
      <ModalFooter>
      <a href="#">	<Button color="info">Demo</Button></a>
      <a href="https://github.com/nottheaveragejo/scriptflipper"> 	<Button color="primary">Code</Button></a>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default ScriptFlip
