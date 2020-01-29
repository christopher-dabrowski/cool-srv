package back.coolsrv.enities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NAT {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @OneToOne
    private Device device;

    private String desc;

    private String externalIp;

    @OneToOne
    private Network network;

    public NAT(String name, Device device, String desc, String externalIp, Network network) {
        this.name = name;
        this.device = device;
        this.desc = desc;
        this.externalIp = externalIp;
        this.network = network;
    }
}
