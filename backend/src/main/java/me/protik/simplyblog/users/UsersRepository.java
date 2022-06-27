package me.protik.simplyblog.users;

import me.protik.simplyblog.models.MyUsers;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<MyUsers, String> {
}
