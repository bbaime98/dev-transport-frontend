import apiCall from '../../apiCall';
import { SIGNUP_ERROR, SIGNUP_USER_SUCCESS } from './actionTypes';

export const signUp = (user) => async dispatch => {
    try{
    const res = await apiCall('auth/register', 'post', user);
    localStorage.setItem('token', res.data.token)
    return dispatch({ type: SIGNUP_USER_SUCCESS, payload: res.data});
    }
    catch(error){
        return dispatch({type: SIGNUP_ERROR , payload: error.response.data})
    }
}
