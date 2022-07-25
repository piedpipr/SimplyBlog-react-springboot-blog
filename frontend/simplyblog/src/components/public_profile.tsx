import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const PUBLIC_PROFILE_API = '/user/';
const usernameDummy = 'userrrr';

type Props = {
}

export default function PublicProfile({}: Props) {
  const [userdetails, setUserdetails] = useState('');
  let userName = useParams().userName;

  useEffect(()=> {
    const getProfile = async() => {
    const response = await axios.get(PUBLIC_PROFILE_API + userName);
    setUserdetails(JSON.stringify(response.data));
    console.log(response.data);
  }
  getProfile();
  });


  return (
      <div>{userdetails}
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://avatars.dicebear.com/api/avataaars/${userName}.svg`}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      </div>
    )
}