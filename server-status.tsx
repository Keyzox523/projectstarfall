import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";
import type { ServerStatus as ServerStatusType } from "@shared/schema";

export function ServerStatus() {
  const { data: serverStatuses, isLoading, error } = useQuery<ServerStatusType[]>({
    queryKey: ["/api/server-status"],
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
        return <CheckCircle className="w-3 h-3" />;
      case "warning":
        return <Clock className="w-3 h-3" />;
      case "offline":
        return <AlertCircle className="w-3 h-3" />;
      default:
        return <AlertCircle className="w-3 h-3" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-success";
      case "warning":
        return "text-warning";
      case "offline":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "online":
        return "status-online";
      case "warning":
        return "status-warning";
      case "offline":
        return "status-offline";
      default:
        return "status-offline";
    }
  };

  const formatLatency = (latency: number | null) => {
    if (!latency) return "N/A";
    if (latency > 1000) {
      return `${(latency / 1000).toFixed(1)}s avg`;
    }
    return `${latency}ms avg`;
  };

  const getOverallStatus = () => {
    if (!serverStatuses) return { status: "unknown", message: "Loading..." };
    
    const hasOffline = serverStatuses.some(s => s.status === "offline");
    const hasWarning = serverStatuses.some(s => s.status === "warning");
    
    if (hasOffline) {
      return { status: "offline", message: "Some Services Offline" };
    }
    if (hasWarning) {
      return { status: "warning", message: "Some Services Degraded" };
    }
    return { status: "online", message: "All Systems Operational" };
  };

  const overallStatus = getOverallStatus();

  return (
    <section id="status" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-gaming font-bold text-4xl sm:text-5xl text-primary mb-4" data-testid="status-title">
            Server Status
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="status-subtitle">
            Real-time monitoring of all game services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="gaming-card p-8 rounded-xl"
          data-testid="status-container"
        >
          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center text-destructive">
              <AlertCircle className="mx-auto mb-2" size={48} />
              <p>Failed to load server status</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {serverStatuses?.map((server, index) => (
                  <motion.div
                    key={server.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                    data-testid={`server-${server.serverName.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`status-indicator ${getStatusBadgeColor(server.status)} w-3 h-3 rounded-full`}></div>
                      <div>
                        <h3 className="font-gaming font-semibold text-lg" data-testid={`server-name-${index}`}>
                          {server.serverName}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`font-semibold capitalize ${getStatusColor(server.status)}`} data-testid={`server-status-${index}`}>
                        {server.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Overall Status Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg border ${
                  overallStatus.status === "online"
                    ? "bg-success/10 border-success/20"
                    : overallStatus.status === "warning"
                    ? "bg-warning/10 border-warning/20"
                    : "bg-destructive/10 border-destructive/20"
                }`}
                data-testid="overall-status"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className={`status-indicator ${getStatusBadgeColor(overallStatus.status)} w-4 h-4 rounded-full`}></div>
                  <span className="font-gaming font-semibold text-lg" data-testid="overall-status-message">
                    {overallStatus.message}
                  </span>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-2" data-testid="last-updated">
                  Last updated: Just now
                </p>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
