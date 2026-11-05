/* DikoWebAI — "Ask Diko" website assistant.
   Client-side FAQ engine. Knowledge base mirrors ONLY the approved copy on
   dikowebai.ca and the Page's Messenger FAQs. Only public price = the pilot
   offer; contact = Messenger (m.me/FortMcMurrayWebAI) only. No backend. */
(function () {
  var MESSENGER = 'https://m.me/FortMcMurrayWebAI';

  var KB = [
    {
      id: 'price',
      keys: ['price', 'cost', 'how much', 'rate', 'rates', 'fee', 'fees', 'charge', 'expensive', 'per month', 'monthly', 'pricing', 'budget'],
      text: 'The pilot offer is $500 setup + $150 for the first month — that includes your website, Facebook Page setup, and the 24/7 Messenger assistant, with no long-term contract.\nAfter the pilot, plans continue month-to-month depending on what your business needs — message us on Messenger for the full rate card and your exact rate.',
      cta: 'Get my exact rate on Messenger'
    },
    {
      id: 'services',
      keys: ['services', 'service', 'what do you do', 'what do you offer', 'offer', 'include', 'included', 'package', 'packages', 'system'],
      text: 'We offer 7 services that work together as one system:\n1. Business Website with Quote Form\n2. Facebook Page Setup/Makeover\n3. 24/7 Messenger AI Assistant\n4. App Icon on Customers\u2019 Phones\n5. Monthly Content (8\u201312 posts)\n6. Review & Comment Replies\n7. Lead Log + Monthly Report\nMost businesses start with the pilot package — website, Page, and assistant together.'
    },
    {
      id: 'sample',
      keys: ['sample', 'free', 'preview', 'demo', 'example', 'try before', 'see your work', 'portfolio'],
      text: 'Yes — we recommend starting with a free sample: a sample post or a homepage preview made for your business, before you pay anything. Just message us on Messenger and ask for your free sample.',
      cta: 'Ask for my free sample'
    },
    {
      id: 'timeline',
      keys: ['how long', 'timeline', 'how fast', 'take to', 'weeks', 'when can', 'setup time', 'turnaround', 'ready'],
      text: 'Setup usually takes about 1 to 2 weeks from our first chat to launch, as long as we have your photos, hours, and business details. You review and approve everything before it goes live.'
    },
    {
      id: 'facebookVsWebsite',
      keys: ['already have a facebook', 'have a facebook page', 'need a website if', 'facebook page enough', 'just facebook', 'only facebook', 'need a website', 'why a website', 'why website'],
      text: 'They do different jobs. Your Facebook Page is rented space: Facebook controls it and can change the rules anytime. Your website is your own address on Google that you own and control — open 24/7 with your quote form. Together, they\u2019re much stronger than either one alone.'
    },
    {
      id: 'domainHosting',
      keys: ['domain', 'hosting', 'host', '.ca', 'web address', 'domain name', 'included in the setup'],
      text: 'Your domain name — your web address, about $15\u201325/year for a .ca — is registered in your own name and paid by you directly, so you own it always. We guide you step by step. For most small business sites we use reliable free hosting, so there is usually no monthly hosting fee to start.'
    },
    {
      id: 'logins',
      keys: ['login', 'logins', 'password', 'passwords', 'access', 'admin', 'own my website', 'handover', 'ownership', 'who owns'],
      text: 'Your domain and website are yours — you are the owner/admin and your passwords stay with you. We work through collaborator/developer access, never by sharing passwords. At handover you get a simple list of where everything is, plus renewal dates and costs.'
    },
    {
      id: 'contract',
      keys: ['contract', 'locked in', 'lock in', 'cancel', 'commitment', 'long-term', 'long term', 'obligation'],
      text: 'No long-term contract. The pilot is a one-time setup plus the first month. After that, it\u2019s month-to-month based on what you need — you\u2019re not locked in.'
    },
    {
      id: 'wrongPrices',
      keys: ['wrong price', 'wrong prices', 'give prices', 'give a quote', 'quotes itself', 'mistake', 'accurate', 'trust the assistant', 'final quote'],
      text: 'No — the assistant never gives final quotes or prices. It answers common questions and collects the details needed, then Rod personally reviews and approves every quote before it\u2019s sent. Rod also personally reads messages and replies within the day.'
    },
    {
      id: 'photos',
      keys: ['photo', 'photos', 'picture', 'pictures', 'stock', 'images', 'provide'],
      text: 'Yes — your monthly posts are made from real photos of your work, food, or business, not stock photos. Real photos build real trust. Just send us photos from your phone; we\u2019ll take care of captions and scheduling.'
    },
    {
      id: 'whoFor',
      keys: ['who is this for', 'for my business', 'restaurant', 'cleaning', 'detailing', 'trades', 'salon', 'barber', 'retail', 'shop', 'small business', 'fit'],
      text: 'DikoWebAI is made for Fort McMurray small businesses — restaurants and food businesses, cleaning and detailing, trades and home services, salons and barbers, small shops, and other local services. If customers message you to ask about price or availability, it\u2019s likely a fit.'
    },
    {
      id: 'content',
      keys: ['posts', 'posting', 'content', 'social media', 'how many posts', 'captions'],
      text: 'Monthly Content means 8 to 12 Facebook posts per month, made from your real photos — captions written for you and posts scheduled ahead of time. A Page that posts regularly looks active and open for business; quiet Pages look closed.'
    },
    {
      id: 'reviews',
      keys: ['review', 'reviews', 'comment', 'comments', 'google review', 'reputation', 'rating'],
      text: 'With Review & Comment Replies, every Google and Facebook review and comment is answered politely and quickly — thank-you replies for positive reviews, and calm, professional replies for negative ones. People read how you respond, and fast, polite replies show you care.'
    },
    {
      id: 'reports',
      keys: ['report', 'reports', 'lead log', 'leads', 'track', 'results', 'monthly report', 'inquiries'],
      text: 'You get a simple Lead Log of who inquired, plus a plain-language Monthly Report: what was posted, what came in, and what happened. No confusing charts or jargon — so you can actually see what your website and Page are doing for you.'
    },
    {
      id: 'appIcon',
      keys: ['app', 'icon', 'home screen', 'phone screen', 'app icon', 'customers phones'],
      text: 'Your website can be saved to a customer\u2019s phone home screen — just like an app, with your name and icon. No app store download needed, it works on iPhone and Android, and repeat customers can reach you in one tap.'
    },
    {
      id: 'website',
      keys: ['website', 'web site', 'quote form', 'google search', 'found on google', 'online'],
      text: 'Your Business Website shows your services, hours, location, and photos in one place, is easy to find on Google, and stays open 24/7 — with a quote form so customers can inquire anytime, even at midnight. And unlike Facebook, it\u2019s space you own and control.'
    },
    {
      id: 'assistant',
      keys: ['assistant', 'messenger assistant', 'chatbot', 'ai assistant', '24/7', 'after hours', 'missed', 'reply fast', 'instant'],
      text: 'The 24/7 Messenger AI Assistant answers common questions instantly — services, hours, location — day or night, weekends included. It collects the details you need for a quote, but never gives final prices; Rod approves every quote personally.'
    },
    {
      id: 'facebookPage',
      keys: ['facebook page', 'fb page', 'page setup', 'page makeover', 'fix my page', 'set up my page'],
      text: 'Facebook Page Setup & Makeover gives you a complete, tidy Page that looks trusted the moment a customer lands on it: proper profile photo, cover and bio, services listed clearly, and correct hours, address, and contact buttons — no empty sections.'
    },
    {
      id: 'ads',
      keys: ['ads', 'advertising', 'boost', 'ad spend', 'facebook ads'],
      text: 'If you ever run Facebook ads, the ad spend is separate and paid by you directly to Facebook. We never mark it up or hide it.'
    },
    {
      id: 'contact',
      keys: ['contact', 'phone', 'email', 'call', 'talk to', 'human', 'rod', 'reach you', 'get started', 'sign up', 'start', 'quote', 'book'],
      text: 'Everything goes through Messenger, so nothing gets missed — tap below and Rod, the owner, will reply personally within the day. You can ask there for a free sample or a quote.',
      cta: 'Message Rod on Messenger'
    },
    {
      id: 'about',
      keys: ['who are you', 'about', 'where are you', 'located', 'fort mcmurray', 'local', 'who is rod', 'company'],
      text: 'DikoWebAI is a local, owner-operated business run by Rod in Fort McMurray, Alberta — Web & AI Services for Fort McMurray small businesses. No big agency, no call centre: you deal directly with Rod, the same person who builds your website and approves your quotes. On Facebook we\u2019re Fort McMurray Web & AI Services (@FortMcMurrayWebAI).'
    }
  ];

  var FALLBACK = {
    text: 'That one is best answered by Rod himself — he can help you personally on Messenger, and he replies within the day.',
    cta: 'Ask Rod on Messenger'
  };

  var WELCOME = 'Hi! I\u2019m Diko, the DikoWebAI assistant. \uD83D\uDC4B I can answer quick questions about our 7 services, the pilot offer, and free samples — just type your question or tap a topic below.';
  var GREETING = 'Hi! I\u2019m Diko \uD83D\uDC4B Questions about a website or AI assistant for your business? Ask me here.';

  var CHIPS = ['How much does it cost?', 'Get a free sample', 'What services do you offer?', 'Do I need a website if I have a Facebook Page?', 'How long does setup take?', 'Talk to Rod'];

  function findAnswer(q) {
    q = ' ' + q.toLowerCase().replace(/[^a-z0-9\s/$.]/g, ' ').replace(/\s+/g, ' ') + ' ';
    var best = null, bestScore = 0;
    for (var i = 0; i < KB.length; i++) {
      var entry = KB[i], score = 0;
      for (var j = 0; j < entry.keys.length; j++) {
        var k = entry.keys[j];
        if (q.indexOf(k) !== -1) score += (k.indexOf(' ') !== -1 ? 3 : 1) + Math.min(k.length / 6, 2);
      }
      if (score > bestScore) { bestScore = score; best = entry; }
    }
    return bestScore >= 1 ? best : null;
  }

  /* ---------- Build DOM ---------- */
  var root = document.createElement('div');
  root.className = 'diko-asst';
  root.innerHTML =
    '<div class="diko-greet" role="button" tabindex="0"><button class="diko-greet-close" aria-label="Dismiss">&times;</button>' + GREETING + '</div>' +
    '<button class="diko-launcher" aria-label="Ask Diko — chat with the DikoWebAI assistant"><img src="diko-icon.png" alt=""><span class="diko-dot"></span>Ask Diko</button>' +
    '<div class="diko-panel" role="dialog" aria-label="Chat with Diko, the DikoWebAI assistant">' +
      '<div class="diko-head"><img src="diko-icon.png" alt="">' +
        '<div><div class="diko-title">Diko — DikoWebAI Assistant</div><div class="diko-sub"><span class="on">\u25CF</span> Answers instantly \u2022 24/7</div></div>' +
        '<button class="diko-close" aria-label="Close chat">&times;</button></div>' +
      '<div class="diko-msgs"></div>' +
      '<div class="diko-chips"></div>' +
      '<form class="diko-inputrow"><input type="text" placeholder="Type your question\u2026" aria-label="Type your question" autocomplete="off" maxlength="300"><button class="diko-send" type="submit">Send</button></form>' +
      '<div class="diko-foot">Automated assistant — for anything detailed, Rod replies personally on Messenger.</div>' +
    '</div>';
  document.body.appendChild(root);

  var msgs = root.querySelector('.diko-msgs');
  var chipsBox = root.querySelector('.diko-chips');
  var input = root.querySelector('.diko-inputrow input');
  var greeted = false, welcomed = false;

  try { greeted = sessionStorage.getItem('dikoAssistantGreeted') === '1'; } catch (e) {}
  if (!greeted) {
    setTimeout(function () {
      if (!root.classList.contains('open')) root.querySelector('.diko-greet').classList.add('show');
    }, 3000);
  }
  function dismissGreet() {
    root.querySelector('.diko-greet').classList.remove('show');
    try { sessionStorage.setItem('dikoAssistantGreeted', '1'); } catch (e) {}
  }
  root.querySelector('.diko-greet-close').addEventListener('click', function (e) { e.stopPropagation(); dismissGreet(); });
  root.querySelector('.diko-greet').addEventListener('click', function () { dismissGreet(); openPanel(); });

  function addMsg(who, text, cta) {
    var d = document.createElement('div');
    d.className = 'diko-msg ' + who;
    d.textContent = text;
    if (cta) {
      var a = document.createElement('a');
      a.className = 'diko-cta';
      a.href = MESSENGER;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = cta;
      d.appendChild(document.createElement('br'));
      d.appendChild(a);
    }
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showChips() {
    chipsBox.innerHTML = '';
    CHIPS.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'diko-chip';
      b.textContent = c;
      b.addEventListener('click', function () { ask(c === 'Talk to Rod' ? 'talk to Rod' : c); });
      chipsBox.appendChild(b);
    });
  }

  function ask(text) {
    var t = (text || '').trim();
    if (!t) return;
    addMsg('user', t);
    var ans = findAnswer(t);
    if (ans) addMsg('bot', ans.text, ans.cta || null);
    else addMsg('bot', FALLBACK.text, FALLBACK.cta);
  }

  function openPanel() {
    root.classList.add('open');
    if (!welcomed) { welcomed = true; addMsg('bot', WELCOME, null); showChips(); }
    setTimeout(function () { input.focus(); }, 60);
  }
  function closePanel() { root.classList.remove('open'); }

  root.querySelector('.diko-launcher').addEventListener('click', function () { dismissGreet(); openPanel(); });
  root.querySelector('.diko-close').addEventListener('click', closePanel);
  root.querySelector('.diko-inputrow').addEventListener('submit', function (e) {
    e.preventDefault();
    ask(input.value);
    input.value = '';
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePanel(); });
})();
