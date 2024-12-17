import java
import semmle.code.java.dataflow.DataFlow

/**
 * @name Unclosed resources
 * @description Identifies resources that are not properly closed.
 * @kind problem
 * @id java-reliability-unclosed-resources
 * @severity error
 */
class LeakedResource extends DataFlow::Node {
  LeakedResource() {
    exists(Expr e | e.getType().hasQualifiedName("java.io", "Closeable") |
      this.asExpr() = e
    )
  }
}

from LeakedResource r
where not exists(r.getASuccessor*().(MethodAccess ma | ma.getMethod().hasName("close")))
select r, "Resource '" + r + "' is not closed properly, leading to potential resource leaks."
