package me.protik.simplyblog.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class BlogsLikesWrapper implements Serializable {
    private Long blogId;
    private Long likedBy;
    private Long unlikedBy;

}
