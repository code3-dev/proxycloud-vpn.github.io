"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Smartphone, Monitor, Download, ExternalLink } from "lucide-react"

const androidDownloads = [
  {
    name: "Universal",
    arch: "All devices",
    url: "https://github.com/code3-dev/ProxyCloud/releases/latest/download/proxycloud-universal.apk",
  },
  {
    name: "ARM64-v8a",
    arch: "Modern 64-bit devices",
    url: "https://github.com/code3-dev/ProxyCloud/releases/latest/download/proxycloud-arm64-v8a.apk",
  },
  {
    name: "ARMeabi-v7a",
    arch: "Older 32-bit devices",
    url: "https://github.com/code3-dev/ProxyCloud/releases/latest/download/proxycloud-armeabi-v7a.apk",
  },
  {
    name: "x86_64",
    arch: "Intel/AMD devices",
    url: "https://github.com/code3-dev/ProxyCloud/releases/latest/download/proxycloud-x86_64.apk",
  },
]

const windowsDownloads = [
  {
    name: "Windows Installer",
    format: ".exe",
    url: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest/download/proxycloud-gui-win-x64.exe",
  },
  {
    name: "Windows Portable",
    format: ".exe",
    url: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest/download/proxycloud-gui-win-portable.exe",
  },
]

const macDownloads = [
  {
    name: "macOS Intel",
    format: ".dmg",
    arch: "x64",
    url: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest/download/proxycloud-gui-mac-x64.dmg",
  },
  {
    name: "macOS Apple Silicon",
    format: ".dmg",
    arch: "arm64",
    url: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest/download/proxycloud-gui-mac-arm64.dmg",
  },
  {
    name: "macOS Intel",
    format: ".zip",
    arch: "x64",
    url: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest/download/proxycloud-gui-mac-x64.zip",
  },
  {
    name: "macOS Apple Silicon",
    format: ".zip",
    arch: "arm64",
    url: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest/download/proxycloud-gui-mac-arm64.zip",
  },
]

const linuxDownloads = [
  {
    name: "Debian/Ubuntu",
    format: ".deb",
    url: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest/download/proxycloud-gui-linux-amd64.deb",
  },
  {
    name: "Fedora/RHEL",
    format: ".rpm",
    url: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest/download/proxycloud-gui-linux-x86_64.rpm",
  },
  {
    name: "AppImage",
    format: ".AppImage",
    url: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest/download/proxycloud-gui-linux-x86_64.AppImage",
  },
  {
    name: "Tarball",
    format: ".tar.gz",
    url: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest/download/proxycloud-gui-linux-x64.tar.gz",
  },
]

export function Downloads() {
  const [activeTab, setActiveTab] = useState<"android" | "desktop">("android")
  const [activeCardIndices, setActiveCardIndices] = useState<Set<string>>(new Set())

  const handleTouchStart = (index: string) => {
    setActiveCardIndices(prev => {
      const newSet = new Set(prev)
      newSet.add(index)
      return newSet
    })
  }

  const handleMouseEnter = (index: string) => {
    setActiveCardIndices(prev => {
      const newSet = new Set(prev)
      newSet.add(index)
      return newSet
    })
  }

  const handleMouseLeave = () => {
    setActiveCardIndices(new Set())
  }

  const handleBlur = () => {
    setActiveCardIndices(new Set())
  }

  return (
    <section id="downloads" className="relative py-32 px-4 border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-balance bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            Download ProxyCloud
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">Available for all your devices</p>
        </div>

        <div className="flex justify-center gap-4 mb-20">
          <Button
            size="lg"
            variant={activeTab === "android" ? "default" : "outline"}
            onClick={() => setActiveTab("android")}
            className={`gap-2 px-8 py-6 rounded-2xl text-lg transition-all ${activeTab === "android"
              ? "bg-accent hover:bg-accent/90 shadow-lg shadow-accent/25"
              : "hover:bg-accent/10 hover:border-accent"
              }`}
          >
            <Smartphone className="w-5 h-5" />
            Android
          </Button>
          <Button
            size="lg"
            variant={activeTab === "desktop" ? "default" : "outline"}
            onClick={() => setActiveTab("desktop")}
            className={`gap-2 px-8 py-6 rounded-2xl text-lg transition-all ${activeTab === "desktop"
              ? "bg-accent hover:bg-accent/90 shadow-lg shadow-accent/25"
              : "hover:bg-accent/10 hover:border-accent"
              }`}
          >
            <Monitor className="w-5 h-5" />
            Desktop
          </Button>
        </div>

        {/* Android Downloads */}
        {activeTab === "android" && (
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {androidDownloads.map((download, i) => (
                <a
                  key={i}
                  href={download.url}
                  className={`group flex items-center justify-between p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl transition-all ${activeCardIndices.has(`android-${i}`)
                    ? 'border-accent/50 scale-[1.02] shadow-xl shadow-accent/10'
                    : 'hover:border-accent/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10'
                    }`}
                  onTouchStart={() => handleTouchStart(`android-${i}`)}
                  onMouseEnter={() => handleMouseEnter(`android-${i}`)}
                  onMouseLeave={handleMouseLeave}
                  onBlur={handleBlur}
                  tabIndex={0}
                >
                  <div>
                    <h3 className={`text-xl font-bold mb-2 transition-colors ${activeCardIndices.has(`android-${i}`)
                      ? 'text-accent'
                      : 'group-hover:text-accent'
                      }`}>
                      {download.name}
                    </h3>
                    <p className="text-base text-muted-foreground">{download.arch}</p>
                  </div>
                  <Download className={`w-6 h-6 text-muted-foreground transition-all ${activeCardIndices.has(`android-${i}`)
                    ? 'text-accent scale-110'
                    : 'group-hover:text-accent group-hover:scale-110'
                    }`} />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Desktop Downloads */}
        {activeTab === "desktop" && (
          <div className="max-w-6xl mx-auto space-y-16">
            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <span className="text-5xl">🪟</span>
                <span>Windows</span>
              </h3>
              <div className="grid gap-4">
                {windowsDownloads.map((download, i) => (
                  <a
                    key={i}
                    href={download.url}
                    className={`group flex items-center justify-between p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl transition-all ${activeCardIndices.has(`windows-${i}`)
                      ? 'border-accent/50 scale-[1.02] shadow-xl shadow-accent/10'
                      : 'hover:border-accent/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10'
                      }`}
                    onTouchStart={() => handleTouchStart(`windows-${i}`)}
                    onMouseEnter={() => handleMouseEnter(`windows-${i}`)}
                    onMouseLeave={handleMouseLeave}
                    onBlur={handleBlur}
                    tabIndex={0}
                  >
                    <div>
                      <h4 className={`text-xl font-bold mb-2 transition-colors ${activeCardIndices.has(`windows-${i}`)
                        ? 'text-accent'
                        : 'group-hover:text-accent'
                        }`}>
                        {download.name}
                      </h4>
                      <p className="text-base text-muted-foreground">{download.format}</p>
                    </div>
                    <Download className={`w-6 h-6 text-muted-foreground transition-all ${activeCardIndices.has(`windows-${i}`)
                      ? 'text-accent scale-110'
                      : 'group-hover:text-accent group-hover:scale-110'
                      }`} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <span className="text-5xl">🍎</span>
                <span>macOS</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {macDownloads.map((download, i) => (
                  <a
                    key={i}
                    href={download.url}
                    className={`group flex items-center justify-between p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl transition-all ${activeCardIndices.has(`mac-${i}`)
                      ? 'border-accent/50 scale-[1.02] shadow-xl shadow-accent/10'
                      : 'hover:border-accent/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10'
                      }`}
                    onTouchStart={() => handleTouchStart(`mac-${i}`)}
                    onMouseEnter={() => handleMouseEnter(`mac-${i}`)}
                    onMouseLeave={handleMouseLeave}
                    onBlur={handleBlur}
                    tabIndex={0}
                  >
                    <div>
                      <h4 className={`text-lg font-bold mb-2 transition-colors ${activeCardIndices.has(`mac-${i}`)
                        ? 'text-accent'
                        : 'group-hover:text-accent'
                        }`}>
                        {download.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {download.format} • {download.arch}
                      </p>
                    </div>
                    <Download className={`w-6 h-6 text-muted-foreground transition-all ${activeCardIndices.has(`mac-${i}`)
                      ? 'text-accent scale-110'
                      : 'group-hover:text-accent group-hover:scale-110'
                      }`} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <span className="text-5xl">🐧</span>
                <span>Linux</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {linuxDownloads.map((download, i) => (
                  <a
                    key={i}
                    href={download.url}
                    className={`group flex items-center justify-between p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl transition-all ${activeCardIndices.has(`linux-${i}`)
                      ? 'border-accent/50 scale-[1.02] shadow-xl shadow-accent/10'
                      : 'hover:border-accent/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10'
                      }`}
                    onTouchStart={() => handleTouchStart(`linux-${i}`)}
                    onMouseEnter={() => handleMouseEnter(`linux-${i}`)}
                    onMouseLeave={handleMouseLeave}
                    onBlur={handleBlur}
                    tabIndex={0}
                  >
                    <div>
                      <h4 className={`text-lg font-bold mb-2 transition-colors ${activeCardIndices.has(`linux-${i}`)
                        ? 'text-accent'
                        : 'group-hover:text-accent'
                        }`}>
                        {download.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{download.format}</p>
                    </div>
                    <Download className={`w-6 h-6 text-muted-foreground transition-all ${activeCardIndices.has(`linux-${i}`)
                      ? 'text-accent scale-110'
                      : 'group-hover:text-accent group-hover:scale-110'
                      }`} />
                  </a>
                ))}
              </div>

              <div className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/30 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  Arch Linux (AUR)
                  <a
                    href="https://aur.archlinux.org/packages/proxycloud-gui-bin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <ExternalLink className="w-5 h-5 text-accent" />
                  </a>
                </h4>
                <p className="text-base text-muted-foreground mb-6">Install using your preferred AUR helper:</p>
                <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl font-mono text-sm border border-border/50">
                  <code className="text-accent font-semibold">paru -S proxycloud-gui-bin</code>
                  <br />
                  <span className="text-muted-foreground/60"># or</span>
                  <br />
                  <code className="text-accent font-semibold">yay -S proxycloud-gui-bin</code>
                </div>
                <a
                  href="https://aur.archlinux.org/packages/proxycloud-gui-bin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-accent hover:underline"
                >
                  View on AUR
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}