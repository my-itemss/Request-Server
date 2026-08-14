Bun.serve({
  port: 3000, 
  fetch(req) {
    return new Response("Hi am a trial server");
  },
});

console.log("Server running on port 3000");
