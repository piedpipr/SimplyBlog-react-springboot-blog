package me.protik.simplyblog.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter@Setter@AllArgsConstructor@NoArgsConstructor
public class Connections {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne
    private MyUsers receiver;
    @OneToOne
    private MyUsers sender;
    private boolean accepted;
    private boolean following;
}
