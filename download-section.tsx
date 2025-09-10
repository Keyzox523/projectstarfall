import { motion } from "framer-motion";
import { Download, Rocket, Cpu, HardDrive, Monitor, MemoryStick } from "lucide-react";

export function DownloadSection() {
  const downloads = [
    {
      version: "12.41",
      downloadUrl: "https://linkvertise.com/1300459/jpBuxeT67box?o=sharing",
      fileSize: "85 GB",
      description: "The authentic Chapter 2 Season 2 experience",
    },
    {
      version: "Legacy Launcher",
      downloadUrl: "https://raw.githubusercontent.com/Adinnyk/Starfall-Downloads/refs/heads/main/starfall%20Launcher_0.0.1_x64_en-US%20(1).msi",
      fileSize: "4.8 MB",
      description: "Classic launcher with additional features",
    },
  ];

  const handleDownload = (version: string) => {
    const download = downloads.find(d => d.version === version);
    if (download?.downloadUrl) {
      window.open(download.downloadUrl, '_blank');
    }
  };

  const version1241 = downloads.find(d => d.version === "12.41");
  const legacyLauncher = downloads.find(d => d.version === "Legacy Launcher");

  return (
    <section id="download" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-gaming font-bold text-4xl sm:text-5xl text-primary mb-4" data-testid="download-title">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="download-subtitle">
            Select the version that suits your gaming setup
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Version 12.41 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="gaming-card neon-border p-8 rounded-xl text-center group"
              data-testid="download-1241"
            >
              <div className="mb-6">
                <Download className="text-4xl text-primary mb-4 mx-auto group-hover:animate-bounce" />
                <h3 className="font-gaming font-bold text-2xl mb-2">Version 12.41</h3>
                <p className="text-muted-foreground mb-4">{version1241?.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Stable</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Recommended</span>
                  <span className="bg-success/20 text-success px-3 py-1 rounded-full text-sm">Updated</span>
                </div>
              </div>
              <button
                onClick={() => handleDownload("12.41")}
                className="download-button w-full py-4 px-6 rounded-lg font-gaming font-bold text-lg text-primary-foreground hover:shadow-lg transition-all duration-300"
                data-testid="button-download-1241"
              >
                <Download className="inline mr-2" size={20} />
                Download 12.41
              </button>
              <p className="text-xs text-muted-foreground mt-4">
                Windows 10/11 • {version1241?.fileSize}
              </p>
            </motion.div>

            {/* Legacy Launcher */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="gaming-card p-8 rounded-xl text-center group"
              data-testid="download-legacy"
            >
              <div className="mb-6">
                <Rocket className="text-4xl text-secondary mb-4 mx-auto group-hover:animate-bounce" />
                <h3 className="font-gaming font-bold text-2xl mb-2">Legacy Launcher</h3>
                <p className="text-muted-foreground mb-4">{legacyLauncher?.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">Legacy</span>
                  <span className="bg-warning/20 text-warning px-3 py-1 rounded-full text-sm">Beta</span>
                </div>
              </div>
              <button
                onClick={() => handleDownload("Legacy Launcher")}
                className="bg-secondary hover:bg-secondary/80 w-full py-4 px-6 rounded-lg font-gaming font-bold text-lg text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
                data-testid="button-download-legacy"
              >
                <Rocket className="inline mr-2" size={20} />
                Download Legacy Launcher
              </button>
              <p className="text-xs text-muted-foreground mt-4">
                Windows 10/11 • {legacyLauncher?.fileSize}
              </p>
            </motion.div>
          </div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="gaming-card p-8 rounded-xl mt-12 max-w-4xl mx-auto"
          data-testid="system-requirements"
        >
          <h3 className="font-gaming font-bold text-xl mb-6 text-center">System Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-primary mb-3">Minimal Configuration</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Cpu className="w-4 h-4 mr-2 text-primary" />
                  Intel Core i3-3225 / AMD A10-7800
                </li>
                <li className="flex items-center">
                  <MemoryStick className="w-4 h-4 mr-2 text-primary" />
                  4 GB RAM
                </li>
                <li className="flex items-center">
                  <Monitor className="w-4 h-4 mr-2 text-primary" />
                  Intel HD 4000 / AMD Radeon HD 7870
                </li>
                <li className="flex items-center">
                  <HardDrive className="w-4 h-4 mr-2 text-primary" />
                  90 GB available space
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-3">Recommended (Chapter 2)</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Cpu className="w-4 h-4 mr-2 text-accent" />
                  Intel Core i5-7300U / AMD Ryzen 5 2600
                </li>
                <li className="flex items-center">
                  <MemoryStick className="w-4 h-4 mr-2 text-accent" />
                  16 GB RAM
                </li>
                <li className="flex items-center">
                  <Monitor className="w-4 h-4 mr-2 text-accent" />
                  NVIDIA GTX 1060 / AMD RX 580
                </li>
                <li className="flex items-center">
                  <HardDrive className="w-4 h-4 mr-2 text-accent" />
                  90 GB SSD space
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
