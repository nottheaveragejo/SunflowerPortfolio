import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../styles.css"

const Apple = (props) => {
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
      <ModalHeader toggle={toggle}>Apple Crumble</ModalHeader>
      <ModalBody>
        An augmented reality scavenger hunt that allows
        users to go on quests and earn badges in a role playing
        setting.

        Tech Used:  Vuforia, C#, Unity, PHP, MySQl.
      </ModalBody>
      <ModalFooter>
      <a href="https://www.youtube.com/watch?v=g3ibiI1-yuw&feature=youtu.be">	<Button color="info">Demo</Button></a>
      <a href="https://github.com/team-titans-1907/Apple-Crumble"> 	<Button color="primary">Code</Button></a>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default Apple
