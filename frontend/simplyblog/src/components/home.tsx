import {useEffect, useState} from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Card } from 'react-bootstrap';
import axios from '../api/axios';
import Blog from './blog';
import { Link } from 'react-router-dom';
import '../css/animbackground.css'

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
      <div className="bgAni"></div>
      <div className="bgAni bg2"></div>
      <div className="bgAni bg3"></div>
      <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid ">
        <h1 className="display-5 fw-bold mt-5 text-center">Welcome To SimplyBlog</h1>
        <p className="fs-4 mt-5 text-center">Your daily digest for free thoughts</p>
      </div>
      </div> 
      <div className="container d-flex flex-wrap justify-content-center">
{blogsdata.map((blog) => 
    <div>
      <Link to={`/blog/${blog.id}`} style={{textDecoration: 'none'}}>
      <Card
        onClick={() => {<Blog />}}
        bg='light'
        key={blog.id}
        text='dark'
        style={{ width: '25vw', height: '40vh', margin: '0.5rem', boxShadow: '0px 0px 15px 0px rgba(2,67,233,0.08)' }}
        className="mb-2 border-0"
      >
        <Card.Img 
          variant="top" 
          src="https://random.imagecdn.app/300/100"
          style={{ width: '25vw', height: '20vh' }}/>
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