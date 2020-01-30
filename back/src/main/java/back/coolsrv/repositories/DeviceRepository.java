package back.coolsrv.repositories;

import back.coolsrv.enities.Device;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RepositoryRestResource(collectionResourceRel = "device", path = "device")
public interface DeviceRepository extends CrudRepository<Device, Long> {
}
