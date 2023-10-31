
import Axios from "axios";


const api = "http://127.0.0.1:8000/api";


export const loginApi = async(data: any) => {
    try {
        const result = await Axios.post(
            `${api}/login`, {
            password: data.Password,
            email: data.Email
            });
            console.log(result);
        return result.data;
    } catch (error) {
        return error;
    }



};
export const signupApi = async (data: any) => {
    try {
        const result = await Axios.post(
            `${api}/signup`, {
            username: data.Username,
            password: data.Password,
            email: data.Email
        }
        );
        return result.data;
    } catch (error) {
        return 'connection failed ' + error;
    }

};

const AllApi = () => {

}

export default AllApi;