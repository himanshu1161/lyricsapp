import React from 'react'
import { useState } from 'react'
import * as axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = (props) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const loggedin = "Login Successfull" ;
  const [loginStatus, setLoginStatus] = useState('')

  const login =  () =>{
    axios.post("http://localhost:3001/login",{
    username: username,
    passwords: password,}).then((response)=>{
     if(response.data.message) {
      setLoginStatus(response.data.message);
    }
    else{
      setLoginStatus(response.data[0].username,loggedin)
       navigate("/discover")
      // localStorage.setItem("username",response.data[0].username)
    }
    });
  };


  return (
    <div>
       <form class="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mt-[10rem]">
    <div class="mb-4">
      <label class="block text-slate-100 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" 
      onChange={(e)=>{setUsername(e.target.value)}}/>
    </div>
    <div class="mb-6">
      <label class="block text-slate-100 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
       onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button"
       onClick={login}>
        Login
      </button>
      <h1 className="text-slate-100">{loginStatus}</h1>
    </div>
  </form>
    </div>
  )
}

export default Signup
