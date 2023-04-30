import concurrently from "concurrently";

(async () => {
  // Run both commands in parallel
  await concurrently([
    { command: "npm run dev" },
    { command: "cd server/ && npm  start" },
  ]);
})();
