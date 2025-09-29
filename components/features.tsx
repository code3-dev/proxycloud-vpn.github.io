import { Shield, Zap, Eye, Code, Lock, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with minimal latency for seamless browsing and streaming.",
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-yellow-400",
  },
  {
    icon: Globe,
    title: "Unlimited Access",
    description: "No bandwidth limits, no restrictions. Browse freely without any caps.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Advanced encryption protocols to keep your data safe from prying eyes.",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-400",
  },
  {
    icon: Eye,
    title: "Zero Logs Policy",
    description: "We don't track, collect, or store any of your browsing data. Ever.",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Fully transparent codebase. Audit our code and contribute to the project.",
    gradient: "from-indigo-500/10 to-blue-500/10",
    iconColor: "text-indigo-400",
  },
  {
    icon: Lock,
    title: "Always Free",
    description: "No hidden costs, no premium tiers. Full features available to everyone.",
    gradient: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-400",
  },
]

export function Features() {
  return (
    <section className="relative py-32 px-4 border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-balance bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            Privacy without compromise
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Everything you need in a VPN, with none of the drawbacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/10"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl`}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
