import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AOPAI = (props) => {
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
      <ModalHeader toggle={toggle}>Adventures of Pan and Ice</ModalHeader>
      <ModalBody>
        A blog documenting my life in my 20's as I switch careers, find apartments,
        and try to sort my life out.

        Tech Used:  Gatsby, JavaScript, React, CSS.
      </ModalBody>
      <ModalFooter>
      <a href="https://unruffled-mccarthy-d11a25.netlify.com/">	<Button color="info">Demo</Button></a>
      <a href="https://github.com/nottheaveragejo/PanAdventures"> 	<Button color="primary">Code</Button></a>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default AOPAI
