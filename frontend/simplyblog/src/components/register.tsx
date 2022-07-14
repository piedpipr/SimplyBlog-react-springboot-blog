import { useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import axios from '../api/axios';

const REGISTER_API = '/register';
const CHECK_USERNAME_API = '/usernamecheck';
type Props = {}

export default function Register({}: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errrormsg, setErrormsg] = useState('');

  useEffect(() => {
    if(username){
      console.log("username :"+username);
      const CheckUsername = async () => {
          try {
            const response = await axios.get(CHECK_USERNAME_API+'/'+username);
            console.log("response:");
            console.log(response.data);
            response.data?setErrormsg('Username alredy exists..'):setErrormsg('Username available..');
            
          } catch (error:any) {
            setError(true);
            console.log("error");
            console.log(error);
            console.log("specific error :"+error.response.data.message)
            // setErrormsg(error.response.data.message);
            setErrormsg('Server Error');
          }
        }
      CheckUsername();
      } else setErrormsg('');
    },[ username ]);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setSuccess(!success)
    console.log('Data Submitted')};
    
  return (
    <>
    {success ? (<div><h2>Success</h2><h3><NavLink to="/login">Go to Login</NavLink></h3></div>) :
    (<div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
        <h1>Register/Sign Up</h1>
        <p aria-live="assertive">{errrormsg? errrormsg:''}</p>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            <label htmlFor="username">Username:</label>
            <input 
              type="text"
              placeholder="Username"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e:any) => setUsername(e.target.value)}
              required/>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              placeholder="Password"
              id="password"
              onChange={(e:any) => setPassword(e.target.value)}
              required/>  
            <button type="submit" >Register</button>
        </form>
    </div>)}
    </>
  )
}