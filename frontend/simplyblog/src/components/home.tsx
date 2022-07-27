import {useEffect, useState} from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Card } from 'react-bootstrap';
import axios from '../api/axios';
import Blog from './blog';
import { Link } from 'react-router-dom';
const PUBLIC_BLOGS_API = '/blogs';

type Props = {}

export default function Home({}: Props) {
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
    useEffect(()=> {
      const getBlogs = async() => {
      const response = await axios.get(PUBLIC_BLOGS_API);
      // setBlogsdata(response.data);
      setBlogsdata(response.data);
      console.log(response.data);
    }
    getBlogs();
    },[]);
  
  return (
    <div>
      <h1 className="text-center pb-2">Recent Posts</h1>
      <div className="container d-flex flex-wrap justify-content-center">
{blogsdata.map((blog) => 
    <div>
      <Link to={`/blog/${blog.id}`} style={{textDecoration: 'none'}}>
      <Card
        onClick={() => {<Blog />}}
        bg='light'
        key={blog.id}
        text='dark'
        style={{ width: '25vw', height: '40vh', margin: '0.5rem' }}
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
      </Link>
    </div>
)}
  </div></div>
  )
}