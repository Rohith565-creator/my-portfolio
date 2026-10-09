/* ==========================================================
   Rohit — Portfolio v2 · main.js
   ========================================================== */
(function () {
  'use strict';

  var TO_EMAIL = 'rohithsainizampatnam@gmail.com';
  var WHATSAPP = 'https://wa.me/917330652920';
  var ENDPOINT = 'https://formsubmit.co/ajax/' + TO_EMAIL;

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ------------------------------------------------------
     DATA
  ------------------------------------------------------ */
  var tech = ['WordPress', 'PHP', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS', 'API Integrations', 'Linux', 'VPS', 'Docker', 'Cloudflare', 'GSAP', 'SEO', 'Automation', 'AI Agents', 'LangChain', 'OpenAI APIs', 'RAG Systems', 'CRM Development'];

  var aiCards = [
    ['fa-brain', 'Agentic AI Systems', 'Multi-step autonomous agents with tools, memory and goals.'],
    ['fa-microchip', 'AI Model Integration', 'OpenAI, Claude, Gemini and open-source LLM pipelines.'],
    ['fa-gears', 'Workflow Automation', 'n8n, Make and custom scripts orchestrating ops end-to-end.'],
    ['fa-network-wired', 'Multi-Agent Systems', 'Specialised agents collaborating on planning and execution.'],
    ['fa-database', 'RAG Systems', 'Vector search + LLM retrieval for grounded answers at scale.'],
    ['fa-bolt', 'AI Website Workflows', 'Smart content, lead routing and personalisation on WordPress.'],
    ['fa-code', 'LLM Integrations', 'Custom APIs, prompt engineering, evals and observability.'],
    ['fa-rocket', 'Autonomous Operations', 'Self-running pipelines that cut repetitive manual work.'],
    ['fa-wand-magic-sparkles', 'AI Productivity', 'Copilots embedded in dashboards, CRMs and team workflows.']
  ];

  var steps = [['fa-lightbulb', 'Idea'], ['fa-brain', 'AI Planning'], ['fa-gears', 'Automation'], ['fa-code', 'Development'], ['fa-flask', 'Testing'], ['fa-rocket', 'Deployment']];

  var services = [
    ['WordPress Development', 'Custom themes, plugins and headless setups.'],
    ['Full Stack Web Development', 'React, Node.js, APIs and modern stacks.'],
    ['SaaS MVP Development', 'From idea to live product in weeks.'],
    ['CRM Development', 'Tailored CRMs with automations and AI.'],
    ['AI Workflow Automation', 'Agentic flows that run your operations.'],
    ['SEO Optimisation', 'Technical SEO that ranks and converts.'],
    ['VPS Deployment', 'Linux, Docker, Nginx and Cloudflare setups.'],
    ['Performance Optimisation', 'Fast loads, clean code and strong Core Web Vitals.']
  ];

  var cats = {
    all: 'All works',
    tech: 'IT & Software',
    health: 'Healthcare & Wellness',
    food: 'Food & Hospitality',
    industrial: 'Industrial & Construction',
    edu: 'Education & Non-profit'
  };

  var tones = { tech: '#c6f432', health: '#ffd3c4', food: '#ffe27a', industrial: '#b9c9ff', edu: '#d7c8ff' };

  var works = [
    { n: 'SprintPark Technologies', u: 'https://sprintpark.com/', d: 'sprintpark.com', c: 'tech',
      logo: 'https://sprintpark.com/assets/header/header-logo.png',
      t: 'AI solutions, software development and product engineering company with products, services and industry pages.',
      tags: ['AI Solutions', 'Product Engineering', 'Staffing'] },
    { n: 'MatrixSoftTek', u: 'https://matrixsofttek.com/', d: 'matrixsofttek.com', c: 'tech',
      logo: 'https://matrixsofttek.com/public/assets/images/logo.png',
      t: 'IT staffing and talent solutions firm covering contract, contract-to-hire and direct hire engagements.',
      tags: ['IT Staffing', 'Talent Solutions', 'Corporate'] },
    { n: 'KAAPSOL LLC', u: 'https://kaapsol.com/', d: 'kaapsol.com', c: 'tech',
      logo: 'https://kaapsol.com/wp-content/uploads/2021/08/logo-dark.png',
      t: 'Technology-focused IT services and consulting across cloud, DevOps, data analytics, AI/ML and Salesforce.',
      tags: ['IT Consulting', 'Cloud & DevOps', 'AI / ML'] },
    { n: 'Kerala Lotus Ayurveda Care', u: 'https://keralaayurvedacare.com/', d: 'keralaayurvedacare.com', c: 'health', dark: true,
      logo: 'https://keralaayurvedacare.com/wp-content/uploads/2024/08/KERALA-LOTUS-AYURVEDA-CARE_Dbg-01.png',
      t: 'Authentic Kerala Ayurveda therapies and massage in Hyderabad, with therapy pages, pricing and booking.',
      tags: ['Wellness', 'Appointments', 'WordPress'] },
    { n: 'LBR Dental & Implant Center', u: 'https://lbrdentalimplants.com/', d: 'lbrdentalimplants.com', c: 'health',
      logo: 'https://lbrdentalimplants.com/wp-content/uploads/2024/02/lbr-logo-web.png',
      t: 'Advanced dental implant clinic in Hyderabad serving international patients, with treatment, blog and research content.',
      tags: ['Healthcare', 'Dental Tourism', 'Content & SEO'] },
    { n: 'Suprabhat Austin', u: 'https://www.suprabhataustin.com/', d: 'suprabhataustin.com', c: 'food',
      logo: 'https://images.squarespace-cdn.com/content/v1/69c2bb3e42f1d407fe727263/455bcc09-9afb-4c50-aedb-02d89e5041c1/Suprabhat+Logo.png?format=1500w',
      t: 'Pure vegetarian Indian restaurant in Austin, TX with menu, catering, rewards and online ordering.',
      tags: ['Restaurant', 'Online Ordering', 'Catering'] },
    { n: 'Roti Point', u: 'https://rotipoint.com/', d: 'rotipoint.com', c: 'food',
      logo: 'https://rotipoint.com/wp-content/uploads/2022/08/Logo-Final-final-02.png',
      t: 'Fresh, preservative-free roti producer and wholesale distributor in Michigan with delivery and store pickup.',
      tags: ['Food Brand', 'Delivery', 'Wholesale'] },
    { n: 'Orange Roofing Construction', u: 'https://orcrestoration.com/', d: 'orcrestoration.com', c: 'industrial',
      logo: 'https://orcrestoration.com/wp-content/uploads/2023/03/Logo.png',
      t: 'Roofing, storm damage restoration and general construction services in Texas with inspection requests.',
      tags: ['Construction', 'Lead Generation', 'Local Business'] },
    { n: 'Fabricast', u: 'https://fabricast.net/', d: 'fabricast.net', c: 'industrial',
      logo: 'https://fabricast.net/wp-content/uploads/2025/05/fabricast-new-logo-HD.png',
      t: 'Welding and cutting equipment distributor across the GCC with brand catalogues, rentals and quote requests.',
      tags: ['Industrial', 'Multi-region', 'Catalogue'] },
    { n: "St. Peter's Engineering College", u: 'https://www.spechyd.ac.in/', d: 'spechyd.ac.in', c: 'edu',
      logo: '',
      t: 'Autonomous engineering college in Hyderabad with departments, admissions, placements, events and student life.',
      tags: ['Education', 'Admissions', 'Events'] },
    { n: 'Leap4u', u: 'https://leap4u.org/', d: 'leap4u.org', c: 'edu',
      logo: 'https://leap4u.org/wp-content/uploads/2024/03/new-logo.png',
      t: '501(c)(3) nonprofit fighting hunger and waste, with programs, impact metrics, volunteering and donations.',
      tags: ['Non-profit', 'Donations', 'Impact'] }
  ];

  /* ------------------------------------------------------
     NAV, PROGRESS, MOBILE MENU
  ------------------------------------------------------ */
  var nav = $('#nav'), prog = $('#progress');
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var burger = $('#burger'), drawer = $('#drawer');
  function setMenu(open) {
    drawer.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    drawer.setAttribute('aria-hidden', String(!open));
  }
  burger.addEventListener('click', function () { setMenu(!drawer.classList.contains('open')); });
  $$('a', drawer).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // active link highlight
  var links = $$('.nav-links a');
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id); });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(function (s) { spy.observe(s); });

  /* ------------------------------------------------------
     SIMPLE RENDERS
  ------------------------------------------------------ */
  function bars(id, n, step) {
    var el = $(id); if (!el) return;
    var out = '';
    for (var i = 0; i < n; i++) out += '<i style="animation-delay:' + (i * step).toFixed(1) + 's"></i>';
    el.innerHTML = out;
  }
  bars('#hero-bars', 5, 0.3);
  bars('#saas-bars', 7, 0.25);

  var tickerWords = ['WordPress', 'Agentic AI', 'Automation', 'Full Stack', 'SaaS', 'RAG Systems', 'CRM', 'Performance'];
  var tick = tickerWords.concat(tickerWords).map(function (t) { return '<span>' + t + '</span>'; }).join('');
  $('#ticker').innerHTML = tick;

  $('#stack-grid').innerHTML = tech.map(function (t) { return '<span class="pill">' + t + '</span>'; }).join('');

  $('#ai-grid').innerHTML = aiCards.map(function (c) {
    return '<article class="ai-card"><i class="fa-solid ' + c[0] + '"></i><h3>' + c[1] + '</h3><p>' + c[2] + '</p></article>';
  }).join('');

  $('#pipeline').innerHTML = steps.map(function (s, i) {
    return '<span class="step"><i class="fa-solid ' + s[0] + '"></i>' + s[1] + '</span>' +
      (i < steps.length - 1 ? '<span class="arrow"><i class="fa-solid fa-arrow-right"></i></span>' : '');
  }).join('');

  $('#svc-list').innerHTML = services.map(function (s, i) {
    return '<div class="svc"><span class="n">' + String(i + 1).padStart(2, '0') + '</span><h3>' + s[0] + '</h3><p>' + s[1] + '</p><i class="fa-solid fa-arrow-right"></i></div>';
  }).join('');

  /* ------------------------------------------------------
     WORKS (logos with fallback chain)
  ------------------------------------------------------ */
  function logoImg(w) {
    var mono = w.n.replace(/[^A-Za-z ]/g, '').split(' ').slice(0, 2).map(function (s) { return s[0]; }).join('').toUpperCase();
    var fav = 'https://www.google.com/s2/favicons?domain=' + w.d + '&sz=128';
    return '<img src="' + (w.logo || fav) + '" data-fav="' + fav + '" data-mono="' + mono + '" alt="' + w.n + ' logo" loading="lazy" decoding="async" referrerpolicy="no-referrer">';
  }
  function wireFallbacks(root) {
    $$('img[data-fav]', root).forEach(function (img) {
      img.addEventListener('error', function onErr() {
        if (!img.dataset.tried && img.src !== img.dataset.fav) { img.dataset.tried = '1'; img.src = img.dataset.fav; return; }
        img.removeEventListener('error', onErr);
        var m = document.createElement('span');
        m.className = 'mono-logo'; m.textContent = img.dataset.mono;
        img.replaceWith(m);
      });
    });
  }

  var track = $('#logo-track');
  track.innerHTML = works.concat(works).map(function (w) {
    return '<a class="lg-pill' + (w.dark ? ' dark' : '') + '" href="' + w.u + '" target="_blank" rel="noopener" tabindex="-1" title="' + w.n + '">' + logoImg(w) + '</a>';
  }).join('');
  wireFallbacks(track);

  var fWrap = $('#filters');
  fWrap.innerHTML = Object.keys(cats).map(function (k, i) {
    return '<button class="filter' + (i === 0 ? ' active' : '') + '" data-cat="' + k + '" role="tab" aria-selected="' + (i === 0) + '">' + cats[k] + (k === 'all' ? ' (' + works.length + ')' : '') + '</button>';
  }).join('');

  var grid = $('#works-grid');
  grid.innerHTML = works.map(function (w, i) {
    return '<a class="work reveal" href="' + w.u + '" target="_blank" rel="noopener" data-cat="' + w.c + '" aria-label="Open ' + w.n + '">' +
      '<div class="work-top" style="--tone:' + tones[w.c] + '">' +
        '<span class="cat">' + cats[w.c] + '</span><span class="idx">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<div class="logo-box' + (w.dark ? ' dark' : '') + '">' + logoImg(w) + '</div>' +
      '</div>' +
      '<div class="work-body"><h3>' + w.n + '</h3><div class="dom">' + w.d + '</div><p>' + w.t + '</p>' +
        '<div class="tags">' + w.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
        '<span class="visit">Visit website <i class="fa-solid fa-arrow-up-right-from-square"></i></span></div>' +
    '</a>';
  }).join('');
  wireFallbacks(grid);

  fWrap.addEventListener('click', function (e) {
    var b = e.target.closest('.filter'); if (!b) return;
    $$('.filter', fWrap).forEach(function (x) { x.classList.remove('active'); x.setAttribute('aria-selected', 'false'); });
    b.classList.add('active'); b.setAttribute('aria-selected', 'true');
    var cat = b.dataset.cat;
    $$('.work', grid).forEach(function (card) {
      var show = cat === 'all' || card.dataset.cat === cat;
      card.classList.toggle('hide', !show);
      if (show) card.classList.add('in');
    });
  });

  /* ------------------------------------------------------
     REVEAL + COUNTERS
  ------------------------------------------------------ */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var el = e.target;
        if (el.classList.contains('ai-card')) {
          var idx = $$('.ai-card').indexOf(el);
          el.style.transitionDelay = ((idx % 3) * 90) + 'ms';
        }
        el.classList.add('in');
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal, .ai-card').forEach(function (el) { io.observe(el); });

  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      var target = +el.dataset.target;
      var suffix = el.dataset.suffix !== undefined ? el.dataset.suffix : '+';
      var n = 0, step = Math.max(1, Math.ceil(target / 40));
      var iv = setInterval(function () {
        n += step;
        if (n >= target) { n = target; clearInterval(iv); }
        el.textContent = n + suffix;
      }, 30);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('.counter').forEach(function (c) { cio.observe(c); });

  /* ------------------------------------------------------
     WAITLIST PREFILL
  ------------------------------------------------------ */
  $$('.prefill').forEach(function (a) {
    a.addEventListener('click', function () {
      var m = $('#f-msg');
      if (m && !m.value) m.value = a.dataset.prefill;
    });
  });

  /* ------------------------------------------------------
     CONTACT FORM → FormSubmit → TO_EMAIL
  ------------------------------------------------------ */
  var form = $('#contact-form');
  var status = $('#form-status');
  var btn = $('#f-btn'), btnText = $('#f-btn-text'), btnIcon = $('#f-btn-icon');

  function show(html, ok) {
    status.hidden = false;
    status.className = 'status ' + (ok ? 'ok' : 'warn');
    status.innerHTML = html;
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); }

  function fallback(d) {
    var body = encodeURIComponent('Name: ' + d.name + '\nEmail: ' + d.email + '\nPhone: ' + (d.phone || '-') + '\n\n' + d.message);
    var subj = encodeURIComponent('Portfolio enquiry from ' + d.name);
    var wa = WHATSAPP + '?text=' + encodeURIComponent('Hi Rohit, ' + d.message);
    return "We couldn't send this automatically. Please <a href=\"mailto:" + TO_EMAIL + '?subject=' + subj + '&body=' + body + '">send it by email</a> or <a href="' + wa + '" target="_blank" rel="noopener">message me on WhatsApp</a>.';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.elements._honey.value) return; // bot trap

    var d = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      phone: form.elements.phone.value.trim(),
      message: form.elements.message.value.trim()
    };
    if (!d.name || !d.message) { show('Please fill in your name and project details.', false); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) { show('Please enter a valid email address.', false); return; }

    btn.disabled = true; btnText.textContent = 'Sending...'; btnIcon.className = 'fa-solid fa-circle-notch fa-spin';

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: d.name, email: d.email, phone: d.phone || 'Not provided', message: d.message,
        _subject: 'New portfolio enquiry from ' + d.name,
        _replyto: d.email, _template: 'table', _captcha: 'false'
      })
    })
      .then(function (res) { return res.json().catch(function () { return {}; }).then(function (data) { return { ok: res.ok, data: data }; }); })
      .then(function (r) {
        if (r.ok && (r.data.success === true || r.data.success === 'true')) {
          show("Thanks, " + esc(d.name) + "! Your message is on its way. I'll get back to you within 24 hours.", true);
          form.reset();
        } else {
          throw new Error((r.data && r.data.message) || 'Send failed');
        }
      })
      .catch(function () { show(fallback(d), false); })
      .then(function () {
        btn.disabled = false; btnText.textContent = 'Send message'; btnIcon.className = 'fa-solid fa-paper-plane';
      });
  });
})();
