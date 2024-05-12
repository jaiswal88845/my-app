package com.jlj.myapp.security.config;

import com.jlj.myapp.security.config.filter.JwtAuthFilter;
import com.jlj.myapp.security.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;


import java.util.Arrays;

@Configuration
@EnableMethodSecurity
@EnableWebSecurity
public class SecurityConfig {

	@Autowired
	public UserDetailsServiceImpl userDetailsService;
	@Autowired
	private JwtAuthFilter authFilter;

	@Bean
	public static PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http.cors(cors -> cors.configurationSource(request -> {
			CorsConfiguration configuration = new CorsConfiguration();
			configuration.setAllowedOrigins(Arrays.asList("*"));
			configuration.setAllowedMethods(Arrays.asList("*"));
			configuration.setAllowedHeaders(Arrays.asList("*"));
			return configuration;
		    })).csrf().disable().authorizeHttpRequests().requestMatchers("/authenticate").permitAll().and()
				.authorizeHttpRequests().requestMatchers("/doctor/**", "/user/**").authenticated().and()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS.STATELESS).and()
				// .authenticationProvider(authenticationProvider())
				.addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class).build();
	}

	/**
	 * TODO: AuthenticationProvider is required if you are connecting with DB. I
	 * don't know how it is working in my case
	 */
	/**
	 * @Bean public AuthenticationProvider authenticationProvider(){
	 *       DaoAuthenticationProvider authenticationProvider=new
	 *       DaoAuthenticationProvider();
	 *       authenticationProvider.setUserDetailsService(userDetailsService);
	 *       authenticationProvider.setPasswordEncoder(passwordEncoder()); return
	 *       authenticationProvider; }
	 */


	/*
	 * @Bean public WebMvcConfigurer corsConfigurer() { return new
	 * WebMvcConfigurer() {
	 * 
	 * @Override public void addCorsMappings(CorsRegistry registry) {
	 * registry.addMapping("/doctor/**").allowedOrigins("http://localhost:8080"); }
	 * }; }
	 */


	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
}
