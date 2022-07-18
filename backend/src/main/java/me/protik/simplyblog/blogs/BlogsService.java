package me.protik.simplyblog.blogs;

import me.protik.simplyblog.models.Blogs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlogsService {
    @Autowired
    BlogsRepository blogsRepository;

    List<Blogs>  getAllBlogs(){
        List<Blogs> allBlogs = new ArrayList<>();
        blogsRepository.findAll().forEach(allBlogs::add);
        return allBlogs;
    }
    List<Blogs>  getUserBlogs(Long id){
        List<Blogs> allUserBlogs = new ArrayList<>();
        blogsRepository.findAllByMyUsers_Id(id).forEach(allUserBlogs::add);
        return allUserBlogs;
    }
    void addBlog(Blogs blog){
        blogsRepository.save(blog);
    }

}

