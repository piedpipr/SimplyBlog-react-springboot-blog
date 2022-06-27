package me.protik.simplyblog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SimplyblogApplication {

	public static void main(String[] args) {
		SpringApplication.run(SimplyblogApplication.class, args);
	}
	@GetMapping
	public String hello(){
		return "Welcome To SimplyBlog";
	}

}
