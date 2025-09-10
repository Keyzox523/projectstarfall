import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertServerStatusSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Server status endpoints
  app.get("/api/server-status", async (req, res) => {
    try {
      const statuses = await storage.getServerStatuses();
      res.json(statuses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch server statuses" });
    }
  });

  app.get("/api/server-status/:id", async (req, res) => {
    try {
      const status = await storage.getServerStatus(req.params.id);
      if (!status) {
        return res.status(404).json({ message: "Server status not found" });
      }
      res.json(status);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch server status" });
    }
  });

  app.put("/api/server-status/:id", async (req, res) => {
    try {
      const validation = insertServerStatusSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid server status data", errors: validation.error.errors });
      }

      const updated = await storage.updateServerStatus(req.params.id, validation.data);
      if (!updated) {
        return res.status(404).json({ message: "Server status not found" });
      }
      res.json(updated);
    } catch (error) {
      res.status(500).json({ message: "Failed to update server status" });
    }
  });

  // Downloads endpoints
  app.get("/api/downloads", async (req, res) => {
    try {
      const downloads = await storage.getActiveDownloads();
      res.json(downloads);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch downloads" });
    }
  });

  // Simulate download endpoint
  app.post("/api/downloads/:version/initiate", async (req, res) => {
    try {
      const { version } = req.params;
      const downloads = await storage.getActiveDownloads();
      const download = downloads.find(d => d.version === version);
      
      if (!download) {
        return res.status(404).json({ message: "Download version not found" });
      }

      // In a real implementation, this would handle actual file serving
      // For now, we just return the download info
      res.json({ 
        message: "Download initiated",
        downloadUrl: download.downloadUrl,
        version: download.version,
        fileSize: download.fileSize
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to initiate download" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}
