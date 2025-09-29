import { Github, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">ProxyCloud</h3>
            <p className="text-sm text-muted-foreground">Open source VPN for everyone</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/code3-dev/ProxyCloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/irdevs_dns"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="mailto:h3dev.pira@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 ProxyCloud. Open source and free forever.</p>
        </div>
      </div>
    </footer>
  )
}
