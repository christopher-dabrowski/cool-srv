package back.coolsrv.repositories;

import back.coolsrv.enities.Vlan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VlanRepository extends CrudRepository<Vlan, String> {
}
