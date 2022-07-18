package me.protik.simplyblog.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter@Setter@AllArgsConstructor@NoArgsConstructor
public class ConnectionsWrapper implements Serializable {
    private Long receiver;
    private Long sender;
    private boolean accepted;
    private boolean following;
}
