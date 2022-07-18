package me.protik.simplyblog.my_users;

import java.security.Principal;

import me.protik.simplyblog.models.Connections;
import me.protik.simplyblog.models.ConnectionsWrapper;
import me.protik.simplyblog.models.MyUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MyUsersController {
    @Autowired
    private MyUsersService myUsersService;


    //User APIs
    @GetMapping("/user/profile") //Private User Profile
    Optional<MyUsers> userProfile(Principal principal){
        return myUsersService.showUserByUserNameService(principal.getName());
    }
    @GetMapping("/user/{userName}") //Public User Profile
    public Optional<MyUsers> publicProfile(@PathVariable String userName){
        return myUsersService.showUserByUserNameService(userName);
    }


    //Connections APIs
    @GetMapping("/user/connections/{userName}")
    public List<Connections> userConnections(@PathVariable String userName){
        return myUsersService.showUserConnectionsListService(userName);
    }
    @GetMapping("/user/pending-connections/{userName}")
    public List<Connections> userConnectionsPending(@PathVariable String userName){
        return myUsersService.showUserPendingListService(userName);
    }
    @GetMapping("/user/followers/{userName}")
    public List<Connections> userFollowers(@PathVariable String userName){
        return myUsersService.showUserFollowersListService(userName);
    }
    @PostMapping("/user/connections/add")
    public void addModConnection(@RequestBody ConnectionsWrapper connectionsWrapper){
        Connections connection = new Connections();
        connection.setReceiver(myUsersService.showUserByIdService(connectionsWrapper.getReceiver()));
        connection.setSender(myUsersService.showUserByIdService(connectionsWrapper.getSender()));
        connection.setAccepted(connectionsWrapper.isAccepted());
        connection.setFollowing(connection.isFollowing());
        myUsersService.addModConnectionService(connection);
    }


    //TEST APIs
    @GetMapping("/user")
    public String userHome(){
        return "Welcome User";
    }

    @PostMapping("/user/add/")
    public void addUser(@RequestBody MyUsers user){
        myUsersService.addUserService(user);
    }
    @GetMapping("/admin")
    public String adminHome(){
        return "Welcome Admin";
    }
}
