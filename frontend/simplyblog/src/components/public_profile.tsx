import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

const PUBLIC_PROFILE_API = '/user/';
const PUBLIC_BLOGS_API = '/blogs/';
const usernameDummy = 'userrrr';

type Props = {
}

export default function PublicProfile({}: Props) {
  const [userdata, setUserdata] = useState({
    id:'',
    userName:'',
    email:'',
    bio:'',
    roles:'',
  });
  const [blogsdata, setBlogsdata] = useState(
    [
      {
      id:'',
      title:'',
      body:'',
      publishedDate:null,
      published:true
    }
    ]);

  let userName = useParams().userName;

  useEffect(()=> {
    const getProfile = async() => {
    const response = await axios.get(PUBLIC_PROFILE_API + userName);
    setUserdata(response.data);
    console.log(response.data);
  }
  getProfile();
  },[]);

  useEffect(()=> {
    const getBlogs = async() => {
    const response = await axios.get(PUBLIC_BLOGS_API + userName);
    // setBlogsdata(response.data);
    setBlogsdata(response.data);
    console.log(response.data);
  }
  getBlogs();
  },[]);



  return (
    <Container>
      <div className="d-flex flex-lg-row flex-md-row flex-column p-4">
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://avatars.dicebear.com/api/avataaars/${userName}.svg`}/>
      <Card.Body>
        <Card.Title>{userdata.userName}</Card.Title>
        <Card.Text>
          {userdata.bio}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email</ListGroup.Item>
        <ListGroup.Item>Occupation</ListGroup.Item>
        <ListGroup.Item>Location</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Twitter</Card.Link>
        <Card.Link href="#">LinkedIn</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="container d-flex flex-wrap">
      <div className=" align-self-center align-items-center align-content-center">
        <h1 className="text-center pb-2">Recent Posts</h1>
      </div>
    {blogsdata.map((blog) => 
      <div>
        <Card
          bg='light'
          key={blog.id}
          text='dark'
          style={{ width: '50vw'}}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>
              {blog.body}
              <br></br>
              {blog.publishedDate}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
)}
    </div>
    </div>
    </Container>
    )
}