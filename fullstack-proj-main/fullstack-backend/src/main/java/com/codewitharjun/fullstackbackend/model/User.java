package com.codewitharjun.fullstackbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/* Created by Arjun Gautam */
@Entity
@Table(name = "\"user\"")
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String name;
    private String email;
    private String password;
    private String number;
    private String adress;

    private String role;
    private boolean isAdmin;

    public String getRole() {
        return role;
    }

    public User setRole(String role) {
        this.role = role;
        return this;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }
    public boolean getIsAdmin() {return  isAdmin;}

    public  void setIsAdmin(boolean is_admin) { this.isAdmin = is_admin; }




    @Override
    public String toString() {
        return "User " +
                 "id = " + id;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User( String username, String name, String email, String password, String number, String adress,String role, boolean isAdmin) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
        this.number = number;
        this.adress = adress;
        this.role = role;
        this.isAdmin = isAdmin;
    }

    public User() {
    }
}
