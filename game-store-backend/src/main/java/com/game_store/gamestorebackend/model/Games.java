package com.game_store.gamestorebackend.model;


import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="_games")
public class Games {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Integer Id;

        private String name;
        private String desc;
        private Date release_data;
        private Integer quantity;
        private Boolean available;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Date getRelease_data() {
        return release_data;
    }

    public void setRelease_data(Date release_data) {
        this.release_data = release_data;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }
}
