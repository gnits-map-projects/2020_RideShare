package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Person;
import models.PersonRepository;
import play.Logger;
import play.data.FormFactory;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Result;
import models.ValidateRepository;

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
        JsonNode json = request().body().asJson();
        String rollno = json.get("rollno").asText();
        //System.out.println("Name:"+name);
        //Person person = new Person() ;
        //person.setName(name);
        String phoneNumber1=json.get("phoneNumber").asText();
        Long phoneNumber= Long.parseLong(phoneNumber1);
        Person person=Json.fromJson(request().body().asJson(),Person.class);

        return personRepository.add(person).thenApplyAsync(p -> {

          //return redirect(routes.PersonController.index());
            return ok("authenticated");
        }
        , ec.current());
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
    public Result login() {
    JsonNode j=request().body().asJson();
    String Rollno=j.get("rollno").asText();
    String password=j.get("pswd").asText();
    Person ps=personRepository.login(Rollno,password);
       if(ps==null){
           return badRequest("Invalid credentials!!");
    }
        else{
            //String s = "{\'rollno\':'+ps.rollno+'}";
           return ok((ps.rollno));//Json.parse(s));

    }

}



    /*public CompletionStage<Result> profile(){
        JsonNode j=request().body().asJson();
        String username=j.get("name").asText();
        String password=j.get("pswd").asText();
        return personRepository.listuser(username,password).thenApplyAsync(personStream -> {
            return ok(toJson(personStream.collect(Collectors.toList())));
        }, ec.current());
    }*/

    public Result login1() {
        JsonNode j = request().body().asJson();
        String rollno = j.get("rollno").asText();
        Person ps = personRepository.login1(rollno);

        if (ps == null) {
            return ok("not a valid user");
        } else {
            String s = "{\"email\":\"" + ps.email + "\", \"name\":\"" + ps.name + "\",\"phone\":\"" + ps.phoneNumber+ "\", \"rollno\":\"" + ps.rollno+"\" , \"age\":\"" + ps.age+"\" , \"gender\":\"" + ps.gender+"\" }";
            return ok(s);
        }

    }

   /* public Result update(){
        JsonNode j = request().body().asJson();
        String rollno = j.get("rollno").asText();
        System.out.println(rollno);
        String name = j.get("name").asText();
        String email = j.get("email").asText();
        String age1 = j.get("age").asText();
        int age = Integer.parseInt(age1);
        String phone1 = j.get("phoneNumber").asText();
        Long phoneNumber = Long.parseLong(phone1);
        String gender = j.get("gender").asText();
        String pswd = j.get("pswd").asText();
        String ps = personRepository.update(rollno,name,email,age,phoneNumber,gender,pswd);
        return ok(ps);

    }*/
   public CompletionStage<Result> updatePerson() {
       JsonNode j=request().body().asJson();
       String rollno=j.get("rollno").asText();
       String name = j.get("name").asText();
       String email = j.get("email").asText();
       String age1 = j.get("age").asText();
       int age = Integer.parseInt(age1);
       String phone1 = j.get("phoneNumber").asText();
       Long phoneNumber = Long.parseLong(phone1);
       String gender = j.get("gender").asText();
       String pswd = j.get("pswd").asText();
       return personRepository.update(rollno,name,email,age,phoneNumber,gender,pswd).thenApplyAsync(ps -> {
           //return redirect(routes.PersonController.index());
           String s="{\"email\":\""+ps.email+"\", \"name\":\""+ps.name+"\",\"phone\":\""+ps.phoneNumber+"\"}";
           return ok();
       }, ec.current());
   }

    public Result checkRollno() {
        JsonNode j = request().body().asJson();
        String rollno = j.get("rollno").asText();
        Person ps = personRepository.checkRollno(rollno);

        if (ps == null) {
            return badRequest("not a valid");
        } else {
            String s = "{ \"rollno\":\"" + ps.rollno+"\"}";
            return ok(s);
        }

    }



}
