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
    @GetMapping("/blogs/show/{id}")
    public Blogs showABlogById(@PathVariable Long id){
        return blogsService.getBlogByIdService(id);
    }
    @GetMapping("/blogs")
    public List<Blogs> showAllBlogs(){
        return blogsService.getAllBlogs();
    }
    @GetMapping("/blogs/{userName}")
    public List<Blogs> showAllUserBlogs(@PathVariable String userName){
        return blogsService.getUserBlogs(userName);
    }

    @PostMapping("/blogs/add")
    public void addBlog(@RequestBody Blogs blog){
        blogsService.addBlog(blog);
    }

    //BlogLikes APIs
    @GetMapping("/blogs/{id}/{userName}") //Get Like Status of User For A Particular Blog
    BlogsLikes getBlogUserLikeStatus(@PathVariable Long id, @PathVariable String userName){
        return blogsService.blogLikeStatus(id, userName, userName);
    }
    @PostMapping("/blogs/likeunlike/") // Add/Modify User Like On A Blog
    void addLikeUnlike(@RequestBody BlogsLikes blogsLikes){
        blogsService.addLikeUnlikeService(blogsLikes);
    }
    @PostMapping("/blogs/likeunlike/remove/{id}") // Remove User Like On A Blog
    void removeLikeUnlike(@PathVariable Long id){
        blogsService.removeLikeUnlikeService(id);
    }
    @GetMapping("/blogs/likes/{id}") // No Of Unlikes Received By A Blog
    Integer noOfLikesBlog(@PathVariable Long id){
        return blogsService.noOfLikes(id);
    }
    @GetMapping("/blogs/unlikes/{id}") // No Of Likes Received By A Blog
    Integer noOfUnlikesBlog(@PathVariable Long id){
        return blogsService.noOfUnLikes(id);
    }
    @GetMapping("/blogs/get") // Get All BlogLikes Objects
    List<BlogsLikes> getAllBlogLikes(){
        return blogsService.allBlogLikes();
    }
}
