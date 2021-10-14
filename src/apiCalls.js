import axios from "axios"

export const loginCall = async (userCredential, dispatch) => {
        dispatch({ type: "LOGIN_START" });
        try {
            // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            const res = await axios.post("https://aqueous-reef-25837.herokuapp.com/api/auth/login", userCredential);
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err })
        }
}