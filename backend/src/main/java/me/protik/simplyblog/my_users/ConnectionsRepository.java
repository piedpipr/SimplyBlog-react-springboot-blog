package me.protik.simplyblog.my_users;

import me.protik.simplyblog.models.Connections;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConnectionsRepository extends JpaRepository<Connections, Long> {
    List<Connections> findConnectionsByReceiver_UserName(String userName);
    List<Connections> findConnectionsByReceiver_UserNameAndAcceptedTrue(String receiver_userName);
    List<Connections> findConnectionsByReceiver_UserNameAndAcceptedFalseAndRequestedTrue(String receiver_userName);
    List<Connections> findConnectionsByReceiver_UserNameAndFollowingIsTrue(String receiver_userName);
    Connections findConnectionsByReceiver_UserNameAndSender_UserName(String receiver_userName, String sender_userName);
}
