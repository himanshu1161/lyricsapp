import React, { useState } from 'react'
import * as axios from 'axios';

const Login = () => {
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  
 

  const register =  () =>{
    axios.post("http://localhost:3001/register",{
    username: usernameReg,
    passwords: passwordReg,}).then((response)=>{
      console.log(response);
    });
  };
  return (
    <div>
 <div class="w-full max-w-xs ml-[5rem] mt-[10rem]">
  <form class="bg-transparent shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-[40rem]">
    <div class="mb-4">
      <label class="block text-slate-100 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" 
      onChange={(e)=>{setUsernameReg(e.target.value)}}/>
    </div>
    <div class="mb-6">
      <label class="block text-slate-100 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
       onChange={(e)=>{setPasswordReg(e.target.value)}}/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button"
      onClick={register}>
        Signup
      </button>
     
    </div>
  </form>
</div>

    </div>
  )
}

export default Login
