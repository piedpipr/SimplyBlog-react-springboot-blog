package me.protik.simplyblog.blogs;

import me.protik.simplyblog.models.*;
import me.protik.simplyblog.my_users.MyUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BlogsController {
    @Autowired
    private BlogsService blogsService;
    @Autowired
    private MyUsersService myUsersService;

    //Blogs APIs
    @GetMapping("/blogs")
    public List<Blogs> showAllBlogs(){
        return blogsService.getAllBlogs();
    }
    @GetMapping("/blogs/{id}")
    public List<Blogs> showAllUserBlogs(@PathVariable Long id){
        return blogsService.getUserBlogs(id);
    }

    @PostMapping("/blogs/add")
    public void addBlog(@RequestBody Blogs blog){
        blogsService.addBlog(blog);
    }

    //BlogLikes APIs
    @PostMapping("/blogs/likeunlike")
    void addLikeUnlikeTest(@RequestBody BlogsLikes blogsLikes){
        blogsService.addLikeUnlikeService(blogsLikes);
    }
    @GetMapping("/blogs/likes/{id}")
    Integer noOfLikesBlog(@PathVariable Long id){
        return blogsService.noOfLikes(id);
    }
    @GetMapping("/blogs/unlikes/{id}")
    Integer noOfUnlikesBlog(@PathVariable Long id){
        return blogsService.noOfUnLikesTest(id);
    }
    @GetMapping("/blogs/get")
    List<BlogsLikes> getAllBlogLikes(){
        return blogsService.allBlogLikes();
    }
}
