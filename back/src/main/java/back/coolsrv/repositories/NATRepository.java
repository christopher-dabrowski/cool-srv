package back.coolsrv.repositories;

import back.coolsrv.enities.NAT;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RepositoryRestResource(collectionResourceRel = "nat", path = "nat")
public interface NATRepository extends CrudRepository<NAT, Long> {
}
