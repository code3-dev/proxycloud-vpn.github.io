"use client"

import { Shield, Zap, Lock, Globe, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-50" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-12 flex justify-center animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/30 rounded-3xl blur-2xl" />
            <div className="relative w-24 h-24 bg-gradient-to-br from-accent to-accent/50 rounded-3xl flex items-center justify-center shadow-2xl shadow-accent/50">
              <Shield className="w-14 h-14 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-balance bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
          ProxyCloud
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { icon: Zap, text: "Fast", color: "from-yellow-500/20 to-orange-500/20" },
            { icon: Globe, text: "Unlimited", color: "from-blue-500/20 to-cyan-500/20" },
            { icon: Shield, text: "Safe", color: "from-green-500/20 to-emerald-500/20" },
            { icon: Lock, text: "Free", color: "from-purple-500/20 to-pink-500/20" },
          ].map((item, i) => (
            <div
              key={i}
              className={`group flex items-center gap-2 px-4 py-2 bg-gradient-to-br ${item.color} backdrop-blur-sm border border-border/50 rounded-full hover:border-accent/50 transition-all hover:scale-105`}
            >
              <item.icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-semibold">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 max-w-3xl mx-auto text-balance leading-relaxed font-light">
          Open source VPN for Android and Desktop
        </p>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 mb-14 max-w-2xl mx-auto text-balance leading-relaxed">
          No Ads. No logs. Your privacy is our priority.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button
            size="lg"
            className="group text-base sm:text-lg px-8 py-6 rounded-2xl bg-accent hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all hover:scale-105"
            onClick={() => {
              document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Download Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group text-base sm:text-lg px-8 py-6 rounded-2xl border-2 bg-transparent hover:bg-accent/10 hover:border-accent transition-all"
            onClick={() => {
              window.open('https://github.com/code3-dev/ProxyCloud', '_blank');
            }}
          >
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </Button>
        </div>

        <div className="mt-20 pt-12 border-t border-border/50">
          <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-6 font-semibold">
            Built with modern technology
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="group px-6 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-accent/50 transition-all">
              <span className="text-sm text-muted-foreground/80 font-medium">Android</span>
              <div className="text-base text-foreground mt-1 font-semibold">Flutter, Kotlin + Xray Core</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border/50" />
            <div className="group px-6 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-accent/50 transition-all">
              <span className="text-sm text-muted-foreground/80 font-medium">Desktop</span>
              <div className="text-base text-foreground mt-1 font-semibold">Electron + Hiddify/Warp Core</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
