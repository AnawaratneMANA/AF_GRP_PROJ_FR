import React, {useState, useEffect} from 'react'
import Register from '../Register/Register';
import { Form, Button, h1 } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {createUser} from "../../actions/users";

const Post = () => {

    const dispatch = useDispatch();

    //Methods comes here.
    const [userData, setUserData] = useState(
        {
            firstName: '',
            lastName: ''
        }
    );

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userData);
       dispatch(createUser(userData));
    }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>First Name: </Form.Label>
        <Form.Control type="text" placeholder="FirstName"

          value={userData.firstName}
          onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
          
        />
        <Form.Text

          className="text-muted"

        >
          We'll never share your email with anyone else.
            </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Last Name: </Form.Label>
        <Form.Control type="text" placeholder="LastName"
          value={userData.lastName}
          onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
        />
        <Form.Text

          className="text-muted"
        >
          We'll never share your email with anyone else.
            </Form.Text>

      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
          </Button>
    </Form>
  )
         
}

export default Post;