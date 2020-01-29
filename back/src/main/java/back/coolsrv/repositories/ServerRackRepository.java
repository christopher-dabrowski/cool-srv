package back.coolsrv.repositories;

import back.coolsrv.enities.ServerRack;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "serverrack", path = "serverrack")
public interface ServerRackRepository extends CrudRepository<ServerRack, Long> {
}
