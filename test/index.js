import test from "tape"
import deepstreamioServerClientPlugin from "../src"

test("deepstreamioServerClientPlugin", (t) => {
  t.plan(1)
  t.equal(true, deepstreamioServerClientPlugin(), "return true")
})
