package com.game_store.gamestorebackend.controller;


import com.game_store.gamestorebackend.model.Games;
import com.game_store.gamestorebackend.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
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


    @GetMapping("games/{id}")
    Games viewGame(@PathVariable Integer id){
        return gameRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Not found"));
    }

    @DeleteMapping("/games/{id}")
    public String deleteGame(@PathVariable Integer id) {
        if(!gameRepository.existsById(id)) {
            return "Game with id " +id + " doesn't Exist";
        }
        gameRepository.deleteById(id);
        return "Game with id " +id + " has been deleted successfully";
    }
}
