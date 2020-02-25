// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/macadmin/niharika/play-java-jpa-example/conf/routes
// @DATE:Tue Feb 25 11:41:30 IST 2020

import play.api.routing.JavaScriptReverseRoute


import _root_.controllers.Assets.Asset

// @LINE:6
package controllers.javascript {

  // @LINE:12
  class ReverseCrideController(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:12
    def addCride: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.CrideController.addCride",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "addRide"})
        }
      """
    )
  
  }

  // @LINE:8
  class ReverseValidateController(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:8
    def getPerson: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ValidateController.getPerson",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "persons"})
        }
      """
    )
  
  }

  // @LINE:6
  class ReversePersonController(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:11
    def login1: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.login1",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "personDet"})
        }
      """
    )
  
    // @LINE:7
    def addPerson: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.addPerson",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "person"})
        }
      """
    )
  
    // @LINE:9
    def deletePersons: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.deletePersons",
      """
        function() {
          return _wA({method:"DELETE", url:"""" + _prefix + { _defaultPrefix } + """" + "delperson"})
        }
      """
    )
  
    // @LINE:6
    def index: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.index",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + """"})
        }
      """
    )
  
    // @LINE:10
    def login: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.login",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "personVal"})
        }
      """
    )
  
  }

  // @LINE:14
  class ReverseAssets(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:14
    def at: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Assets.at",
      """
        function(file1) {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "assets/" + (""" + implicitly[play.api.mvc.PathBindable[String]].javascriptUnbind + """)("file", file1)})
        }
      """
    )
  
  }


}
