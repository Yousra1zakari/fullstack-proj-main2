package com.codewitharjun.fullstackbackend.model;

public class LoginRequest {
    private String username;
    private String password;
    private boolean isAdmin;



    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LoginRequest(String username, String password , boolean isAdmin) {
        this.username = username;
        this.password = password;
        this.isAdmin= isAdmin;
    }
    public boolean getIsAdmin() {return  isAdmin;}

    public  void setIsAdmin(boolean is_admin) { this.isAdmin = isAdmin; }
    public LoginRequest() {
    }
}
