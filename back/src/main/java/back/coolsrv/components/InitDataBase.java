package back.coolsrv.components;

import back.coolsrv.repositories.DeviceRepository;
import back.coolsrv.repositories.NATRepository;
import back.coolsrv.repositories.NetworkRepository;
import back.coolsrv.repositories.VlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class InitDataBase implements ApplicationRunner {
    @Autowired
    DeviceRepository deviceRepository;

    @Autowired
    NATRepository natRepository;

    @Autowired
    NetworkRepository networkRepository;

    @Autowired
    VlanRepository vlanRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
    }
}
