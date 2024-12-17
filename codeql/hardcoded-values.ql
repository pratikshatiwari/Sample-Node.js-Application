import java

/**
 * @name Hardcoded values
 * @description Identifies numeric or string literals that are hardcoded.
 * @kind problem
 * @id java-reliability-hardcoded-values
 * @severity warning
 */
from Literal l
where l.getParent() instanceof Stmt
select l, "Avoid hardcoding the value '" + l + "' to improve reliability and maintainability."
