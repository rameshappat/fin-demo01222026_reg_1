package com.finusrreg.services;

import com.finusrreg.models.User;
import com.finusrreg.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(User user) throws Exception {
        // Validate input
        if (user.getEmail() == null || user.getPhoneNumber() == null) {
            throw new IllegalArgumentException("Email and phone number are required");
        }
        // Save user to repository
        userRepository.save(user);
        // Trigger MFA process
        // ...
    }
}
