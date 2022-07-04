package me.protik.simplyblog.auth;

import me.protik.simplyblog.models.MyUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @PostMapping("/register")
    public void authRegister(@RequestBody MyUsers regUser){
        userDetailsRepository.save(regUser);
    }
    @PostMapping("/authenticate")
    public String authApi(@RequestBody AuthRequest authUser){
        return authUser.getUserName()+" Authenticated";
    }
    @GetMapping("/authenticate1")
    public String auth(){
        return "Auth Page Test";
    }
}
