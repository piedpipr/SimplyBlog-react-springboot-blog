import { useState, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';
import axios from '../api/axios';

const REGISTER_API = '/register';
const CHECK_USERNAME_API = '/usernamecheck';
type Props = {}

export default function Register({}: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errrormsg, setErrormsg] = useState('');

  useEffect(() => {
    if(username && username.length > 4) {
      console.log("username :"+username);
      const CheckUsername = async () => {
          try {
            const response = await axios.get(CHECK_USERNAME_API+'/'+username);
            // console.log("response:");
            // console.log(response.data);
            if(response.data){
              setErrormsg('Username alredy exists..');
              setIsError(true);
            } else {
              setErrormsg('Username available..');
              setIsError(false);
            }
            
          } catch (error:any) {
            setIsError(true);
            // console.log("error");
            // console.log(error);
            // console.log("specific error :"+error.response.data.message)
            // setErrormsg(error.response.data.message);
            setErrormsg('Server Error');
          }
        }
      CheckUsername();
      } else setErrormsg('');
    },[ username ]);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if(!isError){
      const response = await axios.post(REGISTER_API, 
        {
        userName: username,
        password: password,
        roles: "ROLE_USER",
        active: true,
        }
      );
      console.log("response:");
      console.log(response.data);
      // setSuccess(true);
    }
    setSuccess(!success)
    console.log('Data Submitted')};
    
  return (
    <div className='container'>
    {success ? (<div className='text-center'><h2>Success</h2><h3><NavLink to="/login">Go to Login</NavLink></h3></div>) :
    (<div>
      <h1 className='text-center mx-auto mt-5'>Register/Sign Up</h1>
      <div onSubmit={handleSubmit}>
      <Card className='m-5 p-2 w-50 mx-auto'>
      <div className='text-center mx-auto'>
      {(errrormsg && errrormsg==="Username available..") &&
        (<div className='alert alert-success p-0 mb-0 border-0'>
        <p aria-live="assertive">{errrormsg}</p>
        </div>)}
        {(errrormsg && (errrormsg==="Username alredy exists.." || errrormsg==="Server Error")) &&
        (<div className='alert alert-danger p-0 mb-0 border-0'>
        <p aria-live="assertive">{errrormsg}</p>
      </div>)}
      </div>
      <Form className='m-5 mt-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Username (min 5 characters)"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e:any) => setUsername(e.target.value)}
          required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password"
          id="password"
          onChange={(e:any) => setPassword(e.target.value)}
          required />
      </Form.Group>
      <div className='text-center'>
      <Button variant="primary" type="submit" disabled={isError} >
        Register
      </Button>
      <Form.Text className="text-muted">
          <br />Already have a account! go to <Link to='/login'>Login</Link>
        </Form.Text>
      </div>
    </Form>
    </Card>
    </div>


      {/* <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
          <label htmlFor="username">Username:</label>
          <input 
            type="text"
            placeholder="Username (min 5 characters)"
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
          <button type="submit" disabled={isError} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Register</button>
      </form> */}
    </div>)}
    </div>
  )
}