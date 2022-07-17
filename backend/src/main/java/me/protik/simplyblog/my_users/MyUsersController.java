package me.protik.simplyblog.my_users;

import java.security.Principal;
import me.protik.simplyblog.models.MyUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class MyUsersController {
    @Autowired
    private MyUsersService myUsersService;

    @GetMapping("/user/profile")
    Optional<MyUsers> userProfile(Principal principal){
        return myUsersService.showUserbyUserNameService(principal.getName());
    }
    @GetMapping("/user/{userName}")
    public Optional<MyUsers> publicProfile(@PathVariable String userName){
        return myUsersService.showUserbyUserNameService(userName);
    }
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
