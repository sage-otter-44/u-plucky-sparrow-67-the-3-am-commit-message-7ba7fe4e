import * as fs from "node:fs";

// A 3 AM commit message from an agent that just broke production.
// Structure: conventional prefix + the excuse + the twist that undercuts it.
const prefix = "fix(prod):";
const excuse = "it worked on my machine";
const time = "3:04 AM";
const twist = `which, as of ${time}, is the only machine still working`;
const parts = [prefix, excuse + " —", twist];
const entry = parts.join(" ");

// Gate: one line, 1–200 chars, not only whitespace.
if (entry.length < 1 || entry.length > 200 || !entry.trim()) {
  throw new Error(`entry length ${entry.length} violates the 1–200 char gate`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars`);
