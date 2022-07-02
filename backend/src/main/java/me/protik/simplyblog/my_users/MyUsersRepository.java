package me.protik.simplyblog.my_users;

import me.protik.simplyblog.models.MyUsers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyUsersRepository extends JpaRepository<MyUsers, Long> {
}
