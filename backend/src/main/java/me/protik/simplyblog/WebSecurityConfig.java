package me.protik.simplyblog;

import me.protik.simplyblog.auth.filters.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    JwtRequestFilter jwtRequestFilter;
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.userDetailsService(userDetailsService);
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/admin").hasRole("ADMIN")
                .antMatchers("/user").authenticated()
                .antMatchers("/register").permitAll()
                .antMatchers("/authentication").permitAll()
                .antMatchers("/usernamecheck").permitAll()
                .antMatchers("/blogs").permitAll()
                .antMatchers("/profile").permitAll()
                .antMatchers("/user/{userName}").permitAll()
                .antMatchers("/").permitAll()
                .and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//               .and().formLogin();
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }
    @Bean
    public PasswordEncoder getPasswordEncoder() { return NoOpPasswordEncoder.getInstance();}
}
