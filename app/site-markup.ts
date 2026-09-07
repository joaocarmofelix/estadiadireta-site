// Marcação exata da página original (nav ate footer), preservada tal como estava
// no index.html estatico. Mantida como uma string HTML (em vez de reescrita em JSX)
// para garantir zero alteracoes esteticas ou de comportamento na migracao para
// Next.js -- e injetada no DOM em app/page.tsx, que depois liga o mesmo
// comportamento de JavaScript (botoes de pacote + envio do formulario) via useEffect.

export const SITE_BODY_HTML = `
<nav class="top">
  <div class="wrap" style="display:flex;align-items:center;justify-content:space-between;width:100%">
    <span class="brand"><img src="https://res.cloudinary.com/duan4iac7/image/upload/v1788646560/logo_eegmge.png" alt="EstadiaDireta"></span>
    <div class="navlinks">
      <ul>
        <li><a href="#resultados">Resultados</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#como-funciona">Como funciona</a></li>
        <li><a href="#servicos">Serviços</a></li>
      </ul>
      <a class="btn btn-primary" href="#servicos">Criar o meu site →</a>
    </div>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <p class="eyebrow">Sites para Alojamento Local · Portugal</p>
    <h1 class="display">O seu alojamento merece a sua própria porta de entrada.</h1>
    <p class="lede">Sites bonitos e profissionais para Alojamento Local, pensados para o ajudarem a ser encontrado e a transformar visitas em reservas diretas.</p>
    <div class="cta-row">
      <a class="btn btn-primary" href="#resultados">Ver os resultados →</a>
      <a class="btn btn-secondary" href="#servicos">Criar o meu site</a>
    </div>
    <div class="hero-visual"><img src="https://res.cloudinary.com/duan4iac7/image/upload/v1788771905/image_ecjmxv.png" alt="Fotografia da propriedade com o site EstadiaDireta em destaque"></div>
  </div>
</header>

<section class="block tint" id="porque">
  <div class="wrap">
    <p class="kicker">A sua propriedade. O seu site. Os seus hóspedes.</p>
    <h2 class="display">Não precisa de escolher entre o Airbnb e o seu próprio site.</h2>
    <p class="block-lede">As plataformas são excelentes a colocar o seu alojamento à frente de viajantes, mas também se colocam entre si e o seu hóspede. O seu site dá à propriedade um lugar onde é encontrada no Google, conhecida como deve ser e, quando fizer sentido, reservada diretamente consigo. Mantém o Airbnb e o Booking; apenas acrescenta o seu próprio canal.</p>
    <div class="flow">
      <div class="flow-sources">
        <span class="tag">Google</span>
        <span class="tag">Instagram</span>
        <span class="tag">Airbnb / Booking</span>
        <span class="tag">Passa-palavra</span>
      </div>
      <span class="flow-arrow">→</span>
      <div class="flow-center">O seu site</div>
      <span class="flow-arrow">→</span>
      <div class="flow-results">
        <span class="tag">Contacto direto</span>
        <span class="tag">Reserva direta</span>
      </div>
    </div>
  </div>
</section>

<section class="block" id="resultados">
  <div class="wrap">
    <p class="kicker">Explore o site real</p>
    <h2 class="display">Isto é o que os seus hóspedes poderiam viver.</h2>
    <p class="block-lede">Uma propriedade. Um site. Uma experiência completa, da primeira fotografia ao pedido de reserva.</p>
    <div class="browser">
      <div class="browser-chrome">
        <div class="browser-dots"><span></span><span></span><span></span></div>
        <div class="browser-url">valedeveade.pt</div>
      </div>
      <div class="browser-body has-photo" style="background-image: linear-gradient(rgba(29,29,27,0.5), rgba(29,29,27,0.5)), url('https://res.cloudinary.com/duan4iac7/image/upload/v1788178314/Screenshot_2026-08-31_at_13.10.24_auq9sm.png');">
        <a class="btn btn-primary" href="https://www.valedeveade.pt/" target="_blank" rel="noopener noreferrer">Visitar o site →</a>
      </div>
    </div>
    <div class="site-intro">
      <h3>Vale de Veade</h3>
      <p>Lançado perto do início do verão, sem estar presente em nenhuma plataforma: apenas o site, redes sociais e uma ficha no Google Maps.</p>
    </div>
    <div class="timeline">
      <div class="tstep">
        <span class="t-when">Lançamento</span>
        <span class="t-what">Verão de 2026</span>
        <span class="t-note">Site no ar poucas semanas antes da época</span>
      </div>
      <div class="tstep">
        <span class="t-when">Primeiro verão</span>
        <span class="t-what">Época cheia</span>
        <span class="t-note">100% reservas diretas, 0 € em comissões pagas</span>
      </div>
    </div>

    <div class="metrics">
      <div class="metric"><span class="m-num">+3.500</span><span class="m-label">Visitantes desde o lançamento</span></div>
      <div class="metric"><span class="m-num">+25</span><span class="m-label">Reservas diretas</span></div>
      <div class="metric"><span class="m-num">92%</span><span class="m-label">Ocupação, jun. a ago. 2026</span></div>
      <div class="metric"><span class="m-num">0 €</span><span class="m-label">Comissões pagas</span></div>
      <div class="metric"><span class="m-num">4</span><span class="m-label">Idiomas do site</span></div>
    </div>
  </div>
</section>

<section class="block tint" id="sobre">
  <div class="wrap">
    <p class="kicker">Quem constrói o seu site</p>
    <h2 class="display">Uma base técnica sólida, não um site genérico.</h2>
    <p class="block-lede">Cada site da EstadiaDireta é construído com formação e experiência reais em engenharia informática: um curso profissional de 3 anos em Informática Aplicada à Web, seguido de um mestrado integrado em Engenharia Informática. Trabalho atualmente na área como engenheiro informático, e aplico essa mesma exigência técnica a cada site que construo, das fundações de código à experiência final que os seus hóspedes vão viver.</p>
  </div>
</section>

<section class="block">
  <div class="wrap">
    <p class="kicker">Visualmente apelativo é bom. Ser encontrado é melhor.</p>
    <h2 class="display">O site é construído a pensar nos motores de busca.</h2>
    <p class="block-lede">Cada site é construído com tudo o que realmente ajuda a ser encontrado: estrutura pensada para motores de busca, presença cuidada no Google e conteúdo sobre a zona envolvente.</p>
    <div class="search-flow">
      <span class="sf-item q">"casa de férias com piscina"</span>
      <span class="sep">→</span>
      <span class="sf-item">Google</span>
      <span class="sep">→</span>
      <span class="sf-item">A sua propriedade aparece</span>
      <span class="sep">→</span>
      <span class="sf-item">Visita o site</span>
      <span class="sep">→</span>
      <span class="sf-item">Vê a disponibilidade</span>
      <span class="sep">→</span>
      <span class="sf-item">Contacta / reserva</span>
    </div>
    <ul class="seo-list">
      <li>Conteúdo estruturado</li>
      <li>SEO técnico</li>
      <li>SEO local</li>
      <li>Metadados corretos</li>
      <li>Carregamento rápido</li>
      <li>Otimização para telemóvel</li>
      <li>Perfil Google Business</li>
      <li>Conteúdo sobre a zona</li>
    </ul>
  </div>
</section>

<section class="block tint">
  <div class="wrap">
    <p class="kicker">Mais do que a casa</p>
    <h2 class="display">Não mostre apenas a propriedade. Mostre as férias.</h2>
    <p class="block-lede">Há várias formas de dar a conhecer a zona aos hóspedes, muito para além de um mapa: guias com fotografias, recomendações locais e pontos de interesse organizados de forma visual.</p>
    <div class="showcase">
      <div class="showcase-item">
        <span class="si-icon">🗺️</span>
        <div class="si-title">Mapa interativo</div>
        <div class="si-desc">Praias, trilhos e atividades marcados à volta da propriedade, para o hóspede situar-se de imediato.</div>
      </div>
      <div class="showcase-item">
        <span class="si-icon">📍</span>
        <div class="si-title">Guia da zona</div>
        <div class="si-desc">Uma página dedicada, com fotografias e texto, sobre os locais mais procurados perto da casa.</div>
      </div>
      <div class="showcase-item">
        <span class="si-icon">🍽️</span>
        <div class="si-title">Recomendações locais</div>
        <div class="si-desc">Uma grelha com os restaurantes e espaços típicos da zona, com contacto e morada.</div>
      </div>
    </div>
    <div class="local-map">
      <svg class="lm-terrain" viewBox="0 0 1000 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect x="0" y="0" width="1000" height="480" />
        <path d="M0,110 C110,90 150,40 260,55 C340,66 330,140 260,160 C160,188 60,150 0,175 Z" fill="var(--green)" opacity="0.16"/>
        <path d="M1000,360 C880,330 830,400 860,460 C900,485 970,470 1000,440 Z" fill="var(--green)" opacity="0.14"/>
        <path d="M640,60 C740,45 830,90 800,150 C770,205 660,190 630,140 C610,105 600,70 640,60 Z" fill="var(--stone)" opacity="0.5"/>
        <path d="M0,300 C150,275 210,190 350,205 C500,222 540,330 700,315 C830,302 900,250 1000,268" fill="none" stroke="var(--pin-beach)" stroke-width="7" stroke-linecap="round" opacity="0.4"/>
        <path d="M120,0 C140,100 260,130 265,240 C270,350 190,410 210,480" fill="none" stroke="var(--stone)" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 14" opacity="0.75"/>
        <path d="M420,480 C440,400 520,380 560,300 C600,220 700,210 760,150" fill="none" stroke="var(--stone)" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 14" opacity="0.75"/>
      </svg>

      <div class="lm-property">
        <span class="prop-dot">🏠</span>
        <span class="prop-label">A sua propriedade</span>
      </div>
      <div class="lm-pin lm-p1" style="--pin-color: var(--pin-hike)">
        <span class="pin-dot"><span class="pin-emoji">🥾</span></span>
        <span class="pin-label">Caminhada</span>
      </div>
      <div class="lm-pin lm-p2" style="--pin-color: var(--pin-wine)">
        <span class="pin-dot"><span class="pin-emoji">🍷</span></span>
        <span class="pin-label">Vinícola</span>
      </div>
      <div class="lm-pin lm-p3" style="--pin-color: var(--pin-beach)">
        <span class="pin-dot"><span class="pin-emoji">🏖️</span></span>
        <span class="pin-label">Praia fluvial</span>
      </div>
      <div class="lm-pin lm-p4" style="--pin-color: var(--pin-food)">
        <span class="pin-dot"><span class="pin-emoji">🍽️</span></span>
        <span class="pin-label">Restaurante</span>
      </div>
      <div class="lm-pin lm-p5" style="--pin-color: var(--green)">
        <span class="pin-dot"><span class="pin-emoji">🏰</span></span>
        <span class="pin-label">Atração local</span>
      </div>
    </div>
    <div class="lm-legend">
      <span class="lg-item"><span class="lg-dot" style="--dot-color: var(--pin-hike)"></span>Caminhada</span>
      <span class="lg-item"><span class="lg-dot" style="--dot-color: var(--pin-wine)"></span>Vinícola</span>
      <span class="lg-item"><span class="lg-dot" style="--dot-color: var(--pin-beach)"></span>Praia fluvial</span>
      <span class="lg-item"><span class="lg-dot" style="--dot-color: var(--pin-food)"></span>Restaurante</span>
      <span class="lg-item"><span class="lg-dot" style="--dot-color: var(--green)"></span>Atração local</span>
    </div>
  </div>
</section>

<section class="block" id="como-funciona">
  <div class="wrap">
    <p class="kicker">Como funciona</p>
    <h2 class="display">Do domínio vazio ao calendário com reservas.</h2>
    <div class="process">
      <div class="p-step"><span class="p-num">01</span><div class="p-title">Fale-nos da propriedade</div><div class="p-desc">Envie fotos, informação e o que torna o seu espaço especial.</div></div>
      <div class="p-step"><span class="p-num">02</span><div class="p-title">Construímos a experiência</div><div class="p-desc">O site é desenhado à volta da propriedade e do hóspede que procura.</div></div>
      <div class="p-step"><span class="p-num">03</span><div class="p-title">Ligamos tudo</div><div class="p-desc">Calendário, plataformas, Google, mapa, pedidos, análises.</div></div>
      <div class="p-step"><span class="p-num">04</span><div class="p-title">Vai ao ar</div><div class="p-desc">A propriedade passa a ter a sua própria morada digital.</div></div>
      <div class="p-step"><span class="p-num">05</span><div class="p-title">Continua a receber reservas</div><div class="p-desc">Mantemos e melhoramos o site à medida que a propriedade cresce.</div></div>
    </div>
  </div>
</section>

<section class="block tint" id="servicos">
  <div class="wrap">
    <p class="kicker">Preços de lançamento</p>
    <h2 class="display">Tudo o que a sua propriedade precisa para ir direta.</h2>
    <p class="block-lede">Preço fixo, sem surpresas. Os valores abaixo são de lançamento, reservados aos primeiros alojamentos a aderir. Comece agora e garanta o preço mais baixo!</p>
    <div class="tiers">
      <div class="tier">
        <span class="t-name">Essencial</span>
        <span class="t-tag">A sua propriedade, online, com uma presença profissional.</span>
        <span class="t-price">desde 350 €</span>
        <ul>
          <li>Site personalizado<span class="t-sub">pronto em cerca de 2 semanas</span></li>
          <li>Apresentação da propriedade</li>
          <li>Galeria de fotos</li>
          <li>Comodidades</li>
          <li>Formulário de contacto com escolha de datas</li>
          <li>Domínio grátis<span class="t-sub">extensão genérica, ex: .store</span></li>
          <li>Google Maps</li>
          <li>Site em 1 idioma</li>
          <li>SEO básico<span class="t-sub">metadados, velocidade e otimização para telemóvel</span></li>
        </ul>
        <a class="btn btn-secondary tier-select" href="#contacto" data-package="Essencial (350 €)" data-message="Gostava de avançar com o pacote Essencial (350 €).">Começar</a>
      </div>
      <div class="tier featured">
        <span class="t-name">Direto</span>
        <span class="t-tag">O site passa a ser um verdadeiro canal de reservas.</span>
        <span class="t-price">desde 750 €</span>
        <ul>
          <li>Tudo do Essencial, e:</li>
          <li>Até 3 idiomas</li>
          <li>Domínio profissional próprio<span class="t-sub">.pt ou .com</span></li>
          <li>Calendário de disponibilidade<span class="t-sub">atualiza o site sempre que marcar as datas no seu Google Calendar</span></li>
          <li>Pedidos de reserva direta</li>
          <li>Notificações de reserva</li>
          <li>Email de confirmação de reserva<span class="t-sub">template com dados bancários e pedido de sinal</span></li>
          <li>Guia da zona e recomendações locais</li>
          <li>SEO avançado<span class="t-sub">+ SEO técnico, SEO local e conteúdo estruturado</span></li>
        </ul>
        <a class="btn btn-primary tier-select" href="#contacto" data-package="Direto (750 €)" data-message="Gostava de avançar com o pacote Direto (750 €).">Criar o meu site →</a>
      </div>
      <div class="tier">
        <span class="t-name">Completo</span>
        <span class="t-tag">A receção digital da sua propriedade.</span>
        <span class="t-price">desde 1.300 €</span>
        <ul>
          <li>Tudo do Direto, e:</li>
          <li>Ligação a Airbnb e Booking<span class="t-sub">calendário sincronizado automaticamente, sem atualizar nada à mão</span></li>
          <li>Até 10 idiomas</li>
          <li>Emails de reserva em vários idiomas<span class="t-sub">confirmação e pedido de sinal, num template por idioma do site</span></li>
          <li>Mapa interativo da zona<span class="t-sub">com pontos de interesse personalizados</span></li>
          <li>Painel de análises</li>
          <li>Perfil Google Business<span class="t-sub">ficha no Google Maps, atribuída à sua conta Google</span></li>
          <li>Domínio e email profissionais<span class="t-sub">configuração completa, com um email como reservas@suapropriedade.com</span></li>
          <li>Dados estruturados para o Google<span class="t-sub">resultados mais ricos na pesquisa: preço, avaliações e tipo de alojamento</span></li>
          <li>Botão de contacto direto por WhatsApp</li>
          <li>Vídeos de lançamento nas redes sociais da EstadiaDireta<span class="t-sub">1ª semana, com as fotos e vídeos que enviar</span></li>
          <li>Manutenção incluída no 1º ano</li>
        </ul>
        <a class="btn btn-secondary tier-select" href="#contacto" data-package="Completo (1.300 €)" data-message="Gostava de avançar com o pacote Completo (1.300 €).">Falar comigo</a>
      </div>
    </div>
    <p class="care-note">Manutenção a partir de 20 €/mês, ou 2 meses grátis a pagar anualmente. Segunda propriedade do mesmo dono: −40% no pacote base.</p>
  </div>
</section>

<section class="final-cta" id="contacto">
  <div class="wrap-narrow">
    <p class="kicker" style="text-align:center">A sua propriedade pode ser a próxima</p>
    <h2 class="display">Dê à sua propriedade a porta de entrada que ela merece.</h2>
    <form class="contact-form" id="contact-form">
      <div class="cf-row">
        <label for="cf-name">Nome
          <input type="text" id="cf-name" name="cf-name" required>
        </label>
        <label for="cf-email">Email
          <input type="email" id="cf-email" name="cf-email" required>
        </label>
      </div>
      <label for="cf-property">Propriedade / Localização
        <input type="text" id="cf-property" name="cf-property" placeholder="ex: Casa da Quinta, Valedeveade">
      </label>
      <label for="cf-package">Pacote pretendido
        <select id="cf-package" name="cf-package">
          <option value="Ainda não decidi">Ainda não decidi</option>
          <option value="Essencial (350 €)">Essencial (350 €)</option>
          <option value="Direto (750 €)">Direto (750 €)</option>
          <option value="Completo (1.300 €)">Completo (1.300 €)</option>
        </select>
      </label>
      <label for="cf-message">Mensagem
        <textarea id="cf-message" name="cf-message" placeholder="Conte-me um pouco sobre a sua propriedade e o que procura."></textarea>
      </label>
      <button type="submit" class="btn btn-primary">Enviar pedido</button>
      <div class="cf-overlay" id="cf-overlay" hidden>
        <p class="cf-overlay-title" id="cf-overlay-title"></p>
        <p class="cf-overlay-text" id="cf-overlay-text"></p>
        <button type="button" class="btn btn-secondary cf-overlay-close" id="cf-overlay-close">Fechar</button>
      </div>
    </form>
  </div>
</section>

<footer>
  <div class="wrap">
    <span class="f-brand"><img src="https://res.cloudinary.com/duan4iac7/image/upload/v1788646560/logo_eegmge.png" alt="EstadiaDireta"></span>
    <span>Sites para Alojamento Local · estadiadireta@gmail.com</span>
  </div>
</footer>`;
