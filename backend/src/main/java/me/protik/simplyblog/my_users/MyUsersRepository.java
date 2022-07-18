package me.protik.simplyblog.my_users;

import me.protik.simplyblog.models.MyUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MyUsersRepository extends JpaRepository<MyUsers, Long> {
    Optional<MyUsers> findMyUsersByUserName(String userName);
    MyUsers findMyUsersById(Long id);
}
