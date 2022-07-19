package me.protik.simplyblog.blogs;

import me.protik.simplyblog.models.Blogs;
import me.protik.simplyblog.models.BlogsLikes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class BlogsService {
    @Autowired
    BlogsRepository blogsRepository;
    @Autowired
    BlogsLikesRepository blogsLikesRepository;

    //Blog Services
    Blogs getBlogByIdService(Long id){
        return blogsRepository.findBlogsById(id);
    }
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

    //BlogLikes Sevices
    void addLikeUnlikeService(BlogsLikes bloglike){
        blogsLikesRepository.save(bloglike);
    }
    Integer noOfLikes( Long blogId ){
        AtomicReference<Integer> count = new AtomicReference<>(0);
        blogsLikesRepository.findAllByBlog_Id(blogId)
                .forEach((blogsLikes) -> {if(blogsLikes.getLikedBy()!=null) {
                    count.updateAndGet(v -> v + 1);
                }});
                return count.get();
    }
    Integer noOfUnLikes( Long blogId ){
        AtomicReference<Integer> count = new AtomicReference<>(0);
        blogsLikesRepository.findAllByBlog_Id(blogId)
                .forEach((blogsLikes) -> {if(blogsLikes.getUnlikedBy()!=null) {
                    count.updateAndGet(v -> v + 1);
                }});
        return count.get();
    }
    Integer noOfUnLikesTest( Long blogId ){
        AtomicReference<Integer> count = new AtomicReference<>(0);
        blogsLikesRepository.findAllByBlog_Id(blogId)
                .forEach((blogsLikes) -> count.updateAndGet(v -> v + 1));
        return count.get();
    }
    List<BlogsLikes> allBlogLikes(){
        return blogsLikesRepository.findAll();
    }



}

