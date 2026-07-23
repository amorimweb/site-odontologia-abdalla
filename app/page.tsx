'use client';
import { site } from './config';
import { Icon } from './icons';
import { useEffect, useState } from 'react';

const Arrow = () => <span aria-hidden>↗</span>;

export default function Page() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('seen')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  const tel = `tel:+55${site.phone.replace(/\D/g, '')}`;

  return (
    <main>
      <header>
        <a className="brand" href="#inicio"><b>{site.monogram}</b><span>{site.short}</span></a>
        <button className="menu" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="nav" aria-label={menu ? 'Fechar menu' : 'Abrir menu'}>{menu ? 'Fechar' : 'Menu'}</button>
        <nav id="nav" className={menu ? 'open' : ''} aria-label="Navegação principal">
          <a href="#tratamentos" onClick={() => setMenu(false)}>Tratamentos</a>
          <a href="#clinica" onClick={() => setMenu(false)}>Clínica</a>
          <a href="#contato" onClick={() => setMenu(false)}>Contato</a>
          <a className="navCta" href="#contato">Agendar <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="heroCopy reveal">
          <small>{site.kicker}</small>
          <h1>{site.title}</h1>
          <p>{site.intro}</p>
          <div className="actions">
            <a className="primary" href="#contato">Agendar consulta <Arrow /></a>
            <a className="textLink" href="#tratamentos">Ver tratamentos ↓</a>
          </div>
        </div>
        <div className="heroArt reveal" aria-hidden="true">
          <div className="blob blobA" />
          <div className="blob blobB" />
          <div className="ring" />
        </div>
      </section>

      <section className="manifest reveal">
        <span>01 · NOSSO CUIDADO</span>
        <blockquote>&ldquo;{site.quote}&rdquo;</blockquote>
      </section>

      <section className="services" id="tratamentos">
        <div className="sectionHead reveal">
          <span>02 · TRATAMENTOS</span>
          <h2>Cuidado completo<br />para o seu sorriso.</h2>
          <p>Uma rotina odontológica pensada para prevenção, conforto e resultados duradouros.</p>
        </div>
        <div className="serviceGrid">
          {site.services.map((s) => (
            <article className="reveal" key={s[0]}>
              <div className="serviceIcon"><Icon name={s[2]} /></div>
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="clinica">
        <div className="aboutVisual reveal" aria-hidden="true">
          <div className="visualBlock" />
          <div className="stamp">{site.monogram}<small>PARAUAPEBAS · PA</small></div>
        </div>
        <div className="aboutCopy reveal">
          <span>03 · A CLÍNICA</span>
          <h2>Atendimento que<br />acolhe cada sorriso.</h2>
          <p>{site.about}</p>
          <ul>
            {site.values.map((v) => (
              <li key={v}><b>✓</b>{v}</li>
            ))}
          </ul>
          <a className="textLink" href="#contato">Agende sua consulta <Arrow /></a>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contactTitle reveal">
          <small>04 · CONTATO</small>
          <h2>Vamos cuidar<br />do seu sorriso?</h2>
          <p>Entre em contato para agendar sua consulta ou tirar dúvidas sobre os tratamentos.</p>
          <a className="primary light" href={tel}>Ligar agora <Arrow /></a>
        </div>
        <div className="contactInfo reveal">
          <div><small>ENDEREÇO</small><p>{site.address}</p><a href={site.map}>Ver no Google Maps <Arrow /></a></div>
          <div><small>TELEFONE</small><p><a href={tel}>{site.phone}</a></p></div>
        </div>
      </section>

      <footer>
        <div className="footTop">
          <div className="footBrand">
            <div className="brand"><b>{site.monogram}</b><span>{site.short}</span></div>
            <p>{site.about}</p>
          </div>
          <div className="footCol">
            <small>NAVEGUE</small>
            <a href="#tratamentos">Tratamentos</a>
            <a href="#clinica">Clínica</a>
            <a href="#contato">Contato</a>
          </div>
          <div className="footCol">
            <small>ATENDIMENTO</small>
            <span>{site.address}</span>
            <a href={tel}>{site.phone}</a>
          </div>
        </div>
        <div className="footBottom">
          <span>© 2026 {site.short}</span>
          <p>Conteúdo com caráter informativo. Consulte sempre um profissional para avaliação individual.</p>
        </div>
      </footer>
    </main>
  );
}
