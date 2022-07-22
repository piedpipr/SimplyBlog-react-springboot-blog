import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

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
      <div>{userdetails}</div>
    )
}