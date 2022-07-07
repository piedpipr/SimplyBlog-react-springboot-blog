package me.protik.simplyblog.my_users;

import me.protik.simplyblog.models.MyUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUsersService {
    @Autowired
    private MyUsersRepository myUsersRepository;
    public void addUserService(MyUsers user){
        myUsersRepository.save(user);
    }
    public Optional<MyUsers> showUserService(Long userId){
        return myUsersRepository.findById(userId);
    }
    public Optional<MyUsers> myUsersDetailsService(Long userId){
        return myUsersRepository.findById(userId);
    }
}
