import { useState } from 'react';
import axios from '../api/axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const LOGIN_API = '/authenticate';
type Props = {}

export default function AddPost({}: Props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [success, setSuccess] = useState(false);

  const userAuth = useAuth();

  const navigate = useNavigate();

  const handleNavigate = () => {
      navigate("/profile");
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const response = await axios.post('/blogs/add',
      {
        title: title,
        body: body,
        publishedDate: null,
        published: true,
        myUsers: {id: userAuth.userId},
      }
      );
    await new Promise(r => setTimeout(r, 100));
    setSuccess(true);
    
    
  }
  return (
    <div>
    {success ? <>{handleNavigate()}</> : 
    (<div onSubmit={handleSubmit} className='container'>
      <h1 className='text-center mx-auto mt-5'>Write New Post</h1>
      <Card className='m-5 p-2 w-50 mx-auto'>
      <Form className='m-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control 
          type="text" 
          id="title" 
          placeholder="Blog title"
          onChange={(e) => setTitle(e.target.value)}
          required/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Blog Text</Form.Label>
        <Form.Control 
          type="text"
          style={{height: '300px'}}
          id="body" 
          placeholder="Start writing here"
          onChange={(e) => setBody(e.target.value)}
          required/>
      </Form.Group>
      <div className='text-center'>
      <Button variant="primary" type="submit" >
        Post
      </Button>
      </div>
    </Form>
    </Card>
    </div>)}
    </div>
  )
}