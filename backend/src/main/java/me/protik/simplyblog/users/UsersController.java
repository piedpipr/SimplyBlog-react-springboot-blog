package me.protik.simplyblog.users;

import me.protik.simplyblog.models.MyUsers;
import org.hibernate.procedure.spi.ParameterRegistrationImplementor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UsersController {
    @Autowired
    private UsersService usersService;

    @GetMapping("/user")
    public String userHome(){
        return "Welcome User";
    }
    @GetMapping("/user/{id}")
    public Optional<MyUsers> showUser(@PathVariable String id){
        return usersService.showUserService(id);
    }
    @PostMapping("/user/add/")
    public void addUser(@RequestBody MyUsers user){
        usersService.addUserService(user);
    }
}
