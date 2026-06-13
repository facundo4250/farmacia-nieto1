/* Farmacia Nieto — Marketing site sections.
   Composes the design-system primitives from window.<Namespace>.
   Exports all section components + the NietoSite app to window. */

const NS = window.FarmaciaNietoDesignSystem_3d24ed;
const { Button, Card, Badge, Tag, Input, Textarea, Select, Avatar, Divider, Alert, IconButton } = NS;

/* ---- Lucide icon helper (CDN) ------------------------------ */
function Icon({ name, size = 22, stroke = 1.8, color }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const lib = window.lucide;
    if (ref.current && lib && lib.icons && lib.icons[name]) {
      const el = lib.createElement(lib.icons[name]);
      el.setAttribute('width', size); el.setAttribute('height', size);
      el.setAttribute('stroke-width', stroke);
      if (color) el.setAttribute('stroke', color);
      ref.current.innerHTML = '';
      ref.current.appendChild(el);
    }
  });
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0 }} />;
}

const ASSETS = '../../assets';
const WORDMARK = ({ light } = {}) => (
  <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 0.86 }}>
    <span style={{ fontFamily: 'var(--font-script)', fontSize: 30, color: light ? 'var(--cream-100)' : 'var(--green-700)' }}>farmacia</span>
    <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 15, letterSpacing: '0.22em', textTransform: 'uppercase', color: light ? 'var(--green-300)' : 'var(--green-400)', paddingLeft: 3 }}>Nieto</span>
  </span>
);

/* ---- Header ------------------------------------------------- */
const NAV = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'proceso', label: 'Cómo trabajamos' },
  { id: 'contacto', label: 'Contacto' },
];
function Header({ active, onNav, onCta }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'color-mix(in oklab, var(--cream-100) 88%, transparent)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--line-200)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href="#inicio" onClick={(e) => { e.preventDefault(); onNav('inicio'); }} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <img src={`${ASSETS}/emblem-nieto.png`} alt="" style={{ width: 44, height: 44, objectFit: 'contain' }} />
          <WORDMARK />
        </a>
        <nav style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); onNav(n.id); }}
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, padding: '9px 14px', borderRadius: 'var(--radius-pill)', textDecoration: 'none',
                color: active === n.id ? 'var(--green-900)' : 'var(--ink-500)', background: active === n.id ? 'var(--green-100)' : 'transparent', transition: 'all .2s' }}>
              {n.label}
            </a>
          ))}
        </nav>
        <Button variant="primary" size="sm" onClick={onCta} iconLeft={<Icon name="FlaskConical" size={16} />}>Pedí tu fórmula</Button>
      </div>
    </header>
  );
}

/* ---- Hero --------------------------------------------------- */
function Hero({ onCta, onNav }) {
  return (
    <section id="inicio" style={{ position: 'relative', overflow: 'hidden', background: 'radial-gradient(120% 90% at 80% -10%, var(--mint-50), var(--cream-100) 55%)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '72px 28px 84px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
        <div>
          <span className="nieto-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Icon name="Sparkles" size={15} color="var(--gold-600)" /> Elaboración magistral · Desde 1996
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 60, lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--green-900)', margin: '18px 0 0' }}>
            Tu camino hacia<br />el <span style={{ fontStyle: 'italic', color: 'var(--green-600)' }}>bienestar</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-600)', maxWidth: 480, margin: '20px 0 30px' }}>
            Preparamos cada fórmula a mano, pensada para vos. Formulaciones personalizadas según las necesidades de cada paciente — con la dirección técnica de Patricia Victoria Nieto.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={onCta} iconRight={<Icon name="ArrowRight" size={18} />}>Pedí tu fórmula</Button>
            <Button variant="outline" size="lg" onClick={() => onNav('especialidades')}>Conocé las especialidades</Button>
          </div>
          <div style={{ display: 'flex', gap: 30, marginTop: 40 }}>
            {[['Desde', '1996'], ['Especialidades', '8'], ['Atención', 'Personalizada']].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 26, color: 'var(--green-800)' }}>{v}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-400)', fontWeight: 600 }}>{k}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: '6% 12%', background: 'var(--green-300)', borderRadius: '46% 54% 58% 42% / 52% 44% 56% 48%', opacity: .35, filter: 'blur(4px)' }} />
          <div style={{ position: 'relative', background: 'var(--mint-100)', borderRadius: 'var(--radius-2xl)', padding: 26, boxShadow: 'var(--shadow-xl)' }}>
            <img src={`${ASSETS}/logo-nieto.png`} alt="Farmacia Nieto" style={{ width: 320, height: 320, objectFit: 'contain', borderRadius: 'var(--radius-xl)' }} />
          </div>
          <div style={{ position: 'absolute', bottom: 6, left: -6, background: 'var(--cream-50)', borderRadius: 'var(--radius-pill)', padding: '9px 16px', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: 9 }}>
            <Icon name="Leaf" size={17} color="var(--green-600)" />
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, color: 'var(--green-900)' }}>Formulado a tu medida</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Specialties ------------------------------------------- */
const SPECIALTIES = [
  ['Sparkles', 'Medicina Ortomolecular', 'Equilibrá tu organismo con nutrientes en dosis precisas.'],
  ['Droplet', 'Dermocosmética', 'Cremas y serums formulados para tu tipo de piel.'],
  ['FlaskRound', 'Homeopatía', 'Preparados individualizados con seguimiento cercano.'],
  ['Pill', 'Alopatía', 'Medicación magistral en la forma y dosis que necesitás.'],
  ['Leaf', 'Fitoterapia', 'El poder de las plantas, dosificado con rigor.'],
  ['Flower2', 'Florales', 'Esencias florales preparadas para tu bienestar emocional.'],
  ['Microscope', 'Probióticos', 'Fórmulas vivas para cuidar tu flora intestinal.'],
  ['Activity', 'Hormonas Bioidénticas', 'Terapias a medida, idénticas a las de tu cuerpo.'],
];
function Specialties({ onCta }) {
  return (
    <section id="especialidades" style={{ background: 'var(--cream-100)', padding: '88px 28px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 48px' }}>
          <span className="nieto-eyebrow">Lo que preparamos</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 42, color: 'var(--green-900)', margin: '12px 0 14px', lineHeight: 1.08 }}>Ocho especialidades, una sola forma de cuidarte</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'var(--ink-500)', margin: 0 }}>Cada preparado se elabora artesanalmente en nuestro laboratorio, siguiendo tu receta y tus necesidades.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {SPECIALTIES.map(([icon, name, desc]) => (
            <Card key={name} interactive>
              <span style={{ width: 46, height: 46, borderRadius: 14, background: 'var(--green-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
                <Icon name={icon} size={23} color="var(--green-700)" stroke={1.7} />
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 19, color: 'var(--green-900)', margin: 0 }}>{name}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-500)', margin: 0 }}>{desc}</p>
            </Card>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Button variant="accent" size="lg" onClick={onCta} iconLeft={<Icon name="MessageCircle" size={18} />}>Consultanos por tu fórmula</Button>
        </div>
      </div>
    </section>
  );
}

/* ---- About Patricia ---------------------------------------- */
function About() {
  return (
    <section id="nosotros" style={{ background: 'var(--green-500)', padding: '88px 28px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 56, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ background: 'var(--mint-100)', borderRadius: 'var(--radius-2xl)', padding: 16, boxShadow: 'var(--shadow-xl)', width: 'fit-content' }}>
            <div style={{ width: 250, height: 320, borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--green-200)' }}>
              <img src={`${ASSETS}/patricia-nieto.png`} alt="Patricia Victoria Nieto" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', transform: 'scale(1.18)' }} />
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: -14, right: -10, background: 'var(--cream-50)', borderRadius: 'var(--radius-lg)', padding: '12px 16px', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 16, color: 'var(--green-900)' }}>Patricia V. Nieto</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--ink-500)', fontWeight: 600 }}>Directora técnica</div>
          </div>
        </div>
        <div style={{ color: 'var(--cream-50)' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold-300)' }}>Acerca de nosotros</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 40, color: 'var(--cream-50)', margin: '14px 0 18px', lineHeight: 1.1 }}>Detrás de cada fórmula, un equipo que te cuida</h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, opacity: .96, margin: '0 0 16px' }}>
            Bajo la dirección técnica de Patricia Victoria Nieto, una farmacéutica con una larga trayectoria, contamos con un equipo de profesionales altamente capacitados.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.75, opacity: .96, margin: '0 0 26px' }}>
            Trabajamos para ofrecerte productos de calidad y una atención de excelencia, siempre pensando en cuidar tu salud y tu bienestar de manera personalizada.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Tag dot>Atención humana</Tag>
            <Tag dot>Calidad farmacéutica</Tag>
            <Tag dot>Hecho a mano</Tag>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Process ------------------------------------------------ */
const STEPS = [
  ['FileText', 'Traé tu receta', 'Acercanos tu receta médica o consultanos qué necesitás. Te asesoramos sin compromiso.'],
  ['FlaskConical', 'Formulamos a medida', 'Preparamos tu fórmula artesanalmente en el laboratorio, con los controles de calidad de siempre.'],
  ['PackageCheck', 'Retirá o recibí', 'Te avisamos cuando esté lista. Retirala en el local o coordinamos el envío.'],
];
function Process() {
  return (
    <section id="proceso" style={{ background: 'var(--cream-100)', padding: '88px 28px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <span className="nieto-eyebrow">Cómo trabajamos</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 42, color: 'var(--green-900)', margin: '12px 0 0' }}>Tu fórmula en tres pasos</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, position: 'relative' }}>
          {STEPS.map(([icon, title, desc], i) => (
            <div key={title} style={{ position: 'relative', textAlign: 'center', padding: '0 8px' }}>
              <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'var(--cream-50)', border: '2px solid var(--green-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', boxShadow: 'var(--shadow-sm)', position: 'relative' }}>
                <Icon name={icon} size={30} color="var(--green-700)" stroke={1.6} />
                <span style={{ position: 'absolute', top: -6, right: -6, width: 26, height: 26, borderRadius: '50%', background: 'var(--gold-500)', color: 'var(--wood-700)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 22, color: 'var(--green-900)', margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-500)', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Contact ------------------------------------------------ */
function Contact({ formState }) {
  const { sent, setSent } = formState;
  return (
    <section id="contacto" style={{ background: 'var(--mint-50)', padding: '88px 28px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 48, alignItems: 'start' }}>
        <div>
          <span className="nieto-eyebrow">Estamos para ayudarte</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 40, color: 'var(--green-900)', margin: '12px 0 14px', lineHeight: 1.1 }}>Para más asesoramiento y consultas, comunicate con nosotros</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-500)', margin: '0 0 28px' }}>Cuidamos de ti de manera personalizada. Escribinos y te respondemos a la brevedad.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[['Phone', '(+54) 291 432-7031', 'WhatsApp'], ['Mail', 'farmacia_nieto@hotmail.com', 'Email'], ['Instagram', '@farmacia.nieto', 'Instagram']].map(([icon, val, lbl]) => (
              <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--green-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Icon name={icon} size={20} color="var(--green-700)" />
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-400)', fontWeight: 600 }}>{lbl}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600, color: 'var(--green-900)' }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Card padding="lg" variant="default">
          {sent ? (
            <div style={{ padding: '8px 0' }}>
              <Alert variant="success" title="¡Gracias por escribirnos!">Recibimos tu consulta. Te contactamos por WhatsApp o email a la brevedad.</Alert>
              <div style={{ marginTop: 18 }}>
                <Button variant="outline" onClick={() => setSent(false)} iconLeft={<Icon name="RotateCcw" size={16} />}>Enviar otra consulta</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 22, color: 'var(--green-900)', margin: 0 }}>Pedí tu fórmula</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <Input label="Nombre y apellido" placeholder="Patricia Nieto" required />
                <Input label="Teléfono" placeholder="291 …" required />
              </div>
              <Select label="Especialidad" placeholder="Elegí una opción" options={SPECIALTIES.map((s) => s[1])} />
              <Textarea label="Contanos qué necesitás" rows={3} placeholder="Detalle de la receta o consulta…" />
              <Button variant="primary" size="lg" fullWidth type="submit" iconRight={<Icon name="Send" size={17} />}>Enviar consulta</Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

/* ---- Footer ------------------------------------------------- */
function Footer() {
  return (
    <footer style={{ background: 'var(--green-950)', color: 'var(--cream-100)', padding: '52px 28px 30px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 36, justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: 320 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <img src={`${ASSETS}/emblem-nieto.png`} alt="" style={{ width: 42, height: 42, objectFit: 'contain', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,.3))' }} />
            <WORDMARK light />
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, opacity: .8, margin: 0 }}>Elaboración magistral desde 1996. Cuidamos de ti de manera personalizada.</p>
        </div>
        <div style={{ display: 'flex', gap: 52, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 12 }}>Contacto</div>
            {['(+54) 291 432-7031', 'farmacia_nieto@hotmail.com', '@farmacia.nieto'].map((t) => (
              <div key={t} style={{ fontSize: 13.5, opacity: .85, marginBottom: 7 }}>{t}</div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 12 }}>Seguinos</div>
            <div style={{ display: 'flex', gap: 10 }}>
              {['Instagram', 'MessageCircle', 'Mail'].map((ic) => (
                <span key={ic} style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Icon name={ic} size={18} color="var(--cream-100)" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1160, margin: '32px auto 0', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.12)', fontSize: 12.5, opacity: .65, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <span>© 2026 Farmacia Nieto. Todos los derechos reservados.</span>
        <span>Bahía Blanca, Argentina</span>
      </div>
    </footer>
  );
}

/* ---- App ---------------------------------------------------- */
function NietoSite() {
  const [active, setActive] = React.useState('inicio');
  const [sent, setSent] = React.useState(false);
  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };
  const goCta = () => scrollTo('contacto');
  return (
    <div>
      <Header active={active} onNav={scrollTo} onCta={goCta} />
      <main>
        <Hero onCta={goCta} onNav={scrollTo} />
        <Specialties onCta={goCta} />
        <About />
        <Process />
        <Contact formState={{ sent, setSent }} />
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { NietoSite, Header, Hero, Specialties, About, Process, Contact, Footer, NietoIcon: Icon });
