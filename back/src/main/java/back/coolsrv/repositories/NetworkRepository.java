package back.coolsrv.repositories;

import back.coolsrv.enities.Network;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NetworkRepository extends CrudRepository<Network, String> {
}
