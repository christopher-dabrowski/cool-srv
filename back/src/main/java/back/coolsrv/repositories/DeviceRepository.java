package back.coolsrv.repositories;

import back.coolsrv.enities.Device;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "device", path = "device")
public interface DeviceRepository extends CrudRepository<Device, Long> {
}
