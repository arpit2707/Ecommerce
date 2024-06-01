import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {firebaseURL} from "../utils/constants"

function ContactUs() {
  const name = useRef();
  const email = useRef();
  const phonenumber = useRef();

  const addContactDetails =async (contactDetails) => {
    try {

      const response=await  fetch(firebaseURL+"ecommerse.json",{
        method:'POST',
        body:JSON.stringify(contactDetails),
        headers:{
          "Content-Type":"application/json"
        }
      })

      if(response.ok){
        console.log("Successfully Added",response) 
        const data=await response.json();
        console.log(data)
      }
     
      
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = (e) => {
    try {
      e.preventDefault();
      const contactDetails = {
        name: name.current.value,
        email: email.current.value,
        phonenumber: phonenumber.current.value,
      };
      console.log(contactDetails);
      addContactDetails(contactDetails);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form className="p-4 m-5" onSubmit={onSubmitHandler}>
      <h1 className="metal-font d-flex justify-content-center">Contact Us</h1>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control ref={name} type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email Id:</Form.Label>
        <Form.Control ref={email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          ref={phonenumber}
          type="number"
          placeholder="Enter phonenumber"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactUs;
