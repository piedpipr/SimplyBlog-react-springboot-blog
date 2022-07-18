package me.protik.simplyblog.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Blogs {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String body;
    private Date publishedDate;
    private boolean published;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn( name= "my_users_id", nullable = false)
    @JsonIgnore
    private MyUsers myUsers;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "blog", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<BlogsLikes> likesUnlikes;
}
