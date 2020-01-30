package back.coolsrv.repositories;

import back.coolsrv.enities.Vlan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RepositoryRestResource(collectionResourceRel = "vlan", path = "vlan")
public interface VlanRepository extends CrudRepository<Vlan, Long> {
}
