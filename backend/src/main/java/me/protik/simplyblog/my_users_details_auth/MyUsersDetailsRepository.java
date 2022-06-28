package me.protik.simplyblog.my_users_details_auth;

import me.protik.simplyblog.models.MyUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MyUsersDetailsRepository extends JpaRepository<MyUsers, Integer> {
    Optional<MyUsers> findMyUsersByUserName(String userName);
}
