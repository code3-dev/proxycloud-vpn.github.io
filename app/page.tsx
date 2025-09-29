import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Downloads } from "@/components/downloads"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="relative z-10">
        <Hero />
        <Features />
        <Downloads />
        <Footer />
      </div>
    </main>
  )
}
