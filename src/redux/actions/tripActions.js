import apiCall from '../../apiCall'; 
      
export const createTrip = (info) => async dispatch => {
   try{
   const token = localStorage.getItem('token')
   const res = await apiCall('trip', 'post', info, token);
   dispatch({ type: 'CREATE_TRIP', payload: res.data.data});
    return res;
   }
   catch(error){
       return dispatch({type: 'CREATE_TRIP_ERROR', payload: error.response.data.message})
   }
}
export const viewAllTrips = (trips) => async dispatch => {
    try{
    const token = localStorage.getItem('token')
    dispatch({type:'LOADING'});
    const res = await apiCall('all', 'get',trips, token);
    return dispatch({ type: 'VIEW_TRIPS', payload: res.data});
    }
    catch(error){
        return dispatch({type: 'VIEW_TRIPS_ERROR', payload: error.response.message})
    }
 }
 export const deleteTrips = (tripId,trips) => async dispatch => {
     try{
     const token = localStorage.getItem('token')
     await apiCall(`trip/${tripId}`, 'delete', {}, token);
     dispatch(viewAllTrips())
     }
     catch(error){
         return dispatch({type: 'DELETE_TRIPS_ERROR', payload: error.response.data.response.message})
     }
 }
