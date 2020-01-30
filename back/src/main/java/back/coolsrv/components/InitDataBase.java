package back.coolsrv.components;

import back.coolsrv.repositories.DeviceRepository;
import back.coolsrv.repositories.NATRepository;
import back.coolsrv.repositories.NetworkRepository;
import back.coolsrv.repositories.VlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class InitDataBase {
    @Autowired
    DeviceRepository deviceRepository;

    @Autowired
    NATRepository natRepository;

    @Autowired
    NetworkRepository networkRepository;

    @Autowired
    VlanRepository vlanRepository;

    @EventListener(ApplicationReadyEvent.class)
    public void run() throws Exception {
//        Vlan vlan = new Vlan("vlan", new ArrayList<>(), "desc");
//        Device device = new Device("123.45.67.89", "hostname", "opis", "11:11:11:11:11:11", true, "tam", vlan);
//        Network network = new Network("12.34.5.6", "24", "opis", "11.0.0.0", "tutaj", true, false, true);
//        NAT nat = new NAT("nazwa", device, "opis", "123.55.55.0", network);
//        deviceRepository.save(device);
//        natRepository.save(nat);
//        networkRepository.save(network);
//        vlanRepository.save(vlan);
    }
}
