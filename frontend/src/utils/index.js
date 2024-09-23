import { jwtDecode } from "jwt-decode";

export const token_decode = (token) => {
    if (token) {
        const decode_data = jwtDecode(token)
        const exp_time = new Date(decode_data.exp * 1000)
        //console.log(decode_data);

        if (new Date() > exp_time) {
            localStorage.removeItem("whiteboard_token")
            return '';
        } else {
            return decode_data
        }
    } else {
        return '';
    }
}