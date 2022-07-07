package me.protik.simplyblog.my_users;

import me.protik.simplyblog.models.MyUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class MyUsersController {
    @Autowired
    private MyUsersService myUsersService;

    @GetMapping("/user")
    public String userHome(){
        return "Welcome User";
    }
    @GetMapping("/user/{userId}")
    public Optional<MyUsers> showUser(@PathVariable Long userId){
        return myUsersService.showUserService(userId);
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
