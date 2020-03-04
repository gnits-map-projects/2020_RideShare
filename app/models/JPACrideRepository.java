package models;

import play.db.jpa.JPAApi;
import models.JPAMatchedRepository;
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
public  class JPACrideRepository implements CrideRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;
    private final JPAMatchedRepository JPAMatchedRepository;

    @Inject
    public JPACrideRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext,JPAMatchedRepository JPAMatchedRepository) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
        this.JPAMatchedRepository=JPAMatchedRepository;
    }

    @Override
    public CompletionStage<Cride> add(Cride Cride) {
        return supplyAsync(() -> wrap(em -> insert(em, Cride)), executionContext);
    }
    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }
    private Cride insert(EntityManager em, Cride Cride) {
        em.persist(Cride);

        return Cride;
    }
    public Stream<Cride> findRide(String src,String dest) {
        try {
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
            EntityManager em = entityManagerFactory.createEntityManager();
            em.getTransaction().begin();

            List<Cride> find= em.createQuery("select c from Cride c where src=:src and dest=:dest", Cride.class).setParameter("src", src).setParameter("dest", dest).getResultList();
            return find.stream();
        } catch (NoResultException e) {
            return null;
        }


    }

//    public Cride addRide(Cride Cride,String src,String dest,String rollno,String  rtime,String rdate,Long phoneNumber,String name ) {
//        try {
//            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
//           EntityManager em = entityManagerFactory.createEntityManager();
//           add(Cride);
//           em.getTransaction().begin();
//           Cride find= em.createQuery("select c from Cride c where src=:src and dest=:dest and rollno=:rollno and rtime=:rtime and phoneNumber=:phoneNumber and rdate=:rdate", Cride.class)
//                   .setParameter("src", src)
//                   .setParameter("dest", dest)
//                   .setParameter("rollno", rollno)
//                   .setParameter("rtime", rtime)
//                   .setParameter("phoneNumber", phoneNumber)
//                   .setParameter("rdate", rdate)
//                   .getSingleResult();
//            return find;
//        } catch (NoResultException e) {
//            return null;
//        }
//
//
//    }
   @Override
    public Cride addRide(Cride Cride,String src,String dest,String rollno,String  rtime,String rdate,Long phoneNumber,String name ) {
        try {
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
            EntityManager em = entityManagerFactory.createEntityManager();
            Cride c= insert(em,Cride);
            add(Cride);
            //em.getTransaction().begin();
            // if(c.id !=0) {
                 Cride f = em.createQuery("select c from Cride c where src=:src and dest=:dest and rollno=:rollno and rtime=:rtime and phoneNumber=:phoneNumber and rdate=:rdate", Cride.class)
                         .setParameter("src", src)
                         .setParameter("dest", dest)
                         .setParameter("rollno", rollno)
                         .setParameter("rtime", rtime)
                         .setParameter("phoneNumber", phoneNumber)
                         .setParameter("rdate", rdate)
                         .getSingleResult();

//            Matched m=new Matched();
//            m.cid=f.id;
//            m.frollno=f.rollno;
//            m.crollno=f.rollno;
//            m.rdate=f.rdate;
//            m.rtime=f.rtime;
//            m.src=f.src;
//            m.tname=f.name;
//            m.dest=f.dest;
//            m.cname=f.name;
//            m.phoneNumber=f.phoneNumber;
//            em.persist(m);
                 return f;

            // }
            //return null;
        }

        catch (Exception e) {
            return null;
        }


    }


    }
