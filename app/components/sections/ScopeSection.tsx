import { FadeIn } from "@/app/components/effects/FadeIn";
import { BlurText } from "@/app/components/effects/BlurText";
import ShinyText from "@/app/components/effects/ShinyText";

const DELIVERABLES = [
  {
    number: "01",
    title: "Matriz de Conteúdo Semanal",
    description:
      "Uma estrutura para produzir conteúdo com consistência sem depender de inspiração.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8"  y1="2" x2="8"  y2="6" />
        <line x1="3"  y1="10" x2="21" y2="10" />
        <line x1="8"  y1="14" x2="8"  y2="14" strokeWidth="2" />
        <line x1="12" y1="14" x2="12" y2="14" strokeWidth="2" />
        <line x1="16" y1="14" x2="16" y2="14" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Fábrica de Criativos",
    description:
      "Frameworks para gerar anúncios, copies e campanhas com muito mais velocidade.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Funis de Marketing",
    description:
      "Mapeamento da jornada que transforma audiência em oportunidades de negócio.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Sistema de Escala",
    description:
      "Processos para reduzir retrabalho e aumentar produtividade de toda a operação.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "A Mini Agência Interna",
    description:
      "Uma operação integrada que usa IA para acelerar execução e tomada de decisão.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
];

export function ScopeSection() {
  return (
    <section id="escopo" className="relative py-24 sm:py-32">

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-5">
          <FadeIn fromY={12} duration={600}>
            <ShinyText text="O que você vai deixar pronto" disabled={false} speed={3} className="text-[11px] font-medium tracking-[0.18em] uppercase mb-5" />
          </FadeIn>
          </div>
          <h2
            className="text-[clamp(32px,4.5vw,56px)] font-extrabold text-white"
            style={{ lineHeight: 1.08, letterSpacing: "-0.025em" }}
          >
            <BlurText text="Cinco ativos operando" wordDelay={50} duration={650} />
            <br />
            <BlurText text="na sua mesa ao" wordDelay={50} duration={650} />{" "}
            <BlurText text="final do dia." wordDelay={50} duration={650} className="[color:rgba(124,58,237,0.9)]" />
          </h2>
        </div>

        {/* Lista de entregáveis — 2 colunas desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">

          {/* Coluna esquerda — items 01, 02, 03 */}
          <div>
            {DELIVERABLES.slice(0, 3).map(({ number, title, description, icon }, i) => (
              <DeliverableRow
                key={number}
                number={number}
                title={title}
                description={description}
                icon={icon}
                delay={i * 100}
                isLast={i === 2}
              />
            ))}
          </div>

          {/* Coluna direita — items 04, 05 */}
          <div>
            {DELIVERABLES.slice(3).map(({ number, title, description, icon }, i) => (
              <DeliverableRow
                key={number}
                number={number}
                title={title}
                description={description}
                icon={icon}
                delay={(i + 3) * 100}
                isLast={i === 1}
              />
            ))}
          </div>
        </div>

        {/* CTA — rodapé da seção, sempre visível */}
        <FadeIn delay={600} duration={700} fromY={16}>
          <div
            className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-[15px] leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.45)" }}>
              Você não sai com um caderno de anotações — você desliga o notebook com os{" "}
              <span className="text-white font-semibold">5 ativos validados e prontos para rodar.</span>
            </p>
            <a
              href="#investimento"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-semibold text-white flex-shrink-0 transition-colors duration-150 hover:bg-[rgba(124,58,237,0.25)]"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              Ver detalhes do investimento
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

interface DeliverableRowProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  isLast: boolean;
}

function DeliverableRow({ number, title, description, icon, delay, isLast }: DeliverableRowProps) {
  return (
    <FadeIn delay={delay} duration={750} fromY={20}>
      <div
        className="flex gap-5 py-7"
        style={isLast ? {} : { borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Ícone */}
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{
            background: "rgba(124,58,237,0.12)",
            color: "#9d4edd",
          }}
        >
          {icon}
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span
              className="text-[11px] font-mono font-medium"
              style={{ color: "rgba(124,58,237,0.6)" }}
            >
              {number}
            </span>
            <h3
              className="text-[16px] font-semibold text-white"
              style={{ letterSpacing: "-0.01em" }}
            >
              {title}
            </h3>
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.877)" }}>
            {description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
