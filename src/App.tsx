import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  Handshake,
  Mail,
  MapPin,
  Menu,
  Network,
  Scale,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'
import waveLogo from './assets/logo-wave-transparente.png'
import './App.css'

const services = [
  {
    number: '01',
    icon: TrendingUp,
    title: 'Desenvolvimento de negócios',
    description:
      'Cenários estratégicos que orientam decisões e transformam intenção em execução.',
    items: ['Plano estratégico', 'Go to market', 'E-commerce', 'Avaliação financeira'],
  },
  {
    number: '02',
    icon: Scale,
    title: 'Governança',
    description:
      'Colaboração próxima à alta direção para desenvolver formas de gestão sólidas.',
    items: ['Mentoria empresarial', 'Plano de sucessão', 'Gestão interina', 'Conselhos'],
  },
  {
    number: '03',
    icon: Handshake,
    title: 'Fusões e aquisições',
    description:
      'Experiência de mercado em todas as etapas de compra, venda e integração de empresas.',
    items: ['M&A sell side', 'M&A buy side', 'Valuation', 'Due diligence'],
  },
  {
    number: '04',
    icon: Users,
    title: 'Pessoas',
    description:
      'Novas oportunidades para executivos seniores em um ambiente colaborativo de alto nível.',
    items: ['Business partners', 'Líderes de negócios', 'Especialistas', 'Originadores'],
  },
]

const networkRoles = [
  ['Líderes', 'Conduzem cada projeto do começo ao fim, garantindo foco e consistência.'],
  ['Estruturadores', 'Aplicam metodologias e produtos Wave à realidade de cada setor.'],
  ['Originadores', 'Abrem portas e aproximam oportunidades qualificadas da rede.'],
  ['Parceiros', 'Compartilham experiência, ética e responsabilidade pelos resultados.'],
]

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Wavecorp, início">
      <img src={waveLogo} alt="Wave — We Add Value to Enterprises" />
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Principal">
            <a href="#sobre" onClick={closeMenu}>A Wave</a>
            <a href="#atuacao" onClick={closeMenu}>Atuação</a>
            <a href="#rede" onClick={closeMenu}>Nossa rede</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a className="nav-cta" href="mailto:contato@wavecorp.com.br" onClick={closeMenu}>
              Fale conosco <ArrowRight size={16} />
            </a>
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-overlay" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content shell">
            <p className="eyebrow light">Circular Business Company</p>
            <h1>Wavecorp</h1>
            <p className="hero-statement">
              Inovamos na forma como <strong>desenvolvemos negócios.</strong>
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#atuacao">
                Conheça nossa atuação <ArrowDownRight size={19} />
              </a>
              <a className="text-link light-link" href="#sobre">
                O jeito Wave <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>Estratégia</span><span>Execução</span><span>Resultado</span>
          </div>
        </section>

        <section className="intro section" id="sobre">
          <div className="shell intro-layout">
            <div>
              <p className="eyebrow">Isso é a Wave</p>
              <h2>Pessoas geram negócios.<br />Negócios movem o mercado.</h2>
            </div>
            <div className="intro-copy">
              <p className="lead">
                Somos uma rede de executivos que combina experiência, relacionamento e execução para gerar resultados de alto impacto.
              </p>
              <p>
                A metodologia Wave conecta empresas e investidores a profissionais que conhecem profundamente seus mercados. Pensamos, fazemos e evoluímos juntos, do primeiro diagnóstico à entrega.
              </p>
              <a className="text-link" href="#rede">Conheça nosso ecossistema <ArrowRight size={17} /></a>
            </div>
          </div>
          <div className="principles shell">
            <div><span>01</span><h3>Pensar</h3><p>Enxergar o cenário completo e encontrar oportunidades reais.</p></div>
            <div><span>02</span><h3>Fazer</h3><p>Colocar profissionais experientes à frente da execução.</p></div>
            <div><span>03</span><h3>Evoluir</h3><p>Construir resultados que seguem gerando valor no futuro.</p></div>
          </div>
        </section>

        <section className="audiences">
          <div className="audience-image" role="img" aria-label="Executivos reunidos em ambiente corporativo" />
          <div className="audience-content">
            <p className="eyebrow light">Conectamos interesses</p>
            <h2>Uma rede.<br />Múltiplas perspectivas.</h2>
            <div className="audience-items">
              <div>
                <Building2 size={24} />
                <h3>Para empresas</h3>
                <p>Estratégia, estrutura e acesso a profissionais preparados para desafios complexos.</p>
              </div>
              <div>
                <BriefcaseBusiness size={24} />
                <h3>Para investidores</h3>
                <p>Projetos qualificados e oportunidades alinhadas a diferentes teses de investimento.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services section" id="atuacao">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Desenvolvendo negócios</p>
                <h2>Experiência aplicada.<br />Resultado na prática.</h2>
              </div>
              <p>Atuação direta, soluções customizadas e a pessoa certa para cada desafio.</p>
            </div>
            <div className="service-grid">
              {services.map(({ number, icon: Icon, title, description, items }) => (
                <article className="service-card" key={title}>
                  <div className="service-top"><span>{number}</span><Icon size={26} strokeWidth={1.6} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul>
                    {items.map((item) => <li key={item}><Check size={15} />{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="network section" id="rede">
          <div className="shell network-layout">
            <div className="network-intro">
              <p className="eyebrow light">Inteligência coletiva</p>
              <h2>O valor está<br />em quem faz.</h2>
              <p>Uma estrutura colaborativa que reúne especialistas, repertório e acesso para transformar cada oportunidade.</p>
              <Network className="network-icon" size={52} strokeWidth={1.2} />
            </div>
            <div className="role-list">
              {networkRoles.map(([title, description], index) => (
                <div className="role" key={title}>
                  <span>0{index + 1}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <ChevronRight size={22} />
                </div>
              ))}
            </div>
          </div>
          <div className="stats shell">
            <div><strong>R$ 5 bi+</strong><span>em negócios analisados e processados</span></div>
            <div><strong>100+</strong><span>projetos em diferentes frentes de atuação</span></div>
            <div><strong>120+</strong><span>executivos conectados à rede Wave</span></div>
          </div>
        </section>

        <section className="sectors section">
          <div className="shell sectors-layout">
            <div>
              <p className="eyebrow">Conhecimento de mercado</p>
              <h2>Especialistas para cada contexto.</h2>
            </div>
            <div className="sector-list" aria-label="Setores de atuação">
              {['Saúde', 'Higiene & cosméticos', 'Educação', 'Alimentação', 'Logística', 'Seguros', 'Embalagens', 'Infraestrutura'].map((sector) => (
                <span key={sector}>{sector}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="shell contact-layout">
            <div>
              <p className="eyebrow">Vamos conversar</p>
              <h2>Qual é o próximo<br />negócio que vamos<br />movimentar?</h2>
            </div>
            <div className="contact-card">
              <p>Conte o seu desafio. Nossa rede está pronta para construir a solução.</p>
              <a className="button button-dark" href="mailto:contato@wavecorp.com.br">
                <Mail size={19} /> contato@wavecorp.com.br
              </a>
              <div className="address">
                <MapPin size={19} />
                <span>Av. das Nações Unidas, 11.633<br />10º andar · São Paulo, SP</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-main">
          <Brand />
          <p>Circular Business Company<br />Pensar. Fazer. Evoluir.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/wave-corp/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://www.instagram.com/wavecorpcircularbusiness/" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Wavecorp</span>
          <a href="#inicio">Voltar ao topo <ArrowDownRight size={15} className="back-arrow" /></a>
        </div>
      </footer>
    </>
  )
}

export default App
