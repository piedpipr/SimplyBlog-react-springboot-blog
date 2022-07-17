package me.protik.simplyblog.my_users;

import me.protik.simplyblog.models.MyUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUsersService {
    @Autowired
    private MyUsersRepository myUsersRepository;

    public Optional<MyUsers> showUserbyUserNameService(String userName){
        return myUsersRepository.findMyUsersByUserName(userName);
    }
    public Optional<MyUsers> showUserbyIdService(Long id){
        return myUsersRepository.findById(id);
    }
    public void addUserService(MyUsers user){
        myUsersRepository.save(user);
    }

}
