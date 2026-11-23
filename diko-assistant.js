/* DikoWebAI — "Ask Diko" website assistant.
   Client-side FAQ engine. Knowledge base v2 (42 topics), approved by Rod
   Nov 23, 2026 — mirrors ONLY the approved copy on dikowebai.ca and the
   Page's Messenger FAQs; same entries as the Messenger frontdesk agent's
   KB (kb-v2-draft.md). Only public price = the pilot offer; exact rates
   come from Rod himself. Contact = Messenger (m.me/FortMcMurrayWebAI)
   only. No backend. */
(function () {
  var MESSENGER = 'https://m.me/FortMcMurrayWebAI';

  var KB = [
    {
      "cta": "Ask Rod for my exact rate",
      "id": "price",
      "keys": [
        "price",
        "cost",
        "how much",
        "rate",
        "rates",
        "fee",
        "fees",
        "charge",
        "expensive",
        "per month",
        "monthly",
        "pricing",
        "budget"
      ],
      "text": "The pilot offer is $500 setup + $150 for the first month — that includes your website, Facebook Page setup, and the 24/7 Messenger assistant, with no long-term contract.\nAfter the pilot, plans continue month-to-month depending on what your business needs. For your exact rate, Rod will personally give it to you — I'll pass your question to him and he'll reply within the day."
    },
    {
      "id": "services",
      "keys": [
        "services",
        "service",
        "what do you do",
        "what do you offer",
        "offer",
        "include",
        "included",
        "package",
        "packages",
        "system"
      ],
      "text": "We offer 7 services that work together as one system:\n1. Business Website with Quote Form\n2. Facebook Page Setup/Makeover\n3. 24/7 Messenger AI Assistant\n4. App Icon on Customers’ Phones\n5. Monthly Content (8–12 posts)\n6. Review & Comment Replies\n7. Lead Log + Monthly Report\nMost businesses start with the pilot package — website, Page, and assistant together."
    },
    {
      "cta": "Ask for my free sample",
      "id": "sample",
      "keys": [
        "sample",
        "free",
        "preview",
        "demo",
        "example",
        "try before",
        "see your work",
        "portfolio"
      ],
      "text": "Yes — we recommend starting with a free sample: a sample post or a homepage preview made for your business, before you pay anything. Just message us on Messenger and ask for your free sample."
    },
    {
      "id": "timeline",
      "keys": [
        "how long",
        "timeline",
        "how fast",
        "take to",
        "weeks",
        "when can",
        "setup time",
        "turnaround",
        "ready"
      ],
      "text": "Setup usually takes about 1 to 2 weeks from our first chat to launch, as long as we have your photos, hours, and business details. You review and approve everything before it goes live."
    },
    {
      "id": "facebookVsWebsite",
      "keys": [
        "already have a facebook",
        "have a facebook page",
        "need a website if",
        "facebook page enough",
        "just facebook",
        "only facebook",
        "need a website",
        "why a website",
        "why website"
      ],
      "text": "They do different jobs. Your Facebook Page is rented space: Facebook controls it and can change the rules anytime. Your website is your own address on Google that you own and control — open 24/7 with your quote form. Together, they’re much stronger than either one alone."
    },
    {
      "id": "domainHosting",
      "keys": [
        "domain",
        "hosting",
        "host",
        ".ca",
        "web address",
        "domain name",
        "included in the setup"
      ],
      "text": "Your domain name — your web address, about $15–25/year for a .ca — is registered in your own name and paid by you directly, so you own it always. We guide you step by step. For most small business sites we use reliable free hosting, so there is usually no monthly hosting fee to start."
    },
    {
      "id": "logins",
      "keys": [
        "login",
        "logins",
        "password",
        "passwords",
        "access",
        "admin",
        "own my website",
        "handover",
        "ownership",
        "who owns"
      ],
      "text": "Your domain and website are yours — you are the owner/admin and your passwords stay with you. We work through collaborator/developer access, never by sharing passwords. At handover you get a simple list of where everything is, plus renewal dates and costs."
    },
    {
      "id": "contract",
      "keys": [
        "contract",
        "locked in",
        "lock in",
        "cancel",
        "commitment",
        "long-term",
        "long term",
        "obligation"
      ],
      "text": "No long-term contract. The pilot is a one-time setup plus the first month. After that, it’s month-to-month based on what you need — you’re not locked in."
    },
    {
      "id": "wrongPrices",
      "keys": [
        "wrong price",
        "wrong prices",
        "give prices",
        "give a quote",
        "quotes itself",
        "mistake",
        "accurate",
        "trust the assistant",
        "final quote"
      ],
      "text": "No — the assistant never gives final quotes or prices. It answers common questions and collects the details needed, then Rod personally reviews and approves every quote before it’s sent. Rod also personally reads messages and replies within the day."
    },
    {
      "id": "photos",
      "keys": [
        "photo",
        "photos",
        "picture",
        "pictures",
        "stock",
        "images",
        "provide"
      ],
      "text": "Yes — your monthly posts are made from real photos of your work, food, or business, not stock photos. Real photos build real trust. Just send us photos from your phone; we’ll take care of captions and scheduling."
    },
    {
      "id": "whoFor",
      "keys": [
        "who is this for",
        "for my business",
        "restaurant",
        "cleaning",
        "detailing",
        "trades",
        "salon",
        "barber",
        "retail",
        "shop",
        "small business",
        "fit"
      ],
      "text": "DikoWebAI is made for Fort McMurray small businesses — restaurants and food businesses, cleaning and detailing, trades and home services, salons and barbers, small shops, and other local services. If customers message you to ask about price or availability, it’s likely a fit."
    },
    {
      "id": "content",
      "keys": [
        "posts",
        "posting",
        "content",
        "social media",
        "how many posts",
        "captions"
      ],
      "text": "Monthly Content means 8 to 12 Facebook posts per month, made from your real photos — captions written for you and posts scheduled ahead of time. A Page that posts regularly looks active and open for business; quiet Pages look closed."
    },
    {
      "id": "reviews",
      "keys": [
        "review",
        "reviews",
        "comment",
        "comments",
        "google review",
        "reputation",
        "rating"
      ],
      "text": "With Review & Comment Replies, every Google and Facebook review and comment is answered politely and quickly — thank-you replies for positive reviews, and calm, professional replies for negative ones. People read how you respond, and fast, polite replies show you care."
    },
    {
      "id": "reports",
      "keys": [
        "report",
        "reports",
        "lead log",
        "leads",
        "track",
        "results",
        "monthly report",
        "inquiries"
      ],
      "text": "You get a simple Lead Log of who inquired, plus a plain-language Monthly Report: what was posted, what came in, and what happened. No confusing charts or jargon — so you can actually see what your website and Page are doing for you."
    },
    {
      "id": "appIcon",
      "keys": [
        "app",
        "icon",
        "home screen",
        "phone screen",
        "app icon",
        "customers phones"
      ],
      "text": "Your website can be saved to a customer’s phone home screen — just like an app, with your name and icon. No app store download needed, it works on iPhone and Android, and repeat customers can reach you in one tap."
    },
    {
      "id": "website",
      "keys": [
        "website",
        "web site",
        "quote form",
        "google search",
        "found on google",
        "online"
      ],
      "text": "Your Business Website shows your services, hours, location, and photos in one place, is easy to find on Google, and stays open 24/7 — with a quote form so customers can inquire anytime, even at midnight. And unlike Facebook, it’s space you own and control."
    },
    {
      "id": "assistant",
      "keys": [
        "assistant",
        "messenger assistant",
        "chatbot",
        "ai assistant",
        "24/7",
        "after hours",
        "missed",
        "reply fast",
        "instant"
      ],
      "text": "The 24/7 Messenger AI Assistant answers common questions instantly — services, hours, location — day or night, weekends included. It collects the details you need for a quote, but never gives final prices; Rod approves every quote personally."
    },
    {
      "id": "facebookPage",
      "keys": [
        "facebook page",
        "fb page",
        "page setup",
        "page makeover",
        "fix my page",
        "set up my page"
      ],
      "text": "Facebook Page Setup & Makeover gives you a complete, tidy Page that looks trusted the moment a customer lands on it: proper profile photo, cover and bio, services listed clearly, and correct hours, address, and contact buttons — no empty sections."
    },
    {
      "id": "ads",
      "keys": [
        "ads",
        "advertising",
        "boost",
        "ad spend",
        "facebook ads"
      ],
      "text": "If you ever run Facebook ads, the ad spend is separate and paid by you directly to Facebook. We never mark it up or hide it."
    },
    {
      "cta": "Message Rod on Messenger",
      "id": "contact",
      "keys": [
        "contact",
        "phone",
        "email",
        "call",
        "talk to",
        "human",
        "rod",
        "reach you",
        "get started",
        "sign up",
        "start",
        "quote",
        "book"
      ],
      "text": "Everything goes through Messenger, so nothing gets missed — tap below and Rod, the owner, will reply personally within the day. You can ask there for a free sample or a quote."
    },
    {
      "id": "about",
      "keys": [
        "who are you",
        "about",
        "where are you",
        "located",
        "fort mcmurray",
        "local",
        "who is rod",
        "company"
      ],
      "text": "DikoWebAI is a local, owner-operated business run by Rod in Fort McMurray, Alberta — Web & AI Services for Fort McMurray small businesses. No big agency, no call centre: you deal directly with Rod, the same person who builds your website and approves your quotes. On Facebook we’re Fort McMurray Web & AI Services (@FortMcMurrayWebAI)."
    },
    {
      "id": "service-website",
      "keys": [
        "website details",
        "website include",
        "what is in the website",
        "what is included in the website",
        "quote form details",
        "website features"
      ],
      "text": "Your own website with your own address — not just a Facebook Page. It shows up on Google, stays open 24/7, and lets customers inquire anytime. Your services, hours, location and photos in one place. Easy to find on Google when people search. Quote / request form so customers can inquire anytime — even at midnight. Tap-to-message buttons for phones. Why it helps: Facebook is rented space. Your website is your store on the internet — you own it and control it."
    },
    {
      "id": "service-page",
      "keys": [
        "page makeover details",
        "page setup details",
        "what is included in the page setup",
        "page setup include",
        "facebook page details"
      ],
      "text": "A complete, tidy Facebook Page that looks trusted the moment a customer lands on it. Proper profile photo, cover, and bio. Services listed clearly. Correct hours, address and contact buttons. Clean, complete look — no empty sections. Why it helps: customers check your Page before they message. A complete Page builds trust in seconds."
    },
    {
      "id": "service-assistant",
      "keys": [
        "assistant details",
        "what does the assistant do",
        "what can the assistant answer",
        "assistant do",
        "assistant answer"
      ],
      "text": "A friendly assistant on your Messenger that answers common questions instantly — day or night, weekends included. Instant answers about services, hours and location. Collects the details you need for a quote. Never gives final quotes or prices — Rod approves every quote personally. Rod personally reads messages and replies within the day. Why it helps: customers get a reply in seconds instead of hours, so fewer inquiries slip away to competitors."
    },
    {
      "id": "service-appicon",
      "keys": [
        "app icon details",
        "add to home screen",
        "save website to phone",
        "save to phone",
        "home screen"
      ],
      "text": "Your website can be saved to a customer’s phone home screen — just like an app, with your name and icon. No app store download needed. One tap to reach you again. Works on iPhone and Android. Why it helps: repeat customers can find you in one tap instead of searching Google again."
    },
    {
      "id": "service-content",
      "keys": [
        "monthly content details",
        "how many posts",
        "what posts are included",
        "posts included",
        "content details"
      ],
      "text": "Regular Facebook posts made from your real photos — your food, your work, your shop. Not stock photos. 8 to 12 posts per month. Captions written for you. Posts scheduled ahead of time. Made from photos you send us of your real work. Why it helps: a Page that posts regularly looks active and open for business. Quiet Pages look closed."
    },
    {
      "id": "service-reviews",
      "keys": [
        "review replies details",
        "who answers reviews",
        "negative review",
        "review replies",
        "answers reviews"
      ],
      "text": "Every Google and Facebook review and comment answered politely and quickly — good or bad. Thank-you replies for positive reviews. Calm, professional replies for negative ones. Comments on your posts answered too. Why it helps: people read how you respond. Polite, fast replies show you care — even when a review isn’t fair."
    },
    {
      "id": "service-leads",
      "keys": [
        "lead log details",
        "monthly report details",
        "what is in the report",
        "what is in the lead log",
        "report details"
      ],
      "text": "No guessing. You get a simple log of who inquired, and a plain-language report each month. Simple log of inquiries / leads. Monthly report: what was posted, what came in, what happened. Written in plain language — no confusing charts or jargon. Why it helps: you can actually see what your website and Page are doing for you each month."
    },
    {
      "id": "process-5steps",
      "keys": [
        "process",
        "how it works",
        "steps",
        "what happens first",
        "how do we start",
        "stages",
        "what are the steps"
      ],
      "text": "Simple, from first message to launch:\n1. Message us / free sample — send us a message on Messenger. Ask for a free sample for your business.\n2. Quick chat — we talk briefly about your business and what you need most — website, replies, posts, or all of it.\n3. We build (1–2 weeks) — we build your website, Page, assistant, and first content — usually in about 1 to 2 weeks.\n4. You review & approve — you see everything first. Nothing goes live until you're happy with it.\n5. Launch & monthly care — we launch, then handle monthly content, replies, lead log, and your monthly report."
    },
    {
      "cta": "Ask for my free sample",
      "id": "sample-details",
      "keys": [
        "free sample",
        "sample post",
        "homepage preview",
        "how long does the sample take",
        "how long is the sample valid",
        "sample valid",
        "offer valid",
        "how long is it valid",
        "sample timing"
      ],
      "text": "A free sample is a sample post or a homepage preview made for your business, before you pay anything. A sample post takes about 1 day to make; a homepage preview takes about 2 to 3 days. You pay nothing until you've seen the quality and decide it's right for you. The offer is valid for 2 weeks — just ask for it on Messenger within that time."
    },
    {
      "id": "payment-terms",
      "keys": [
        "payment",
        "pay",
        "payment terms",
        "installment",
        "split payment",
        "how do i pay",
        "when do i pay",
        "pay in installments",
        "can i pay in installments"
      ],
      "text": "The pilot is a one-time $500 setup plus $150 for the first month. After that, it's month-to-month based on what you need — no long-term contract, you're not locked in. Your domain name (about $15–25/year for a .ca) is paid by you directly, so you own it always. If a site later needs paid hosting, for example for an online store, we will tell you the cost first — no surprises. If you ever run Facebook ads, ad spend is separate and paid by you directly to Facebook. We never mark it up or hide it. The $500 setup can also be split into two installments: $250 at the start and $250 before launch."
    },
    {
      "id": "monthly-care",
      "keys": [
        "monthly care",
        "monthly security check",
        "security check",
        "what is included monthly",
        "what do i get every month",
        "ongoing",
        "maintenance",
        "monthly care include",
        "after launch care"
      ],
      "text": "After launch, monthly care means: 8 to 12 Facebook posts per month made from your real photos, with captions written for you and posts scheduled ahead of time; every Google and Facebook review and comment answered politely and quickly; a monthly security check of your website and Page; a simple Lead Log of who inquired; and a plain-language Monthly Report — what was posted, what came in, and what happened. No long-term contract — month-to-month based on what you need."
    },
    {
      "id": "domain-hosting-policy",
      "keys": [
        "domain policy",
        "hosting policy",
        "who owns the domain",
        "hosting fee",
        "domain renewal",
        ".ca cost",
        "domain renewal cost",
        "paid hosting",
        "free hosting"
      ],
      "text": "Your domain name — your web address, about $15–25/year for a .ca — is registered in your own name and paid by you directly, so you own it always. We guide you step by step. The $500 setup covers building your website, Facebook Page, and Messenger assistant — the domain name is not included in the setup. For most small business sites we use reliable free hosting, so there is usually no monthly hosting fee to start. If a site later needs paid hosting, for example for an online store, we will tell you the cost first — no surprises. At handover you get a simple list of where everything is, plus renewal dates and costs."
    },
    {
      "id": "timeline-needs",
      "keys": [
        "what do you need from me",
        "what should i prepare",
        "what do you need to start",
        "photos hours details",
        "what do you need",
        "what should i send"
      ],
      "text": "Setup usually takes about 1 to 2 weeks from our first chat to launch, as long as we have your photos, hours, and business details. You review and approve everything before it goes live. Your monthly posts are made from real photos of your work, food, or business — just send us photos from your phone; we'll take care of captions and scheduling."
    },
    {
      "id": "revisions",
      "keys": [
        "revision",
        "revisions",
        "changes",
        "edits",
        "can i change",
        "how many revisions",
        "approve",
        "how many rounds",
        "rounds of revisions"
      ],
      "text": "You see everything first. Nothing goes live until you're happy with it — you review and approve everything before launch. Two rounds of revisions are included in the package."
    },
    {
      "id": "service-area",
      "keys": [
        "service area",
        "where",
        "location",
        "areas you serve",
        "do you serve",
        "outside fort mcmurray",
        "other cities",
        "do you serve outside"
      ],
      "text": "DikoWebAI is a local, owner-operated business run by Rod in Fort McMurray, Alberta — made for Fort McMurray small businesses. You deal directly with Rod, the same person who builds your website and approves your quotes. We also take clients from outside Fort McMurray — online clients are welcome."
    },
    {
      "id": "portfolio-samples",
      "keys": [
        "portfolio",
        "samples",
        "examples of your work",
        "show me your work",
        "previous work",
        "past clients",
        "live examples",
        "sample client",
        "luxe"
      ],
      "text": "These are samples and previews that show the style and quality you can expect. We don't use fake testimonials or invented results — what you see is real sample work, labelled as such. One live example: Luxe Cleaning & Detailing (luxecleandetailing.ca) — a Fort McMurray cleaning & detailing business whose website we built, with services, quote form, and tap-to-message buttons. A sample promotional poster for a Filipino restaurant's family-day Kamayan special — the kind of monthly content post included in the 8–12 posts service. And this website itself, plus our Facebook Page @FortMcMurrayWebAI, are live samples of our work — judge the quality by what you can see and tap right now."
    },
    {
      "id": "why-website-expanded",
      "keys": [
        "why do i need a website",
        "facebook is enough",
        "already have facebook",
        "page vs website",
        "rented space",
        "why website"
      ],
      "text": "They do different jobs. Your Facebook Page is rented space: Facebook controls it and can change the rules anytime. Your website is your own address on Google that you own and control — open 24/7 with your quote form. Your website is your store on the internet — you own it and control it — while Facebook is rented space. It shows up on Google, stays open 24/7, and lets customers inquire anytime, even at midnight, with a quote form. Together, they're much stronger than either one alone."
    },
    {
      "id": "missed-call-catcher",
      "keys": [
        "missed call",
        "missed calls",
        "miss a call",
        "catcher",
        "phone",
        "call back",
        "text back",
        "sms",
        "missed call catcher"
      ],
      "text": "The Missed Call Catcher makes sure inquiries don't slip away when you can't pick up the phone. It is built from the tools you already have: clear Click-to-Messenger and Click-to-WhatsApp buttons on your website, and your Facebook Page assistant answering right away when you can't. Your Google Business Profile is also checked so your number, website link, and chat path are correct. One honest note: this is a catcher on Messenger and WhatsApp — it is NOT an SMS text-back. If you want a true SMS text-back later, Rod will tell you plainly what it needs."
    },
    {
      "cta": "Ask Rod for my review link",
      "id": "google-reviews-link",
      "keys": [
        "google review link",
        "review link",
        "qr",
        "qr code",
        "leave a review",
        "review card",
        "ask customers for reviews",
        "get more reviews"
      ],
      "text": "After your project is done, we'll send you a Google review link — plus a QR card you can show in person — so your happy customers can leave you a review in one tap. Just ask Rod after launch and he'll send it to you."
    },
    {
      "id": "ownership-handover",
      "keys": [
        "ownership",
        "who owns what",
        "handover",
        "what do i get",
        "my data",
        "lead data",
        "accounts",
        "who owns my data"
      ],
      "text": "Your domain and website are yours — you are the owner/admin and your passwords stay with you. We work through collaborator/developer access, never by sharing passwords. At handover you get a simple list of where everything is, plus renewal dates and costs. Your domain name is registered in your own name and paid by you directly, so you own it always."
    },
    {
      "cta": "Message Rod on Messenger",
      "id": "how-to-start",
      "keys": [
        "how to start",
        "how do i start",
        "get started",
        "begin",
        "sign up",
        "start now",
        "next step",
        "what first",
        "how do i begin"
      ],
      "text": "Start with a free sample — a sample post or homepage preview for your business, made before you pay anything. Everything goes through Messenger, so nothing gets missed: send us a message, tell us about your business, and Rod, the owner, will reply personally within the day. Fill in your name, business name, and what you need most, and it takes about a minute."
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
    '<button class="diko-launcher" aria-label="Ask Diko — chat with the DikoWebAI assistant"><img src="diko-avatar.png" alt=""><span class="diko-dot"></span>Ask Diko</button>' +
    '<div class="diko-panel" role="dialog" aria-label="Chat with Diko, the DikoWebAI assistant">' +
      '<div class="diko-head"><img src="diko-avatar.png" alt="">' +
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
