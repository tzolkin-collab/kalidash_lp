import { FadeIn } from "@/app/components/effects/FadeIn";
import { BlurText } from "@/app/components/effects/BlurText";
import { CHECKOUT_URL } from "@/app/utilities/constants";

const INCLUDED = [
  "Acesso completo às 9h de Imersão Presencial",
  "Welcome Coffee + Coffee Break completo",
  "Material de apoio e frameworks exclusivos",
  "Certificado de Participação Oficial Kalidash",
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function InvestmentSection() {
  return (
    <section id="investimento" className="relative py-24 sm:py-32">

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)" }}
      />

      {/* Beam sutil de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <FadeIn fromY={12} duration={600}>
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Investimento
            </p>
          </FadeIn>
          <h2
            className="text-[clamp(28px,4vw,52px)] font-extrabold text-white"
            style={{ lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            <BlurText text="Uma estrutura de milhares" wordDelay={45} duration={650} />
            <br />
            <BlurText text="por um investimento único." wordDelay={45} duration={650} className="[color:rgba(255,255,255,0.4)]" />
          </h2>
          <FadeIn delay={400} fromY={12} duration={600}>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              As vagas são estritamente limitadas pelo espaço físico do auditório.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">

          {/* ── LOTE 1 — ATIVO ── */}
          <FadeIn delay={100} duration={800} fromY={24} scale={0.97} className="md:col-span-1">
            <div
              className="relative rounded-2xl p-7 flex flex-col gap-6"
              style={{
                background: "linear-gradient(145deg, rgba(26,16,50,0.8) 0%, rgba(13,9,17,0.9) 100%)",
                border: "1px solid rgba(124,58,237,0.4)",
                boxShadow: "0 0 40px rgba(124,58,237,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
                animation: "glow-border 3s ease-in-out infinite",
              }}
            >
              {/* Badge abertura */}
              <div className="absolute -top-3 left-6">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-white"
                  style={{ background: "linear-gradient(90deg, #7c3aed, #9d4edd)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Lote de Abertura
                </span>
              </div>

              <div className="pt-3">
                <p className="text-[12px] font-medium tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Lote 01 · Mini Agência Start
                </p>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-[14px] font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>R$</span>
                  <span className="text-[52px] font-extrabold text-white leading-none" style={{ letterSpacing: "-0.03em" }}>497</span>
                </div>
                <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  <s className="opacity-50">De R$ 1.997</s> · ou 12x no cartão
                </p>
              </div>

              <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />

              <ul className="flex flex-col gap-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[#9d4edd]"
                      style={{ background: "rgba(124,58,237,0.2)" }}>
                      <CheckIcon />
                    </span>
                    <span className="text-[13px] leading-snug" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT_URL}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-bold text-[14px] text-[#0d0911] transition-colors duration-150 hover:bg-[#fbbf24]"
                style={{
                  background: "#f59e0b",
                  animation: "pulse-gold 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
                }}
              >
                Garantir minha vaga
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </FadeIn>

          {/* ── LOTE 2 — BLOQUEADO ── */}
          <FadeIn delay={200} duration={800} fromY={24} scale={0.97}>
            <LockedCard lote="02" name="Virada Automática" price="597" blur={2} />
          </FadeIn>

          {/* ── LOTE 3 — BLOQUEADO ── */}
          <FadeIn delay={300} duration={800} fromY={24} scale={0.97}>
            <LockedCard lote="03" name="Últimas Vagas" price="697" blur={3.5} />
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

function LockedCard({ lote, name, price, blur }: { lote: string; name: string; price: string; blur: number }) {
  return (
    <div
      className="rounded-2xl p-7 flex flex-col gap-5 pointer-events-none select-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(145deg, rgba(19,14,34,0.5) 0%, rgba(13,9,17,0.6) 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
        opacity: 0.45,
        filter: `blur(${blur}px)`,
      }}
    >
      <div className="inline-flex items-center gap-1.5 text-[rgba(255,255,255,0.4)] text-[11px] font-medium">
        <LockIcon />
        <span className="uppercase tracking-wider">Indisponível</span>
      </div>

      <div>
        <p className="text-[12px] font-medium tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
          Lote {lote} · {name}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.25)" }}>R$</span>
          <span className="text-[48px] font-extrabold leading-none" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "-0.03em" }}>
            {price}
          </span>
        </div>
      </div>

      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.05)" }} />

      <div
        className="w-full py-3 rounded-lg text-center text-[13px] font-medium"
        style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.25)" }}
      >
        Disponível após o Lote {String(Number(lote) - 1).padStart(2, "0")}
      </div>
    </div>
  );
}
