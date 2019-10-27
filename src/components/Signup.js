import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const Signup = () => {
  const history = useHistory();
  
  const [show, setShow] = useState(true);

  const handleSignup = () => setShow(false);
  const handleCancel = () => history.push('/');

  return (
    <>
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>UserName: <input type="text" /> <br/></p>
          <p>Email: <input type="email" /> <br/></p>
          <p>Password: <input type="password" /> <br/></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSignup}>
            Sign Up
          </Button>
          <Button variant="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;