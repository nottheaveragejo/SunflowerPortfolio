import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const BuublMaps = (props) => {
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
      <ModalHeader toggle={toggle}>BuublMaps</ModalHeader>
      <ModalBody>
        An app that allows users to find the most popular bubble teas based on
        their location, mode of transportation, and distance preferences.

        Tech Used:  Google Maps API, React, JavaScript, CSS.
      </ModalBody>
      <ModalFooter>
      <a href="#">	<Button color="info">Demo</Button></a>
      <a href="https://github.com/nottheaveragejo/booble"> 	<Button color="primary">Code</Button></a>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default BuublMaps
