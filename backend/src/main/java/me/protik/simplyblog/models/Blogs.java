package me.protik.simplyblog.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Blogs {
    @Id
    private Long blogId;
    private String title;
    private String body;
    private Date publishedDate;
    private boolean published;
    @ManyToOne
    private MyUsers myUsers;
}
