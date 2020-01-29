package back.coolsrv.repositories;

import back.coolsrv.enities.NAT;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NATRepository extends CrudRepository<NAT, String> {
}
