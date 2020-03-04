// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/macadmin/niharika/play-java-jpa-example/conf/routes
// @DATE:Tue Feb 25 11:41:30 IST 2020

package router

import play.core.routing._
import play.core.routing.HandlerInvokerFactory._

import play.api.mvc._

import _root_.controllers.Assets.Asset

class Routes(
  override val errorHandler: play.api.http.HttpErrorHandler, 
  // @LINE:6
  PersonController_3: controllers.PersonController,
  // @LINE:8
  ValidateController_2: controllers.ValidateController,
  // @LINE:12
  CrideController_0: controllers.CrideController,
  // @LINE:14
  Assets_1: controllers.Assets,
  val prefix: String
) extends GeneratedRouter {

   @javax.inject.Inject()
   def this(errorHandler: play.api.http.HttpErrorHandler,
    // @LINE:6
    PersonController_3: controllers.PersonController,
    // @LINE:8
    ValidateController_2: controllers.ValidateController,
    // @LINE:12
    CrideController_0: controllers.CrideController,
    // @LINE:14
    Assets_1: controllers.Assets
  ) = this(errorHandler, PersonController_3, ValidateController_2, CrideController_0, Assets_1, "/")

  def withPrefix(prefix: String): Routes = {
    router.RoutesPrefix.setPrefix(prefix)
    new Routes(errorHandler, PersonController_3, ValidateController_2, CrideController_0, Assets_1, prefix)
  }

  private[this] val defaultPrefix: String = {
    if (this.prefix.endsWith("/")) "" else "/"
  }

  def documentation = List(
    ("""GET""", this.prefix, """controllers.PersonController.index()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """person""", """controllers.PersonController.addPerson()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """persons""", """controllers.ValidateController.getPerson()"""),
    ("""DELETE""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """delperson""", """controllers.PersonController.deletePersons()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """personVal""", """controllers.PersonController.login()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """personDet""", """controllers.PersonController.login1()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """addRide""", """controllers.CrideController.addCride()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """assets/""" + "$" + """file<.+>""", """controllers.Assets.at(path:String = "/public", file:String)"""),
    Nil
  ).foldLeft(List.empty[(String,String,String)]) { (s,e) => e.asInstanceOf[Any] match {
    case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
    case l => s ++ l.asInstanceOf[List[(String,String,String)]]
  }}


  // @LINE:6
  private[this] lazy val controllers_PersonController_index0_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix)))
  )
  private[this] lazy val controllers_PersonController_index0_invoker = createInvoker(
    PersonController_3.index(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "index",
      Nil,
      "GET",
      this.prefix + """""",
      """ Home page""",
      Seq()
    )
  )

  // @LINE:7
  private[this] lazy val controllers_PersonController_addPerson1_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("person")))
  )
  private[this] lazy val controllers_PersonController_addPerson1_invoker = createInvoker(
    PersonController_3.addPerson(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "addPerson",
      Nil,
      "POST",
      this.prefix + """person""",
      """""",
      Seq()
    )
  )

  // @LINE:8
  private[this] lazy val controllers_ValidateController_getPerson2_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("persons")))
  )
  private[this] lazy val controllers_ValidateController_getPerson2_invoker = createInvoker(
    ValidateController_2.getPerson(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ValidateController",
      "getPerson",
      Nil,
      "POST",
      this.prefix + """persons""",
      """""",
      Seq()
    )
  )

  // @LINE:9
  private[this] lazy val controllers_PersonController_deletePersons3_route = Route("DELETE",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("delperson")))
  )
  private[this] lazy val controllers_PersonController_deletePersons3_invoker = createInvoker(
    PersonController_3.deletePersons(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "deletePersons",
      Nil,
      "DELETE",
      this.prefix + """delperson""",
      """""",
      Seq()
    )
  )

  // @LINE:10
  private[this] lazy val controllers_PersonController_login4_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("personVal")))
  )
  private[this] lazy val controllers_PersonController_login4_invoker = createInvoker(
    PersonController_3.login(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "login",
      Nil,
      "POST",
      this.prefix + """personVal""",
      """""",
      Seq()
    )
  )

  // @LINE:11
  private[this] lazy val controllers_PersonController_login15_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("personDet")))
  )
  private[this] lazy val controllers_PersonController_login15_invoker = createInvoker(
    PersonController_3.login1(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "login1",
      Nil,
      "POST",
      this.prefix + """personDet""",
      """""",
      Seq()
    )
  )

  // @LINE:12
  private[this] lazy val controllers_CrideController_addCride6_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("addRide")))
  )
  private[this] lazy val controllers_CrideController_addCride6_invoker = createInvoker(
    CrideController_0.addCride(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.CrideController",
      "addCride",
      Nil,
      "POST",
      this.prefix + """addRide""",
      """""",
      Seq()
    )
  )

  // @LINE:14
  private[this] lazy val controllers_Assets_at7_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("assets/"), DynamicPart("file", """.+""",false)))
  )
  private[this] lazy val controllers_Assets_at7_invoker = createInvoker(
    Assets_1.at(fakeValue[String], fakeValue[String]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Assets",
      "at",
      Seq(classOf[String], classOf[String]),
      "GET",
      this.prefix + """assets/""" + "$" + """file<.+>""",
      """ Map static resources from the /public folder to the /assets URL path""",
      Seq()
    )
  )


  def routes: PartialFunction[RequestHeader, Handler] = {
  
    // @LINE:6
    case controllers_PersonController_index0_route(params@_) =>
      call { 
        controllers_PersonController_index0_invoker.call(PersonController_3.index())
      }
  
    // @LINE:7
    case controllers_PersonController_addPerson1_route(params@_) =>
      call { 
        controllers_PersonController_addPerson1_invoker.call(PersonController_3.addPerson())
      }
  
    // @LINE:8
    case controllers_ValidateController_getPerson2_route(params@_) =>
      call { 
        controllers_ValidateController_getPerson2_invoker.call(ValidateController_2.getPerson())
      }
  
    // @LINE:9
    case controllers_PersonController_deletePersons3_route(params@_) =>
      call { 
        controllers_PersonController_deletePersons3_invoker.call(PersonController_3.deletePersons())
      }
  
    // @LINE:10
    case controllers_PersonController_login4_route(params@_) =>
      call { 
        controllers_PersonController_login4_invoker.call(PersonController_3.login())
      }
  
    // @LINE:11
    case controllers_PersonController_login15_route(params@_) =>
      call { 
        controllers_PersonController_login15_invoker.call(PersonController_3.login1())
      }
  
    // @LINE:12
    case controllers_CrideController_addCride6_route(params@_) =>
      call { 
        controllers_CrideController_addCride6_invoker.call(CrideController_0.addCride())
      }
  
    // @LINE:14
    case controllers_Assets_at7_route(params@_) =>
      call(Param[String]("path", Right("/public")), params.fromPath[String]("file", None)) { (path, file) =>
        controllers_Assets_at7_invoker.call(Assets_1.at(path, file))
      }
  }
}
