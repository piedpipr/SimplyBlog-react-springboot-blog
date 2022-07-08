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
    public Optional<MyUsers> showUserService(Long id){
        return myUsersRepository.findById(id);
    }
    public Optional<MyUsers> myUsersDetailsService(Long id){
        return myUsersRepository.findById(id);
    }
}
