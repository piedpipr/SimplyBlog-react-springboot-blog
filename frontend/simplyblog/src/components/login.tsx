import { useState } from 'react';
import axios from '../api/axios';

const LOGIN_API = '/authenticate';
type Props = {}

export default function Login({}: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const response = await axios.post(LOGIN_API,
      {
        userName: username,
        password: password,
      }
      );
    console.log(response.data.jwt);
    localStorage.setItem('token', response.data.jwt);
    

  }
  return (
    <div onSubmit={handleSubmit}>
      <form>
        <label htmlFor="username">Username</label>
        <input
        type="text"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        required/>
        <label htmlFor="password">Password</label>
        <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        required/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}