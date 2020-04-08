import apiCall from '../../apiCall'; 
// import create trip from action types
      
export const createTrip = (info) => async dispatch => {
   try{
   const token = localStorage.getItem('token')
   const res = await apiCall('trip', 'post', info, token);
   return dispatch({ type: 'CREATE_TRIP', payload: res.data});
   }
   catch(error){
       return dispatch({type: 'CREATE_TRIP,_ERROR', payload: error.response.data})
   }
}
