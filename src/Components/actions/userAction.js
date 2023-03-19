import { clearError, userLoading, userSuccess, userFail } from '../../reducers/userReducer'
import axios from 'axios'
export const loginUser = (loginData) => async(dispatch) => {
    try {
        dispatch(userLoading());
        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };
        const { data } = await axios.post('/login', loginData, config)
        dispatch(userSuccess(data.user))
    } catch (error) {
        dispatch(userFail(error.response.data.error))
    }
}

export const loadUser = () => async(dispatch) => {
    try {
        dispatch(userLoading())
        const { data } = await axios.get('/me', { withCredentials: true })
        console.log(data);
        dispatch(userSuccess(data.user))
    } catch (error) {
        dispatch(userFail(error.response.data.error))
    }
}
export const signup = (userData) => async(dispatch) => {
    try {
        dispatch(userLoading())
        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };
        const { data } = await axios.post('/signup', userData, config)
        dispatch(userSuccess(data.user))
    } catch (error) {
        dispatch(userFail(error.response.data.error))
    }
}
export const CLEAR_ERROR = () => async(dispatch) => {
    dispatch(clearError())
}