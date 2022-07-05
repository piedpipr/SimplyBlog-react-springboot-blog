package me.protik.simplyblog.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

@Getter @Setter
@AllArgsConstructor
public class AuthResponse {
    private String jwt;
}
