import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from '../api/axios';

const PUBLIC_SINGLE_BLOG_API = '/blogs/show/';

export default function Blog(){
    const [blogdata, setBlogdata] = useState({});
    
    let blogId = useParams().id;

    useEffect(()=> {
        const getBlog = async() => {
            const response = await axios.get(PUBLIC_SINGLE_BLOG_API+blogId);
            setBlogdata(response.data);
            console.log(response.data);
        }
        getBlog();
    }, []);
  return (
    <div>{JSON.stringify(blogdata)}</div>
  )
}

