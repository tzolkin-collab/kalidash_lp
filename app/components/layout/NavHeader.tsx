import { CHECKOUT_URL } from "@/app/utilities/constants";

export function NavHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 h-14">
      {/* Logo + separador + nav links */}
      <div className="flex items-center gap-5">
        <a href="/" className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-semibold text-white tracking-tight">Kalidash</span>
        </a>

        <span className="text-[rgba(255,255,255,0.2)] text-sm select-none">/</span>

        <div className="hidden sm:flex items-center gap-5">
          <a href="#escopo" className="text-xs font-medium text-[rgba(255,255,255,0.5)] hover:text-white transition-colors duration-150 tracking-wide uppercase">
            Programa
          </a>
          <a href="#mentores" className="text-xs font-medium text-[rgba(255,255,255,0.5)] hover:text-white transition-colors duration-150 tracking-wide uppercase">
            Mentores
          </a>
          <a href="#cronograma" className="text-xs font-medium text-[rgba(255,255,255,0.5)] hover:text-white transition-colors duration-150 tracking-wide uppercase">
            Cronograma
          </a>
        </div>
      </div>

      {/* Ações à direita */}
      <div className="flex items-center gap-3">
        <CountdownBadge />
        <a
          href={CHECKOUT_URL}
          className="px-4 py-1.5 rounded-md bg-[#7c3aed] text-white text-xs font-semibold hover:bg-[#6d28d9] transition-colors duration-150"
        >
          Garantir vaga
        </a>
      </div>
    </nav>
  );
}

/* Countdown inline no header — minimalista */
function CountdownBadge() {
  return (
    <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[rgba(255, 255, 255, 0.685)]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse shrink-0" />
      Lote 1 · R$ 497
    </span>
  );
}
