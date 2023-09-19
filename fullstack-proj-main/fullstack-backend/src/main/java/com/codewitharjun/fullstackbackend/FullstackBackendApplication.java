package com.codewitharjun.fullstackbackend;

import com.codewitharjun.fullstackbackend.model.User;
import com.codewitharjun.fullstackbackend.repository.RentalRepository;
import com.codewitharjun.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
//@ComponentScan(basePackages = "com.codewitharjun.fullstackbackend")
public class FullstackBackendApplication implements CommandLineRunner {
    @Autowired
    private RentalRepository rentalRepository;
    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(FullstackBackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = "1234";
        String encodedPassword = passwordEncoder.encode(password);
		/*userRepository.save(new User("test9","test","test@test.com",encodedPassword,"1345","adress","USER"));
		userRepository.save(new User("test10","test","test@test.com",encodedPassword,"1345","adress","ADMIN"));
		userRepository.save(new User("test11","test","test@test.com",encodedPassword,"1345","adress","USER"));*/

    }
}
