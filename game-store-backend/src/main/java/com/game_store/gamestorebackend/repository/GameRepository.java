package com.game_store.gamestorebackend.repository;

import com.game_store.gamestorebackend.model.Games;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends JpaRepository<Games, Integer> {
}
