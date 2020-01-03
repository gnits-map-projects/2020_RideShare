package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Person;
import models.PersonRepository;
import play.Logger;
import play.data.FormFactory;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;

import static play.libs.Json.toJson;
import static java.util.concurrent.CompletableFuture.supplyAsync;
import play.libs.Json;

/**
 * The controller keeps all database operations behind the repository, and uses
 * {@link play.libs.concurrent.HttpExecutionContext} to provide access to the
 * {@link play.mvc.Http.Context} methods like {@code request()} and {@code flash()}.
 */
public class PersonController extends Controller {

    private final FormFactory formFactory;
    private final PersonRepository personRepository;
    private final HttpExecutionContext ec;

    @Inject
    public PersonController(FormFactory formFactory, PersonRepository personRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.personRepository = personRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok(views.html.index.render());
    }

    public CompletionStage<Result> addPerson() {
        //JsonNode json = request().body().asJson();
       // String name = json.get("name").asText();
        //System.out.println("Name:"+name);
        //Person person = new Person() ;
        //person.setName(name);
        Person person=Json.fromJson(request().body().asJson(),Person.class);
        return personRepository.add(person).thenApplyAsync(p -> {
          //return redirect(routes.PersonController.index());
            return ok();
        }, ec.current());
    }
    public CompletionStage<Result> getPersons() {

        return personRepository.list().thenApplyAsync(personStream -> {
            return ok(toJson(personStream.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> deletePersons() {
        JsonNode json = request().body().asJson();
        String name = json.get("name").asText();
        //System.out.println("Name:"+name);
        //Person person = new Person() ;
        //person.setName(name);
        return personRepository.del(name).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok("deleted "+name);
        }, ec.current());
    }

}
