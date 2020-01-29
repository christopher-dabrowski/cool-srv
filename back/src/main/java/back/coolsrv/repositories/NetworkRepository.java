package back.coolsrv.repositories;

import back.coolsrv.enities.Network;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "network", path = "network")
public interface NetworkRepository extends CrudRepository<Network, Long> {
}
