package me.protik.simplyblog.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "my_users")
public class MyUsers implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(nullable = false, unique = true)
    private String userName;
    private String password;
    @Column(unique = true)
    private String email;
    private String bio;
    private String roles;
    private boolean active;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "myUsers", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Blogs> blogs;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "receiver", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Connections> connections;
}
