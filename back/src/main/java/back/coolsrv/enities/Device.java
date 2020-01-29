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

    private boolean isGateway;

    private String location;

    @ManyToOne
    private Vlan vlan;
}
