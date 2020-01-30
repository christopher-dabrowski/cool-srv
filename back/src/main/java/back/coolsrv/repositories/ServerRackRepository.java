package back.coolsrv.repositories;

import back.coolsrv.enities.ServerRack;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RepositoryRestResource(collectionResourceRel = "serverrack", path = "serverrack")
public interface ServerRackRepository extends CrudRepository<ServerRack, Long> {
}
