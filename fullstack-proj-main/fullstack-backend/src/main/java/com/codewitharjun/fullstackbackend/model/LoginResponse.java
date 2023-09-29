package com.codewitharjun.fullstackbackend.model;

public class
LoginResponse {
    private String token;
    private String username;
    private boolean is_admin;

    public LoginResponse() {
    }

    public LoginResponse(String token, String username) {
        this.token = token;
        this.username = username;
    }


    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean getIsAdmin() {return  is_admin;}

    public  void setIsAdmin(boolean is_admin) { this.is_admin = is_admin; }
}