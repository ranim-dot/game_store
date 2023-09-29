package com.game_store.gamestorebackend.controller;


import com.game_store.gamestorebackend.model.User;
import com.game_store.gamestorebackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @GetMapping("/users")
    List<User> getUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/users")
    User addUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
}
