import React, { useEffect } from 'react';
import './styles/components.css'
import { viewAllTrips } from '../redux/actions/tripActions';
import { connect } from 'react-redux';
import TripCards from './tripCards';
 
const AllTripComponent = (props) => {
 useEffect(()=>{
   let save = true
  const handleOnClick = async () => {
    if(save) await props.viewAllTrips();
   }
      handleOnClick()
    return () => save = false
 },[])
 const tripArr = props.trips.trips.map( num => (
  <TripCards location={num.location}
  destination={num.destination }
   BusToArrive={num.busToArrive} 
   BusArrivalTime ={num.BusArrivalTime}
   key={num.id}
   id={num.tripId}
   /> ))
 return props.trips.loading ? (<p>loading</p>) : (
    <div className="signup-form d-inline p-2 text-center mt-3 bg-form">
       {props.trips.trips.length === 0 ? (<p className= "text-center text-dark mt-5" >No trip found! Create a trip...</p> ): tripArr}
   </div>
 )
}
const MapStateToProps = ({ trips, user }) => {
  return {
    trips: trips,
    user
  }
 }
 export default connect(MapStateToProps, { viewAllTrips })(AllTripComponent);