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

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public  class JPAPersonRepository implements PersonRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAPersonRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override
    public CompletionStage<Person> add(Person person) {
        return supplyAsync(() -> wrap(em -> insert(em, person)), executionContext);
    }
    @Override
    public CompletionStage<Person> del(String name) {
        return supplyAsync(() -> wrap(em -> delete(em, name)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Person>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Person insert(EntityManager em, Person person) {
        em.persist(person);
        return person;
    }

    private Stream<Person> list(EntityManager em) {
        List<Person> persons = em.createQuery("select p from Person p", Person.class).getResultList();
        return persons.stream();
    }
    private Person delete(EntityManager em,String name) {
        Person foundPerson = em.createQuery("select p from Person p where name=:name",Person.class).setParameter("name", name).getSingleResult();
        em.remove(foundPerson);
        return foundPerson;

    }
    @Override
    public Person login(String rollno,String pswd) {
        try{
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
            EntityManager em= entityManagerFactory.createEntityManager();
            em.getTransaction().begin();

            Person foundPerson = em.createQuery("select p from Person p where rollno=:rollno and pswd=:pswd",Person.class).setParameter("rollno", rollno).setParameter("pswd", pswd).getSingleResult();
            //em.remove(foundPerson);
            return foundPerson;
        }
        catch(NoResultException e){
            return null;
        }



    }

    public Person login1(String rollno) {
        try{
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
            EntityManager em= entityManagerFactory.createEntityManager();
            em.getTransaction().begin();

            Person PersonProfile = em.createQuery("select p from Person p where rollno=:rollno",Person.class).setParameter("rollno", rollno).getSingleResult();
            //em.remove(foundPerson);getSingleResult();
            //em.remove(foundPerson);
            return PersonProfile;
        }
        catch(NoResultException e){
            return null;
        }



    }
}
