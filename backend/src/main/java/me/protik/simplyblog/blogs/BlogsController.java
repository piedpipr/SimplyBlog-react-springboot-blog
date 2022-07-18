package me.protik.simplyblog.blogs;

import me.protik.simplyblog.models.Blogs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BlogsController {
    @Autowired
    private BlogsService blogsService;
    @GetMapping("/blogs")
    public List<Blogs> showAllBlogs(){
        return blogsService.getAllBlogs();
    }
    @GetMapping("/blogs/{id}")
    public List<Blogs> showAllUserBlogs(@PathVariable Long id){
        return blogsService.getUserBlogs(id);
    }

    @PostMapping("/blogs/add")
    void addBlog(@RequestBody Blogs blog){
        blogsService.addBlog(blog);
    }
}
