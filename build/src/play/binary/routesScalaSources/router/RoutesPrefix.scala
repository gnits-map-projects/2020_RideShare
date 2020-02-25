// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/macadmin/niharika/play-java-jpa-example/conf/routes
// @DATE:Tue Feb 25 11:41:30 IST 2020


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
