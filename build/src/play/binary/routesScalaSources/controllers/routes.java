// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/macadmin/niharika/play-java-jpa-example/conf/routes
// @DATE:Tue Feb 25 11:41:30 IST 2020

package controllers;

import router.RoutesPrefix;

public class routes {
  
  public static final controllers.ReverseCrideController CrideController = new controllers.ReverseCrideController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseValidateController ValidateController = new controllers.ReverseValidateController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReversePersonController PersonController = new controllers.ReversePersonController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseAssets Assets = new controllers.ReverseAssets(RoutesPrefix.byNamePrefix());

  public static class javascript {
    
    public static final controllers.javascript.ReverseCrideController CrideController = new controllers.javascript.ReverseCrideController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseValidateController ValidateController = new controllers.javascript.ReverseValidateController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReversePersonController PersonController = new controllers.javascript.ReversePersonController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseAssets Assets = new controllers.javascript.ReverseAssets(RoutesPrefix.byNamePrefix());
  }

}
