package me.protik.simplyblog.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import me.protik.simplyblog.models.MyUsers;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class JwtUtil {
    public String generateJWT(Optional<MyUsers> user){
        Map<String, Object> claims = new HashMap<>();
        String SECRET_KEY = "123456789flknerrkoerkermvenrveqjvpo2jrgpverlvknklernvmernvionewvnnvneoneonervoineovervnev0HelloWorld1234567890";
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(user.get().getUserName())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }
}
