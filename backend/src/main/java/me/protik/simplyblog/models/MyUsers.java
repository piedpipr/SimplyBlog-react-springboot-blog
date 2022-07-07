package me.protik.simplyblog.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "my_users")
public class MyUsers {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long userId;
    @Column(nullable = false, unique = true)
    private String userName;
    private String password;
    private String roles;
    private boolean active;
    @OneToMany
    private List<Blogs> blogs;
}
