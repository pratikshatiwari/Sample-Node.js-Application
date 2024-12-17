import java

/**
 * @name Empty catch block
 * @description Detects empty catch blocks that suppress exceptions.
 * @kind problem
 * @id java-reliability-empty-catch
 * @severity warning
 */
from CatchClause c
where c.getBody().getNumStmt() = 0
select c, "Empty catch block may hide exceptions and reduce reliability."
