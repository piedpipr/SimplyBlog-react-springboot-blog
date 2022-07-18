package me.protik.simplyblog.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class BlogsLikes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne
    private Blogs blog;
    @OneToOne
    private MyUsers likedBy;
    @OneToOne
    private MyUsers unlikedBy;

}
