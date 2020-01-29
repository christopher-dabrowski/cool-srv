package back.coolsrv.controller;

import back.coolsrv.enities.Device;
import back.coolsrv.enities.NAT;
import back.coolsrv.enities.Network;
import back.coolsrv.enities.Vlan;
import back.coolsrv.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @Autowired
    DeviceRepository deviceRepository;

    @Autowired
    NATRepository natRepository;

    @Autowired
    NetworkRepository networkRepository;

    @Autowired
    ServerRackRepository serverRackRepository;

    @Autowired
    VlanRepository vlanRepository;

    @GetMapping(value = "/devices")
    public Iterable<Device> getDevices() {
        return deviceRepository.findAll();
    }

    @GetMapping(value = "/networks")
    public Iterable<Network> getNetworks() {
        return networkRepository.findAll();
    }

    @GetMapping(value = "/nats")
    public Iterable<NAT> getNats() {
        return natRepository.findAll();
    }

    @GetMapping(value = "/vlans")
    public Iterable<Vlan> getVlans() {
        return vlanRepository.findAll();
    }

    @PostMapping(value = "/devices")
    public Device createDevice(@RequestBody Device device) {
        deviceRepository.save(device);
        return device;
    }

    @PostMapping(value = "/networks")
    public Network createNetowrk(@RequestBody Network network) {
        networkRepository.save(network);
        return network;
    }

    @PostMapping(value = "/nats")
    public NAT createNat(@RequestBody NAT nat) {
        natRepository.save(nat);
        return nat;
    }

    @PostMapping(value = "/vlans")
    public Vlan createVlan(@RequestBody Vlan vlan) {
        vlanRepository.save(vlan);
        return vlan;
    }
}
