package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Cride;
import models.CrideRepository;
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

public class CrideController extends Controller {

    private final FormFactory formFactory;
    private final CrideRepository CrideRepository;
    private final HttpExecutionContext ec;

    @Inject
    public CrideController(FormFactory formFactory, CrideRepository CrideRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.CrideRepository =CrideRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok(views.html.index.render());
    }

    public CompletionStage<Result> addCride() {
        Cride Cride=Json.fromJson(request().body().asJson(),Cride.class);
        return CrideRepository.add(Cride).thenApplyAsync(p -> {
            return ok("Inserted");
        }, ec.current());
    }

}