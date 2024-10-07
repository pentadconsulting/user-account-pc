import axios from 'axios';



export async function signup (url, username, password){
    alert("i am in signup page");
    try {
        console.log("i am in sign up");
        const response = await axios.post(url, {
            userName: username,
            password: password,
            
        });
        
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export async function login (url,username, password){
    alert("i am in login page");

    try {
        console.log("i am in login");
        const response = await axios.post(url, {
            userName: username,
            password: password,
            
        });
        return response.data;

    } catch (error) {
        console.error(error);   
    }
};

