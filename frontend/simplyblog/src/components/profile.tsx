import { useState, useEffect } from 'react';
import axios from '../api/axios';

const MY_PROFILE_API = '/user/profile';
const token = "eyJhbGciOiJIUzI1NiJ9.eyJST0xFUyI6IlJPTEVfVVNFUiIsInN1YiI6InVzZXJycnIiLCJpYXQiOjE2NTc5NzYyMzMsImV4cCI6MTY1ODAxMjIzM30.c-QGz1iA2BvG6EYwgaEpTRmlz1fQ3LjMdJYDpMuwWC4";

type Props = {}

export default function Profile({}: Props) {
  const [username, setUsername] = useState('');

  useEffect(()=> {
    const getProfile = async() => {
    const response = await axios.get(MY_PROFILE_API,
    {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer '+ token,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    }
    );
    setUsername(response.data.userName);
  }
  getProfile();
  });


  return (
      <div>{username}</div>
    )
}