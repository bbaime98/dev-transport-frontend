import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from "react-redux";
import { deleteTrips } from "../redux/actions/tripActions"
 
const TripCards = ({id,location, destination, BusToArrive, BusArrivalTime, dispatch, trips}) => {
  const [show, setShow] = useState(false);
  async function  cancelTrip() {
    await dispatch(deleteTrips(id, trips))
    setShow(false)
  }
function hidePop() {
  setShow(false)
}
  return(
    <div key ={id} className="signup-form text-center mt-5 bg-form" onSubmit={(e) => e.preventDefault()}>
    <form className="text-center border border-light p-3 shadow-lg ">
  <p className="h4 mb-4 text-info">Trip</p>
        <label className="float-left text-info">Location</label>
        <p className="text-dark text-center">{location}</p>
        <label className="float-left text-info">Destination</label>
        <p className="text-dark text-center">{destination}</p>
        <label className="float-left text-info">Bus No</label>
        <p className="text-dark text-center">{BusToArrive}</p>
        <label className="float-left text-info">Waiting time</label>
        <p className="text-dark text-center">{BusArrivalTime}</p>
        <button className="btn btn-danger btn-block" onClick = {() => setShow(true)}>Cancel</button>
    </form>
    <div className='mt-5'>
      <Modal size={'sm'} animation={true} className ='mt-5 float-right' show={show} >
        <Modal.Header className='text-danger'> Attetion! </Modal.Header>
        <Modal.Body>Are sure you want to cancel this trip?</Modal.Body>
        <Modal.Footer>
            <Button onClick = {hidePop} className='bg-info'>No</Button>
            <Button className='bg-danger' onClick={cancelTrip}>Yes</Button>
        </Modal.Footer>
      </Modal>
      </div>
  </div>
  )
}
const MapStateToProps = ({ trips, user }) => {
  return {
    trips: trips.trips,
    user
  }
 }
export default connect(MapStateToProps)(TripCards);
