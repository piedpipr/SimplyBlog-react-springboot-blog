package me.protik.simplyblog.auth;

import me.protik.simplyblog.auth.models.AuthRequest;
import me.protik.simplyblog.auth.models.AuthResponse;
import me.protik.simplyblog.auth.utils.JwtUtil;
import me.protik.simplyblog.models.MyUsers;
import me.protik.simplyblog.my_users.MyUsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
public class AuthController {
    @Autowired
    private UserDetailsRepository userDetailsRepository;
    @Autowired
    private MyUsersRepository myUsersRepository;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    AuthenticationManager authenticationManager;

    @GetMapping("/usernamecheck/{userName}")
    public boolean authUsernameCheck(@PathVariable String userName){
        return userDetailsRepository.existsByUserName(userName);
    }
    @GetMapping("/verifyjwt")
    public Optional<MyUsers> verifyJWT(Principal principal){
        return myUsersRepository.findMyUsersByUserName(principal.getName());
//        return principal.getName();
    }
    @PostMapping("/register")
    public void authRegister(@RequestBody MyUsers regUser){
        userDetailsRepository.save(regUser);
    }
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateAndGetJWT(@RequestBody AuthRequest authRequest) throws Exception {
        try{
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUserName(),authRequest.getPassword()));
        } catch (BadCredentialsException e){
            throw new Exception("Incorrect username or password", e);
        }
        String jwt = jwtUtil.generateJWT(userDetailsRepository.findMyUsersByUserName(authRequest.getUserName()));
        return ResponseEntity.ok(new AuthResponse(jwt));
    }

}
