package back.coolsrv.repositories;

import back.coolsrv.enities.NAT;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "nat", path = "nat")
public interface NATRepository extends CrudRepository<NAT, Long> {
}
