package me.protik.simplyblog.users;

import me.protik.simplyblog.models.MyUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsersService {
    @Autowired
    private UsersRepository usersRepository;
    public void addUserService(MyUsers user){
        usersRepository.save(user);
    }
    public Optional<MyUsers> showUserService(String id){
        return usersRepository.findById(id);
    }
}
