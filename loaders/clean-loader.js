const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const core = require("@babel/core");
module.exports = function (content, map, meta) {
  const ast = parse(content, {
    sourceType: "module",
    strictMode: false,
  });

  traverse(ast, {
    CallExpression(path) {
      const memberExpression = path.node.callee;
      if (
        memberExpression.object &&
        memberExpression.object.name === "console"
      ) {
        path.remove();
      }
    },
  });
  const { code } = core.transformFromAst(ast);
  return Buffer.from(code);
};
