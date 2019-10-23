import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Portfolio= (props) => {
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
      <ModalHeader toggle={toggle}>Portfolio</ModalHeader>
      <ModalBody>
        A site showcasing the projects I've done, encapsulating the brightest,
        most optimistic flower there is. A sunflower. Inspired by my favorite
        Spiderman movie
        Tech Used:  JavaScript, React, CSS, Reactstrap, and HTML.
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

export default Portfolio
