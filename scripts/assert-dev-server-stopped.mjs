import net from "node:net";

const PORT = Number(process.env.PORT || 3000);

function portInUse(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(true));
    server.once("listening", () => {
      server.close(() => resolve(false));
    });
    server.listen(port, "127.0.0.1");
  });
}

/** @returns {Promise<void>} */
export async function assertDevServerStopped() {
  const busy = await portInUse(PORT);
  if (busy) {
    console.error("");
    console.error("Stop the Next.js dev server first (Ctrl+C in the dev terminal).");
    console.error(
      "Building while `npm run dev` is running corrupts `.next` and causes 500 / missing chunk errors.",
    );
    console.error("");
    console.error("Then run:  npm run clean  &&  npm run build");
    console.error("Or restart dev with:  npm run dev:clean");
    console.error("");
    process.exit(1);
  }
}
