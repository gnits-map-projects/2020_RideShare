package models;

import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.lang.Exception;
import javax.persistence.NoResultException;

import static java.util.concurrent.CompletableFuture.supplyAsync;
import java.util.stream.Stream;
/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public  class JPAMatchedRepository implements MatchedRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAMatchedRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override
    public CompletionStage<Matched> add(Matched Matched) {
        return supplyAsync(() -> wrap(em -> insert(em, Matched)), executionContext);
    }
    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }
    private Matched insert(EntityManager em, Matched Matched) {
        em.persist(Matched);
        return Matched;
    }
   /* public Stream<> findRide(String src,String dest) {
        try {
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
            EntityManager em = entityManagerFactory.createEntityManager();
            em.getTransaction().begin();

            List<Cride> find= em.createQuery("select c from Cride c where src=:src and dest=:dest", Cride.class).setParameter("src", src).setParameter("dest", dest).getResultList();
            return find.stream();
        } catch (NoResultException e) {
            return null;
        }


    }*/
   public Stream<Matched> History(String frollno) {
       try {
           EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
           EntityManager em = entityManagerFactory.createEntityManager();
           em.getTransaction().begin();

           List<Matched> find= em.createQuery("select m from Matched m where frollno=:frollno", Matched.class).setParameter("frollno", frollno).getResultList();
           return find.stream();
       } catch (NoResultException e) {
           return null;
       }


   }

    public Matched addRide(Matched Matched,Long cid,String src,String dest,String rollno,String  rtime,String rdate,Long phoneNumber,String name  ) {
        try {
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
            EntityManager em = entityManagerFactory.createEntityManager();
            add(Matched);
            em.getTransaction().begin();
            Matched find= em.createQuery("update Matched m set cid=:id where src=:src and dest=:dest and crollno=:crollno and rtime=:rtime and phoneNumber=:phoneNumber and rdate=:rdate", Matched.class)
                    .setParameter("cid", cid)
                    .setParameter("src", src)
                    .setParameter("dest", dest)
                    .setParameter("rollno", rollno)
                    .setParameter("rtime", rtime)
                    .setParameter("phoneNumber", phoneNumber)
                    .setParameter("rdate", rdate)
                    .getSingleResult();
            return find;
        } catch (NoResultException e) {
            return null;
        }


    }

    public Stream<Matched> rideDetails(Long cid) {
        try {
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
            EntityManager em = entityManagerFactory.createEntityManager();
            em.getTransaction().begin();

            List<Matched> find= em.createQuery("select m from Matched m where cid=:cid", Matched.class).setParameter("cid", cid).getResultList();
            return find.stream();
        } catch (NoResultException e) {
            return null;
        }


    }




}
