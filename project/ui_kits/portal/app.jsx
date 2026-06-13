/* Farmacia Nieto — Portal del paciente (mobile app).
   Interactive flow: ingresar → mis pedidos → pedir fórmula → seguimiento.
   Built on the design-system primitives + Lucide icons. */

const NS = window.FarmaciaNietoDesignSystem_3d24ed;
const { Button, Card, Badge, Tag, Input, Textarea, Select, Radio, Avatar, Divider, Alert, IconButton, Tabs } = NS;
const ASSETS = '../../assets';

function Icon({ name, size = 22, stroke = 1.8, color }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const lib = window.lucide;
    if (ref.current && lib && lib.icons && lib.icons[name]) {
      const el = lib.createElement(lib.icons[name]);
      el.setAttribute('width', size); el.setAttribute('height', size); el.setAttribute('stroke-width', stroke);
      if (color) el.setAttribute('stroke', color);
      ref.current.innerHTML = ''; ref.current.appendChild(el);
    }
  });
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0 }} />;
}

const SPECIALTIES = ['Dermocosmética', 'Homeopatía', 'Fitoterapia', 'Florales', 'Medicina Ortomolecular', 'Probióticos', 'Hormonas Bioidénticas', 'Alopatía'];

const STATUS = {
  recibida: { label: 'Recibida', variant: 'info', step: 0 },
  preparacion: { label: 'En preparación', variant: 'warning', step: 1 },
  lista: { label: 'Lista para retirar', variant: 'success', step: 2 },
  entregada: { label: 'Entregada', variant: 'neutral', step: 3 },
};
const TIMELINE = [
  ['Recibida', 'Recibimos tu pedido', 'FileText'],
  ['En preparación', 'Tu fórmula se elabora en el laboratorio', 'FlaskConical'],
  ['Lista para retirar', 'Te avisamos por WhatsApp', 'PackageCheck'],
  ['Entregada', 'Disfrutá tu bienestar', 'Heart'],
];

const SEED = [
  { id: 'NT-1042', name: 'Crema con ácido hialurónico', spec: 'Dermocosmética', status: 'preparacion', date: '10 jun', eta: '12 jun' },
  { id: 'NT-1039', name: 'Gotas homeopáticas personalizadas', spec: 'Homeopatía', status: 'lista', date: '8 jun', eta: 'Hoy' },
  { id: 'NT-1021', name: 'Cápsulas de magnesio + B6', spec: 'Medicina Ortomolecular', status: 'entregada', date: '28 may', eta: '30 may' },
];

/* ---- Phone shell ------------------------------------------- */
function Phone({ children, statusDark }) {
  return (
    <div style={{ width: 390, height: 800, background: 'var(--green-950)', borderRadius: 52, padding: 12, boxShadow: 'var(--shadow-xl)', flex: 'none' }}>
      <div style={{ width: '100%', height: '100%', background: 'var(--cream-100)', borderRadius: 42, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 26px', zIndex: 20, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13, color: statusDark ? 'var(--cream-50)' : 'var(--green-900)' }}>
          <span>9:41</span>
          <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <Icon name="Signal" size={15} color="currentColor" /><Icon name="Wifi" size={15} color="currentColor" /><Icon name="BatteryFull" size={17} color="currentColor" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

function Screen({ children, pad = true, style }) {
  return <div style={{ flex: 1, overflowY: 'auto', paddingTop: 38, ...(pad ? { padding: '38px 20px 20px' } : {}), ...style }}>{children}</div>;
}

/* ---- Login -------------------------------------------------- */
function Login({ onEnter }) {
  return (
    <Screen pad={false} style={{ background: 'radial-gradient(120% 70% at 50% 0%, var(--mint-100), var(--green-500) 80%)', display: 'flex', flexDirection: 'column', padding: '38px 26px 30px' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ background: 'var(--cream-50)', borderRadius: 30, padding: 18, boxShadow: 'var(--shadow-lg)' }}>
          <img src={`${ASSETS}/emblem-nieto.png`} alt="" style={{ width: 130, height: 112, objectFit: 'contain' }} />
        </div>
        <div style={{ fontFamily: 'var(--font-script)', fontSize: 46, color: 'var(--cream-50)', marginTop: 22, lineHeight: 0.9 }}>farmacia</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 22, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--mint-100)' }}>Nieto</div>
        <p style={{ color: 'var(--cream-50)', fontSize: 15, lineHeight: 1.6, opacity: .95, marginTop: 18, maxWidth: 260 }}>Tu camino hacia el bienestar, en la palma de tu mano.</p>
      </div>
      <div style={{ background: 'var(--cream-50)', borderRadius: 26, padding: 22, boxShadow: 'var(--shadow-lg)' }}>
        <Input label="Tu teléfono" placeholder="291 …" icon={<Icon name="Phone" size={17} />} />
        <div style={{ height: 14 }} />
        <Button variant="primary" size="lg" fullWidth onClick={onEnter} iconRight={<Icon name="ArrowRight" size={18} />}>Ingresar</Button>
        <p style={{ textAlign: 'center', fontSize: 12.5, color: 'var(--ink-400)', margin: '14px 0 0' }}>¿Primera vez? Te creamos tu cuenta al ingresar.</p>
      </div>
    </Screen>
  );
}

/* ---- Order card -------------------------------------------- */
function OrderCard({ order, onOpen }) {
  const st = STATUS[order.status];
  return (
    <Card interactive onClick={() => onOpen(order)} padding="md" style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, fontWeight: 600, color: 'var(--ink-400)', letterSpacing: '.04em' }}>{order.id}</div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 17, color: 'var(--green-900)', margin: '2px 0 0', lineHeight: 1.2 }}>{order.name}</h3>
        </div>
        <Badge variant={st.variant} dot>{st.label}</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
        <Tag dot>{order.spec}</Tag>
        <span style={{ marginLeft: 'auto', fontSize: 12.5, color: 'var(--ink-400)', display: 'flex', alignItems: 'center', gap: 5 }}>
          <Icon name="Clock" size={14} color="var(--ink-400)" /> {order.eta}
        </span>
      </div>
    </Card>
  );
}

/* ---- Home --------------------------------------------------- */
function Home({ orders, onOpen, onNew }) {
  const [tab, setTab] = React.useState('activos');
  const filtered = orders.filter((o) =>
    tab === 'activos' ? ['recibida', 'preparacion'].includes(o.status) :
    tab === 'listos' ? o.status === 'lista' : o.status === 'entregada');
  const counts = {
    activos: orders.filter((o) => ['recibida', 'preparacion'].includes(o.status)).length,
    listos: orders.filter((o) => o.status === 'lista').length,
  };
  return (
    <Screen>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <Avatar tone="forest" size="md">P</Avatar>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--ink-400)', fontWeight: 600 }}>¡Hola de nuevo!</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 19, color: 'var(--green-900)' }}>Patricia</div>
        </div>
        <span style={{ marginLeft: 'auto' }}>
          <IconButton label="Notificaciones" variant="soft"><Icon name="Bell" size={19} /></IconButton>
        </span>
      </div>

      <Card variant="sage" padding="md" interactive onClick={onNew} style={{ marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <Icon name="FlaskConical" size={24} color="var(--cream-50)" />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 18, color: 'var(--cream-50)' }}>Pedí tu fórmula</div>
            <div style={{ fontSize: 13, color: 'var(--cream-50)', opacity: .9 }}>Subí tu receta y la preparamos a medida</div>
          </div>
          <Icon name="ArrowRight" size={20} color="var(--cream-50)" />
        </div>
      </Card>

      <div style={{ marginBottom: 14 }}>
        <Tabs value={tab} onChange={setTab} tabs={[
          { id: 'activos', label: 'En preparación', count: counts.activos },
          { id: 'listos', label: 'Listos', count: counts.listos },
          { id: 'historial', label: 'Historial' },
        ]} />
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--ink-400)' }}>
          <Icon name="Inbox" size={36} color="var(--green-300)" />
          <p style={{ marginTop: 10, fontSize: 14 }}>No hay pedidos en esta sección.</p>
        </div>
      ) : filtered.map((o) => <OrderCard key={o.id} order={o} onOpen={onOpen} />)}
    </Screen>
  );
}

/* ---- New request -------------------------------------------- */
function NewRequest({ onBack, onSubmit }) {
  const [spec, setSpec] = React.useState('');
  const [uploaded, setUploaded] = React.useState(false);
  const [detail, setDetail] = React.useState('');
  return (
    <Screen>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <IconButton label="Volver" variant="soft" onClick={onBack}><Icon name="ChevronLeft" size={20} /></IconButton>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 22, color: 'var(--green-900)', margin: 0 }}>Pedí tu fórmula</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Select label="Especialidad" placeholder="Elegí una opción" options={SPECIALTIES} value={spec} onChange={(e) => setSpec(e.target.value)} />

        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--green-900)', marginBottom: 6 }}>Tu receta</div>
          <button onClick={() => setUploaded(true)} style={{ width: '100%', border: '1.5px dashed var(--green-300)', background: uploaded ? 'var(--success-soft)' : 'var(--cream-50)', borderRadius: 'var(--radius-md)', padding: '20px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, transition: 'all .2s' }}>
            <Icon name={uploaded ? 'CheckCircle2' : 'Upload'} size={26} color={uploaded ? 'var(--green-600)' : 'var(--green-500)'} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, color: uploaded ? 'var(--green-700)' : 'var(--ink-500)' }}>
              {uploaded ? 'receta-nieto.jpg · cargada' : 'Tocá para subir una foto de tu receta'}
            </span>
          </button>
        </div>

        <Textarea label="Contanos qué necesitás" rows={3} placeholder="Detalle de la fórmula, dosis, indicaciones…" value={detail} onChange={(e) => setDetail(e.target.value)} />

        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--green-900)', marginBottom: 8 }}>¿Cómo lo recibís?</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Radio name="entrega" label="Retiro en el local" defaultChecked />
            <Radio name="entrega" label="Envío a domicilio" />
          </div>
        </div>

        <Alert variant="info">Algunas fórmulas requieren receta médica vigente. Te confirmamos al recibir tu pedido.</Alert>

        <Button variant="primary" size="lg" fullWidth disabled={!spec} onClick={() => onSubmit({ spec, detail })} iconRight={<Icon name="Send" size={17} />}>Enviar pedido</Button>
      </div>
    </Screen>
  );
}

/* ---- Confirmation ------------------------------------------- */
function Confirm({ order, onTrack, onHome }) {
  return (
    <Screen style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'var(--success-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
          <Icon name="Check" size={46} color="var(--green-600)" stroke={2.4} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 26, color: 'var(--green-900)', margin: '0 0 10px' }}>¡Pedido recibido!</h2>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-500)', maxWidth: 260, margin: 0 }}>Tu pedido <b style={{ color: 'var(--green-800)' }}>{order.id}</b> ya está en nuestras manos. Te avisamos por WhatsApp en cada paso.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Button variant="primary" size="lg" fullWidth onClick={onTrack} iconLeft={<Icon name="MapPin" size={18} />}>Seguir mi pedido</Button>
        <Button variant="ghost" fullWidth onClick={onHome}>Volver al inicio</Button>
      </div>
    </Screen>
  );
}

/* ---- Tracking ----------------------------------------------- */
function Tracking({ order, onBack }) {
  const st = STATUS[order.status];
  return (
    <Screen>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <IconButton label="Volver" variant="soft" onClick={onBack}><Icon name="ChevronLeft" size={20} /></IconButton>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, fontWeight: 600, color: 'var(--ink-400)' }}>{order.id}</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 20, color: 'var(--green-900)', margin: 0, lineHeight: 1.15 }}>{order.name}</h2>
        </div>
      </div>

      <Card variant="mint" padding="md" style={{ marginBottom: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--ink-500)', fontWeight: 600 }}>Estado actual</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 19, color: 'var(--green-900)' }}>{st.label}</div>
          </div>
          <Badge variant={st.variant} dot>{order.eta}</Badge>
        </div>
      </Card>

      <div style={{ position: 'relative', paddingLeft: 8 }}>
        {TIMELINE.map(([title, desc, icon], i) => {
          const done = i <= st.step;
          const current = i === st.step;
          return (
            <div key={title} style={{ display: 'flex', gap: 16, paddingBottom: i < TIMELINE.length - 1 ? 26 : 0, position: 'relative' }}>
              {i < TIMELINE.length - 1 && (
                <span style={{ position: 'absolute', left: 21, top: 44, bottom: 0, width: 2, background: i < st.step ? 'var(--green-500)' : 'var(--line-200)' }} />
              )}
              <span style={{ width: 44, height: 44, borderRadius: '50%', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1,
                background: done ? (current ? 'var(--gold-400)' : 'var(--green-600)') : 'var(--cream-200)',
                border: current ? '3px solid var(--gold-200, var(--gold-100))' : 'none',
                boxShadow: current ? 'var(--shadow-gold)' : 'none' }}>
                <Icon name={done ? icon : icon} size={20} color={done ? (current ? 'var(--wood-700)' : 'var(--cream-50)') : 'var(--ink-300)'} />
              </span>
              <div style={{ paddingTop: 3 }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 16.5, color: done ? 'var(--green-900)' : 'var(--ink-400)' }}>{title}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-400)', lineHeight: 1.45 }}>{desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      <Divider label="¿Dudas?" />
      <div style={{ marginTop: 14 }}>
        <Button variant="outline" size="md" fullWidth iconLeft={<Icon name="MessageCircle" size={18} />}>Escribinos por WhatsApp</Button>
      </div>
    </Screen>
  );
}

/* ---- App ---------------------------------------------------- */
function PortalApp() {
  const [screen, setScreen] = React.useState('login');
  const [orders, setOrders] = React.useState(SEED);
  const [current, setCurrent] = React.useState(null);
  let counter = React.useRef(1043);

  const openOrder = (o) => { setCurrent(o); setScreen('tracking'); };
  const submitNew = ({ spec }) => {
    const id = 'NT-' + counter.current++;
    const order = { id, name: 'Nueva fórmula magistral', spec: spec || 'Dermocosmética', status: 'recibida', date: 'Hoy', eta: '48–72 h' };
    setOrders((p) => [order, ...p]);
    setCurrent(order);
    setScreen('confirm');
  };

  const statusDark = screen === 'login';
  return (
    <Phone statusDark={statusDark}>
      {screen === 'login' && <Login onEnter={() => setScreen('home')} />}
      {screen === 'home' && <Home orders={orders} onOpen={openOrder} onNew={() => setScreen('new')} />}
      {screen === 'new' && <NewRequest onBack={() => setScreen('home')} onSubmit={submitNew} />}
      {screen === 'confirm' && <Confirm order={current} onTrack={() => setScreen('tracking')} onHome={() => setScreen('home')} />}
      {screen === 'tracking' && <Tracking order={current} onBack={() => setScreen('home')} />}
    </Phone>
  );
}

Object.assign(window, { PortalApp });
