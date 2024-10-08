import axios from 'axios';



export async function signup (url, username, password){
    try{
        const response = await axios.post(url, {
        userName: username,
        password: password,
      }, {
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    }
    catch (error) {
        console.error(error);
    }
};

export async function login (url,username, password){

    try {
        console.log("i am in login");
        const response = await axios.post(url, {
            userName: username,
            password: password,
            
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
       
        return response.data;

    } catch (error) {
        console.error(error);   
    }
};

