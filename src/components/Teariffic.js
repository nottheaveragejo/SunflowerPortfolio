import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Teariffic = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal,setModal] = React.useState(false);

  const toggle = () => setModal(!modal);
return (
  <div>
									<Button color="danger" onClick={toggle}>{buttonLabel}Read More</Button>
									<Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
										toggle={toggle} className={className}>
										<ModalHeader toggle={toggle}>Apple Crumble</ModalHeader>
										<ModalBody>
										Created an e commerce site where users can buy as many
                    bubble tea as they desire and checkout either as a guest or
                    login to their account. Implemented credit card payment using
                    Stripe.
                    Tech Used: Stripe, CSS, MaterialUI, HTML, JavaScript,
                    React, Redux, Node, Express, Sequelize.
										</ModalBody>
										<ModalFooter>
										<a href="https://teariffic.herokuapp.com/">
										<Button color="info">Demo</Button></a>
										<a href="https://github.com/Snapes-on-a-plane/grace-shopper">
										<Button color="primary">Code</Button>
										</a>
											<Button color="secondary" onClick={toggle}>Cancel</Button>
										</ModalFooter>
									</Modal>
								</div>
)
}
export default Teariffic;
