Bun.serve({  port: process.env.PORT || 3000, 
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response("Hi am a trial server");
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log("TypeScript trial server is active!");
