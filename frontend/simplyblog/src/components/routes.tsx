import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Blog from "./blog";
import Profile from "./profile";
import Login from "./login";
import Register from "./register";
import PublicProfile from "./public_profile";
import AddPost from "./add-post";

type Props = {
}

export default function AppRoutes({}: Props) {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/add" element={<AddPost />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/:userName" element={<PublicProfile />} />
        </Routes>
    </div>
  )
}