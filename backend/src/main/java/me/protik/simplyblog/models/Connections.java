package me.protik.simplyblog.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter@Setter@AllArgsConstructor@NoArgsConstructor
public class Connections implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MyUsers receiver;
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MyUsers sender;
    private boolean accepted;
    private boolean following;
}
