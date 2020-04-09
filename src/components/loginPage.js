import React, { useEffect } from 'react';
import './styles/components.css';
import { login } from '../redux/actions/auth';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import history from './history';
import { toast } from "react-toastify";
import bus from '../bus2.png';

const LoginComponent = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const token = localStorage.getItem('token')
    token && history.push('/dashboard');

    const onSubmit = async data => {
        const output = await props.login(data);
        if (output.payload.status === 200) {
            history.push('/dashboard');
        }
        if (output.payload.status === 401) {
            
            toast.error("Please enter valid credentials",{
                autoClose: 9000,
                position: "bottom-center"
              });
        }
    }
    // const [emailError, setEmailError] = useState(null)
    // useEffect(() => {
    //     if (props.user.error) {
            
    //         toast.error("Please enter valid credentials",{
    //             autoClose: 9000,
    //             position: "bottom-center"
    //           });
    //     }
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
            {/* <p className="red"> {emailError ? 'Please valid credetial ' : ''}</p> */}
            <form className="text-center border border-light p-3 shadow-lg " onSubmit={handleSubmit(onSubmit)}>

                <p className="h4 mb-4 text-info">LOGIN</p>
                <input ref={register({ required: 'Email is required' })} name="email" type="email" className="form-control mb-4" placeholder="E-mail.." />
                {errors.email && <p className="red mb-0">{errors.email.message}</p>}
                
                <input ref={register({ required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 character' } })}
                    name="password" type="password" className="form-control mb-4" placeholder="password..." />

                {errors.password && <p className="red mb-0">{errors.password.message}</p>}
                <button className="btn btn-info btn-block" type="submit">Login
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
export default connect(MapStateToProps, { login })(LoginComponent);
