import {useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Card } from 'react-bootstrap';
import axios from '../api/axios';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { LikeStatusType, BlogType }  from '../types/api-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const PUBLIC_SINGLE_BLOG_API = '/blogs/show/';
const BLOG_LIKES_API = '/blogs/likes/';
const BLOG_UNLIKES_API = '/blogs/unlikes/';
const BLOG_ADD_LIKEUNLIKE_API = '/blogs/likeunlike/';
const BLOG_REMOVE_LIKEUNLIKE_API = '/blogs/likeunlike/remove/';

export default function Blog(){
    const [blogdata, setBlogdata] = useState<BlogType>();
    const [likes, setLikes] = useState(0);
    const [unlikes, setUnlikes] = useState(0);
    const [likeStatus, setLikeStatus] = useState<LikeStatusType>();
    const [isLikedUnliked, setIsLikedUnliked] = useState(false);
    let blogId = useParams().id;
    let userAuth = useAuth();

    useEffect(()=> {
        const getBlog = async() => {
            const response = await axios.get(PUBLIC_SINGLE_BLOG_API+blogId);
            setBlogdata(response.data);
            console.log(response.data);
        }
        getBlog();
    }, [blogId]);
    useEffect(()=> {
      const getBlogLikes = async() => {
          const response = await axios.get(BLOG_LIKES_API+blogId);
          setLikes(response.data);
          console.log(response.data);
      }
      getBlogLikes();
  }, [blogId, isLikedUnliked]);
    useEffect(()=> {
      const getBlogUnLikes = async() => {
          const response = await axios.get(BLOG_UNLIKES_API+blogId);
          setUnlikes(response.data);
          console.log(response.data);
      }
      getBlogUnLikes();
  }, [blogId, isLikedUnliked]);
  useEffect(()=> {
    if(userAuth.isAuthenticated){
    const likeStatus = async() => {
        const response = await axios.get('blogs/'+blogId+'/'+userAuth.username);
        console.log(response.data);
        setLikeStatus(response.data);
    }
    likeStatus();
}}, [blogId, userAuth.isAuthenticated, isLikedUnliked]);

    const handleLikeUnlike = async(status: string) => {
    //   await axios.post(BLOG_ADD_LIKEUNLIKE_API, {
    //     blog: {id: blogId},
    //     likedBy: {id: 1}
    // })
    // setIsLikedUnliked(!isLikedUnliked);


      if(status === 'like'){
        if(likeStatus?.id){
        await axios.post(BLOG_REMOVE_LIKEUNLIKE_API+likeStatus.id);
        await axios.post(BLOG_ADD_LIKEUNLIKE_API, {
          blog: {id: blogId},
          likedBy: {id: userAuth.userId}
      })
        setIsLikedUnliked(!isLikedUnliked);
      } else {
        await axios.post(BLOG_ADD_LIKEUNLIKE_API, {
          blog: {id: blogId},
          likedBy: {id: userAuth.userId}
      })
        setIsLikedUnliked(!isLikedUnliked);
      }
    } else if(status === 'unlike'){
        if(likeStatus?.id){
          await axios.post(BLOG_REMOVE_LIKEUNLIKE_API+likeStatus.id);
          await axios.post(BLOG_ADD_LIKEUNLIKE_API, {
            blog: {id: blogId},
            unlikedBy: {id: userAuth.userId}
        })
          setIsLikedUnliked(!isLikedUnliked);
        } else {
          await axios.post(BLOG_ADD_LIKEUNLIKE_API, {
            blog: {id: blogId},
            unlikedBy: {id: userAuth.userId}
        })
          setIsLikedUnliked(!isLikedUnliked);
        }
  }


  }

  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <Card.Img 
          variant="top"
          src="https://random.imagecdn.app/900/300"/>
        <h1 className="display-5 fw-bold mt-5 text-center">{blogdata?.title}</h1>
        <Link to={`/user/${blogdata?.myUsers.userName}`} className="text-decoration-none">
        <p className="fs-10 mt-2 text-center">
        <img 
        src={`https://avatars.dicebear.com/api/avataaars/${blogdata?.myUsers.userName}.svg`}
        style={{height: '30px', width: '30px', borderRadius: '50%'}}
        />{blogdata?.myUsers.userName}</p>
        </Link>
        <p className="col-md-8 fs-4 mt-5">{blogdata?.body}</p>
        <button
          className="btn btn-primary btn-sm me-2"
          onClick={()=> handleLikeUnlike('like')}
          disabled={(likeStatus?.likedBy?.userName===userAuth.username)?true:false} 
          type="button"
          >{likes} Like <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={()=> handleLikeUnlike('unlike')}
          disabled={(likeStatus?.unlikedBy?.userName===userAuth.username)?true:false}
          type="button">
          {unlikes} Unlike <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        <p className="fs-10 text-end">Published on: {blogdata?.publishedDate}</p>
      </div>
      </div>  
    </div>
  )
}

