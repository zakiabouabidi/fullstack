import axios from 'axios'

export const signUp  = (user, callback)=>{
    axios.post('http://localhost:4000/users/signup',user)
    .then((message)=> callback(message))
    .catch((err)=> callback(err)); 
}

export const login  = (user, callback)=>{
    axios.post('http://localhost:4000/users/login',user)
    .then( (resp)=> {
        callback(null,resp)
    })
    .catch((err)=> callback(err));
}