import { type User, type InsertUser, type ServerStatus, type InsertServerStatus, type Download, type InsertDownload } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getServerStatuses(): Promise<ServerStatus[]>;
  getServerStatus(id: string): Promise<ServerStatus | undefined>;
  createServerStatus(status: InsertServerStatus): Promise<ServerStatus>;
  updateServerStatus(id: string, updates: Partial<InsertServerStatus>): Promise<ServerStatus | undefined>;
  
  getDownloads(): Promise<Download[]>;
  getActiveDownloads(): Promise<Download[]>;
  createDownload(download: InsertDownload): Promise<Download>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private serverStatuses: Map<string, ServerStatus>;
  private downloads: Map<string, Download>;

  constructor() {
    this.users = new Map();
    this.serverStatuses = new Map();
    this.downloads = new Map();
    
    // Initialize with default server statuses
    this.initializeServerStatuses();
    this.initializeDownloads();
  }

  private initializeServerStatuses() {
    const defaultStatuses: InsertServerStatus[] = [
      {
        serverName: "EU Servers",
        status: "online",
        latency: 23,
        playerCount: 1247,
        isActive: true,
      },
      {
        serverName: "NA Servers",
        status: "online",
        latency: 18,
        playerCount: 2156,
        isActive: true,
      },
      {
        serverName: "Matchmaker",
        status: "warning",
        latency: 2300,
        playerCount: 34,
        isActive: true,
      },
      {
        serverName: "Backend",
        status: "online",
        latency: 5,
        playerCount: 0,
        isActive: true,
      },
    ];

    defaultStatuses.forEach(status => {
      const id = randomUUID();
      const serverStatus: ServerStatus = {
        ...status,
        id,
        lastUpdated: new Date(),
        latency: status.latency ?? null,
        playerCount: status.playerCount ?? null,
        isActive: status.isActive ?? null,
      };
      this.serverStatuses.set(id, serverStatus);
    });
  }

  private initializeDownloads() {
    const defaultDownloads: InsertDownload[] = [
      {
        version: "12.41",
        downloadUrl: "https://linkvertise.com/1300459/jpBuxeT67box?o=sharing",
        fileSize: "85 GB",
        description: "The authentic Chapter 2 Season 2 experience",
        isActive: true,
      },
      {
        version: "Legacy Launcher",
        downloadUrl: "https://raw.githubusercontent.com/Adinnyk/Starfall-Downloads/refs/heads/main/starfall%20Launcher_0.0.1_x64_en-US%20(1).msi",
        fileSize: "4.8 MB",
        description: "Classic launcher with additional features",
        isActive: true,
      },
    ];

    defaultDownloads.forEach(download => {
      const id = randomUUID();
      const downloadRecord: Download = {
        ...download,
        id,
        createdAt: new Date(),
        description: download.description ?? null,
        fileSize: download.fileSize ?? null,
        isActive: download.isActive ?? null,
      };
      this.downloads.set(id, downloadRecord);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getServerStatuses(): Promise<ServerStatus[]> {
    return Array.from(this.serverStatuses.values()).filter(status => status.isActive);
  }

  async getServerStatus(id: string): Promise<ServerStatus | undefined> {
    return this.serverStatuses.get(id);
  }

  async createServerStatus(status: InsertServerStatus): Promise<ServerStatus> {
    const id = randomUUID();
    const serverStatus: ServerStatus = {
      ...status,
      id,
      lastUpdated: new Date(),
      latency: status.latency ?? null,
      playerCount: status.playerCount ?? null,
      isActive: status.isActive ?? null,
    };
    this.serverStatuses.set(id, serverStatus);
    return serverStatus;
  }

  async updateServerStatus(id: string, updates: Partial<InsertServerStatus>): Promise<ServerStatus | undefined> {
    const existing = this.serverStatuses.get(id);
    if (!existing) return undefined;

    const updated: ServerStatus = {
      ...existing,
      ...updates,
      lastUpdated: new Date(),
    };
    this.serverStatuses.set(id, updated);
    return updated;
  }

  async getDownloads(): Promise<Download[]> {
    return Array.from(this.downloads.values());
  }

  async getActiveDownloads(): Promise<Download[]> {
    return Array.from(this.downloads.values()).filter(download => download.isActive);
  }

  async createDownload(download: InsertDownload): Promise<Download> {
    const id = randomUUID();
    const downloadRecord: Download = {
      ...download,
      id,
      createdAt: new Date(),
      description: download.description ?? null,
      fileSize: download.fileSize ?? null,
      isActive: download.isActive ?? null,
    };
    this.downloads.set(id, downloadRecord);
    return downloadRecord;
  }
}

export const storage = new MemStorage();
