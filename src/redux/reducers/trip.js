import {CREATE_TRIP, CREATE_TRIP_ERROR } from '../actions/actionTypes'
 
const initialState = {
   trips: null,
   error: null,
}
 
const trips = (state = initialState, action) => {
   switch(action.type){
       case CREATE_TRIP:
           return {
               ...state, trips: action.payload
           }
       case CREATE_TRIP_ERROR:
           return{
                   ...state, error: action.payload
               }
       default:
           return state
   }
}
 
export default trips;
