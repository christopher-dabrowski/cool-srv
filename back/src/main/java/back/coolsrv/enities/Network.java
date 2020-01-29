package back.coolsrv.enities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Network {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String address;

    private String mask;

    private String desc;

    private String dns;

    private String location;

    private boolean routable;

    private boolean publicNet;

    private boolean dynamic;

    public Network(String address, String mask, String desc, String dns, String location, boolean routable, boolean publicNet, boolean dynamic) {
        this.address = address;
        this.mask = mask;
        this.desc = desc;
        this.dns = dns;
        this.location = location;
        this.routable = routable;
        this.publicNet = publicNet;
        this.dynamic = dynamic;
    }
}
