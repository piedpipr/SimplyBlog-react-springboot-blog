package me.protik.simplyblog.blogs;

import me.protik.simplyblog.models.Blogs;
import org.springframework.data.repository.CrudRepository;

public interface BlogsRepository extends CrudRepository<Blogs, Long> {
}
