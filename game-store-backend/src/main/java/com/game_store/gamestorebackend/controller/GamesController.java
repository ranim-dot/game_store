package com.game_store.gamestorebackend.controller;


import com.game_store.gamestorebackend.model.Games;
import com.game_store.gamestorebackend.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GamesController {

    @Autowired
    private GameRepository gameRepository;


    @PostMapping("/games")
    public Games newGame(@RequestBody Games game){
        return gameRepository.save(game);
    }

    @GetMapping("/games")
    public List<Games> getAllGames(){
        return gameRepository.findAll();
    }
}
