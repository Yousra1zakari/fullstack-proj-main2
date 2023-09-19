package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.exception.UsernameNotFoundException;
import com.codewitharjun.fullstackbackend.model.LoginRequest;
import com.codewitharjun.fullstackbackend.model.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.codewitharjun.fullstackbackend.security.JwtTokenProvider;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        SecurityContextHolder.clearContext();
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        if(authentication.isAuthenticated()){
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return jwtTokenProvider.generateToken(String.valueOf(authentication));
        }
        else
            throw new UsernameNotFoundException("invalid username or password");
    }
}
