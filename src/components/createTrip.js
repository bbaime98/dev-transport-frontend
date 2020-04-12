import React, { useEffect, useState } from 'react';
import './styles/components.css'
import { createTrip } from '../redux/actions/tripActions';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import history from './history';
 
const TripComponent = (props) => {
 const { register, handleSubmit } = useForm();
 const onSubmit = async data => {
  const output =  await props.createTrip(data);
  if(output.status === 201) return history.push('/dashboard');
 }
 const [tripError, setTripError] = useState('')
 
 useEffect(() => {
   if (props.trips.error) {
     setTripError(props.trips.error.message)
   }
 }, [props.trips])
 
 return (
   <div className="signup-form text-center mt-5 bg-form">
     <p className="red"> {tripError ? 'Trip Already exist' : ''}</p>
     <form className="text-center border border-light p-3 shadow-lg " onSubmit={handleSubmit(onSubmit)}>
 
       <p className="h4 mb-4 text-info">Create Trip</p>
 
       <label className="float-left text-info">Location</label>
       <select ref={register({ required: true })} name="location" className="browser-default custom-select mb-4">
         <option disabled>Choose option</option>
         <option >stadium</option>
         <option >gisimenti</option>
       </select>
       <label className="float-left text-info">Destination</label>
       <select ref={register({ required: true })} name="destination" className="browser-default custom-select mb-4">
         <option disabled>Choose option</option>
         <option >Remera</option>
         <option >Kimironko</option>
       </select>
       <button className="btn btn-info btn-block" type="submit">Create
   </button>
     </form>
   </div>
 )
}
const MapStateToProps = ({ trips, user }) => {
 return {
   trips,
   user
 }
}

export default connect(MapStateToProps, { createTrip })(TripComponent);