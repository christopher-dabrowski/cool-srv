package back.coolsrv.enities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String IP;

    private String hostname;

    private String desc;

    private String MAC;

    private boolean gateway;

    private String location;

    @ManyToOne
    private Vlan vlan;

    public Device(String IP, String hostname, String desc, String MAC, boolean gateway, String location) {
        this.IP = IP;
        this.hostname = hostname;
        this.desc = desc;
        this.MAC = MAC;
        this.gateway = gateway;
        this.location = location;
    }
}
