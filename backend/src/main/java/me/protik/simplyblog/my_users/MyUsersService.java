package me.protik.simplyblog.my_users;

import me.protik.simplyblog.models.Connections;
import me.protik.simplyblog.models.MyUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MyUsersService {
    @Autowired
    private MyUsersRepository myUsersRepository;
    @Autowired
    private ConnectionsRepository connectionsRepository;

    public Optional<MyUsers> showUserByUserNameService(String userName){
        return myUsersRepository.findMyUsersByUserName(userName);
    }
    public Optional<MyUsers> showUserByIdService(Long id){
        return myUsersRepository.findById(id);
    }
    public void addUserService(MyUsers user){
        myUsersRepository.save(user);
    }

//User Connections Services
    public List<Connections> showUserConnectionsListService(String userName){
        return connectionsRepository.findConnectionsByReceiver_UserNameAndAcceptedTrue(userName);
    }
    public List<Connections> showUserPendingListService(String userName){
        return connectionsRepository.findConnectionsByReceiver_UserNameAndAcceptedFalse(userName);
    }
    public List<Connections> showUserFollowersListService(String userName){
        return connectionsRepository.findConnectionsByReceiver_UserNameAndFollowingIsTrue(userName);
    }

}
