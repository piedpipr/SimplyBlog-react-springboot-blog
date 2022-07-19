package me.protik.simplyblog.blogs;

import me.protik.simplyblog.models.BlogsLikes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BlogsLikesRepository extends JpaRepository<BlogsLikes, Long> {
    List<BlogsLikes> findAllByBlog_Id(Long Id);
}