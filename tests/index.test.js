import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Solana Student Election exposes project metadata", () => {
  assert.equal(project.slug, "solana-student-election");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
