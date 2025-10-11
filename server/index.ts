import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const host = process.env.HOST || (process.platform === 'win32' ? '127.0.0.1' : '0.0.0.0');

  const port = parseInt(process.env.PORT || '5000', 10);

// Use the classic listen signature instead of the object form
server.listen(port, host, () => {
  log(`Server running at http://${host}:${port}`);
});

// Optional: handle errors gracefully
server.on('error', (err: NodeJS.ErrnoException) => {
  console.error('Server failed to start:', err);
  process.exit(1);
});
})();



app.post("/api/send-whatsapp", async (req: Request, res: Response) => {
  const { message, recipient } = req.body;

  const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN || "EAAQwXoigDUUBPt5u5RefohUEuw0lIHMVdaqetgiURZAJ1BXnpOPrjNij30qM3PPZBpTpSLAhLdqUMzvACN9e8phHzOTy7S52qrdsxUZBVFBtUmb0hy1GW0rZBbN1W6hArpZCSTCAge7xtmW6yFHXwZC0dkGZBYyKJMZAImoXqfsWko2ZAkgT9HZA4YEN7JvuwQxxRJBJASPZAD9p8VDnnyEQNwjIfP174woeSefrl9irWcit0X9PQZDZD";
  const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID || "759274677277571";

  try {
    await fetch(`https://graph.facebook.com/v17.0/${PHONE_NUMBER_ID}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: recipient,
        text: { body: message },
      }),
    });

    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});
