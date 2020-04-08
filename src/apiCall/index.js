import axios from 'axios';

const apiCall = (url, method, body={}, token = '') => axios({
    method,
    url: `/api/v1/${url}`,
    data: body,
    headers: {
        token
    },
})
export default apiCall;
