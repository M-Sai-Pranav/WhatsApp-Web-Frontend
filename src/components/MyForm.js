import React from "react";
import { useForm } from "react-hook-form";
import { Container, FormGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const handleRegistration = (data) => { 
    console.log("dataaaaaaaa------->",data);
    axios.post(`http://localhost:4000/form`, {
        email: data.email,
        name: data.name, //chanage
        password: data.password,
      }).then((result)=>{
        if(result){
          console.log("after registration --> ", result)
          navigate('/')
        }
        
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  const login = () => {
    
  }
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  return (
    <Container className='mt-5' style={{width: "50%"}}>  
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div style={{display: "flex", gap:"10px"}} >
        <h6>Name</h6>
        <input name="name" type="text" {...register('name', registerOptions.name) }/>
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>
      <div style={{display: "flex", gap:"10px"}}>
        <h6>Email</h6>
        <input
          type="email"
          name="email"
          {...register('email', registerOptions.email)}
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div style={{display: "flex", gap:"10px"}}>
        <h6>Password</h6>
        <input
          type="password"
          name="password"
          {...register('password', registerOptions.password)}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>
      <button onClick={login}>Submit</button>
    </form>


   </Container> 
  );
  
};

export default RegisterForm;