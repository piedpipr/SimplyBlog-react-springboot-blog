package me.protik.simplyblog.blogs;

import me.protik.simplyblog.models.Blogs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BlogsController {
    @Autowired
    private BlogsService blogsService;
    @GetMapping("/blogs/{id}")
    public List<Blogs> showAllBlogs(@PathVariable Long id){
        return blogsService.getUserBlogs(id);
    }
}
