import {CREATE_TRIP_ERROR, CREATE_TRIP } from '../actions/actionTypes'
 
const initialState = {
    loading: false,
   trips: [],
   error: "",
}
 
const trips = (state = initialState, action) => {
   switch(action.type){
       case "LOADING":
           return {
            loading: true, trips: [], error: ""
           }
           case CREATE_TRIP:
            const newArr = [...state.trips]
            newArr.push(action.payload)
            return {
                ...state, error: "", trips: newArr
            }
        case CREATE_TRIP_ERROR:
            return{
                   error: action.payload, loading: false, trips: []
                }
        case 'VIEW_TRIPS':
            return {error: "", trips: action.payload.data, loading: false }
        default:
            return state
   }
}
 
export default trips;
