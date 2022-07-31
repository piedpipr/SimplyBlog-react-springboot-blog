import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../api/axios';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Container } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import { ConnectionsStatusTypes } from '../types/api-types';

const PUBLIC_PROFILE_API = '/user/';
const PUBLIC_BLOGS_API = '/blogs/';
const CONNECTION_CHECK_API = 'user/connections/status';

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
    const [connectionStatus, setConnectionsStatus] = useState<ConnectionsStatusTypes>();
    const [statusUpadated, setStatusUpdated] = useState(false);

  let userName = useParams().userName;
  let userAuth = useAuth();

  useEffect(()=> {
    const getProfile = async() => {
    const response = await axios.get(PUBLIC_PROFILE_API + userName);
    setUserdata(response.data);
    // console.log(response.data);
  }
  getProfile();
  },[]);

  useEffect(()=> {
    const getBlogs = async() => {
    const response = await axios.get(PUBLIC_BLOGS_API + userName);
    // setBlogsdata(response.data);
    setBlogsdata(response.data);
    // console.log(response.data);
  }
  getBlogs();
  },[]);

  useEffect(()=>{
    const getConnectionStatus = async() => {
      const response = await axios.post(CONNECTION_CHECK_API,
        {
          receiver:userName,
          sender:userAuth.username
      }
      );
      console.log(userName, userAuth.username);
      setConnectionsStatus(response.data);
    }
    getConnectionStatus();
  },[userName, userAuth.username, statusUpadated]);

  const handleConnectionsStatus = async(status: string) => {
    if(status==='add'){
      await axios.post('/user/connections/add',
        {
          receiver: {id: userdata.id},
          sender: {id: userAuth.userId},
          following: 1,
          requested: 1,
          accepted: 0
      }
      );
      setStatusUpdated(!statusUpadated);
    }
    if(status==='follow'){
      if(connectionStatus?.accepted===true){
        await axios.get('/user/connections/remove/'+connectionStatus?.id);
        await axios.post('/user/connections/add',
          {
            receiver: {id: userdata.id},
            sender: {id: userAuth.userId},
            following: 1,
            requested: 0,
            accepted: 1
        }
        );
        setStatusUpdated(!statusUpadated);
      } else if(connectionStatus?.requested===true){
        await axios.get('/user/connections/remove/'+connectionStatus?.id);
        await axios.post('/user/connections/add',
          {
            receiver: {id: userdata.id},
            sender: {id: userAuth.userId},
            following: 1,
            requested: 1,
            accepted: 0
        }
        );
        setStatusUpdated(!statusUpadated);
      } else {
        if(connectionStatus?.id){
          await axios.get('/user/connections/remove/'+connectionStatus?.id);
          setStatusUpdated(!statusUpadated);
        } else {
            await axios.post('/user/connections/add',
              {
                receiver: {id: userdata.id},
                sender: {id: userAuth.userId},
                following: 1,
                requested: 0,
                accepted: 0
            }
        );
        setStatusUpdated(!statusUpadated);
      }
      }
    }
    if(status==='remove'){
      await axios.get('/user/connections/remove/'+connectionStatus?.id);
      setStatusUpdated(!statusUpadated);
    }
    if(status==='unfollow'){
      if(connectionStatus?.accepted===true){
        await axios.get('/user/connections/remove/'+connectionStatus?.id);
        await axios.post('/user/connections/add',
          {
            receiver: {id: userdata.id},
            sender: {id: userAuth.userId},
            following: 0,
            requested: 0,
            accepted: 1
        }
        );
        setStatusUpdated(!statusUpadated);
      } else if(connectionStatus?.requested===true) {
        await axios.get('/user/connections/remove/'+connectionStatus?.id);
        await axios.post('/user/connections/add',
          {
            receiver: {id: userdata.id},
            sender: {id: userAuth.userId},
            following: 0,
            requested: 1,
            accepted: 0
        }
        );
        setStatusUpdated(!statusUpadated);
      } else {
        await axios.get('/user/connections/remove/'+connectionStatus?.id);
        setStatusUpdated(!statusUpadated);
      }
      
    }
  }


  return (
    <Container>
      <div className="d-flex flex-lg-row flex-md-row flex-column p-4">
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://avatars.dicebear.com/api/avataaars/${userName}.svg`}/>
      <Card.Body>
        { userAuth.isAuthenticated && connectionStatus?.sender?.userName === userAuth.username &&
        <div className='text-center'>
          { (connectionStatus?.requested===false && connectionStatus?.accepted===false) && <Button onClick={()=> handleConnectionsStatus('add')} variant="primary" className='me-2'>Add</Button> }
          { connectionStatus?.requested && <Button onClick={()=> handleConnectionsStatus('remove')} variant="primary" className='me-2'>Requested</Button> }
          { connectionStatus?.accepted && <Button onClick={()=> handleConnectionsStatus('remove')} variant="primary" className='me-2'>Remove</Button> }
          { connectionStatus?.following && <Button onClick={()=> handleConnectionsStatus('unfollow')} variant="primary">Unfollow</Button> }
          { (connectionStatus?.following===false) && <Button onClick={()=> handleConnectionsStatus('follow')} variant="primary">Follow</Button> }
        </div>
        }
        {(userAuth.isAuthenticated && !connectionStatus && (userAuth.username!==userName)) &&
        <div className='text-center'>
          <Button onClick={()=> handleConnectionsStatus('add')} variant="primary" className='me-2'>Add</Button>
          <Button onClick={()=> handleConnectionsStatus('follow')} variant="primary">Follow</Button>
        </div>
        }
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
      <>
        <Link to={`/blog/${blog.id}`}
          style={{textDecoration: 'none'}}
          className="m-0 p-0">
        <Card
          bg='light'
          key={blog.id}
          text='dark'
          style={{ width: '50vw'}}
          className="m-0 p-0">
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>
              {blog.body}
              <br></br>
              {blog.publishedDate}
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      </>
)}
    </div>
    </div>
    </Container>
    )
}