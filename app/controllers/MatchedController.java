package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Matched;
import models.MatchedRepository;
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
import java.util.stream.Collectors;
import java.util.stream.Stream;


public class MatchedController extends Controller {

    private final FormFactory formFactory;
    private final MatchedRepository MatchedRepository;
    private final HttpExecutionContext ec;
    public Long cid;
    @Inject
    public MatchedController(FormFactory formFactory, MatchedRepository MatchedRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.MatchedRepository =MatchedRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok(views.html.index.render());
    }

   public CompletionStage<Result> addMride() {
        Matched Mride=Json.fromJson(request().body().asJson(),Matched.class);
        return MatchedRepository.add(Mride).thenApplyAsync(p -> {
            return ok("Inserted");
        }, ec.current());
    }


    public Result History() {
        JsonNode j = request().body().asJson();
        String frollno = j.get("frollno").asText();
        Stream<Matched> ps = MatchedRepository.History(frollno);

        if (ps == null) {
            return badRequest("did not find");
        } else {
            // String s = "{ \"rollno\":\"" + ps.rollno+"\"}";
            return ok(toJson(ps.collect(Collectors.toList())));

        }

    }
    public Result rideDetails() {
        JsonNode j = request().body().asJson();
        String cid1 = j.get("cid").asText();
        Long cid=Long.parseLong(cid1);
        Stream<Matched> ps = MatchedRepository.rideDetails(cid);

        if (ps == null) {
            return badRequest("did not find");
        } else {
            // String s = "{ \"rollno\":\"" + ps.rollno+"\"}";
            return ok(toJson(ps.collect(Collectors.toList())));

        }

    }
}