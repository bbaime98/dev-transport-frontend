import React, { useEffect, useState } from 'react';
import './styles/components.css';
import { signUp } from '../redux/actions/auth';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import history from './history';
import bus from '../bus2.png';

const SignupComponent = (props) => {

  const { register, handleSubmit, errors } = useForm();
  const token = localStorage.getItem('token')
  token && history.push('/dashboard');

  const onSubmit = async data => {
    const output = await props.signUp(data);
    if (output.payload.status === 201) {
      history.push('/trip');
    }
    if (props.user.error) {
      setEmailError(props.user.error.message)
    }
  }
  const [emailError, setEmailError] = useState(null)
  // useEffect(() => {
  //   localStorage.removeItem('token')
  // }, [])
  // useEffect(() => {
  //   if (props.user.error) {
  //     setEmailError(props.user.error.message)
  //   }
  // }, [props.user])

  return (
    <div className="container">
      <div className='row'> 
      <div className='col-sm-6'> 
        <p className="text-info big-text">Welcome to DevTransport!</p>
        <p className='text-center border shadow short-text rounded'>The smartest transport services </p>
        <img src={bus} className='img-fluid' alt='car' />
     </div>
     <div className='col-sm-6'> 
    <div className="signup-form mr-5 mt-5 bg-form">
      <p className="red"> {emailError ? 'Email already exist' : ''}</p>
      <form className="text-center border border-light p-3 shadow-lg " onSubmit={handleSubmit(onSubmit)}>

        <p className="h4 mb-4 text-info">SIGN UP</p>
        <input ref={register({ required: 'First name is required' })} name="firstName" type="text" className="form-control mb-1" placeholder="First name..." />
        {errors.firstName && <p className="red mb-0 ">{errors.firstName.message}</p>}
        <input ref={register({ required: 'Last name is required' })} name="lastName" type="text" className="form-control mb-1" placeholder="Last name..." />
        {errors.lastName && <p className="red mb-0">{errors.lastName.message}</p>}
        <input ref={register({ required: 'Email is required' })} name="email" type="email" className="form-control mb-1" placeholder="E-mail.." />
        {errors.email && <p className="red mb-0">{errors.email.message}</p>}
        <input ref={register({ required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 character' } })}
          name="password" type="password" className="form-control mb-1" placeholder="password..." />

        {errors.password && <p className="red mb-0">{errors.password.message}</p>}

        <label className="float-left text-info">Status</label>
        <select ref={register({ required: true })} name="status" className="browser-default custom-select mb-4">
          <option disabled>Choose option</option>
          <option >Passenger</option>
          <option >Driver</option>
        </select>
        <button className="btn btn-info btn-block" type="submit">Sign up
    </button>
      </form>
      </div>
    </div>
    </div>
    </div>
  )
}
const MapStateToProps = ({ user }) => {
  return {
    user
  }
}
export default connect(MapStateToProps, { signUp })(SignupComponent);
