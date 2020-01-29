package back.coolsrv.repositories;

import back.coolsrv.enities.ServerRack;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServerRackRepository extends CrudRepository<ServerRack, String> {
}
