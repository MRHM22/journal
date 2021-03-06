
import { types } from "../types/types"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch( login(1,'Martin'))
        }, 3500);
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}
