import { ADDRESS, FACEBOOK, HOURS, INSTAGRAM, MAPS, WHATSAPP_PHONE, WHATSAPP_USERNAME } from "./config.js";
import { beanGroups, menuCategories } from "./products.js";

const icon = (name) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    map: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    facebook: '<path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z"/>',
    whatsapp: '<path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8 8.2c.4-.7.8-.6 1.1-.6.2 0 .4 0 .6.5l.7 1.6c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.6 1 1.4 1.8 2.5 2.3.3.1.5.1.7-.1l.7-.8c.2-.2.4-.3.7-.2l1.5.7c.3.2.5.3.5.5 0 .3-.2 1.1-.8 1.6-.6.5-1.4.7-2.2.5-.8-.2-1.9-.6-3.2-1.7-1.4-1.2-2.3-2.6-2.6-3.4-.4-.9-.4-1.7.1-2.4Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

const app = document.querySelector("#app");
app.innerHTML = `
  <header class="site-header">
    <div class="wrap header-inner">
      <a class="wordmark" href="#home" aria-label="دار البن، الرئيسية" data-testid="brand-link">
        <span class="wordmark-copy"><span class="wordmark-ar">دار البن</span><span class="wordmark-en">DAR ELBON</span></span>
      </a>
      <button class="menu-toggle" type="button" aria-label="فتح القائمة" aria-expanded="false" data-testid="mobile-menu-toggle">${icon("menu")}</button>
      <nav class="main-nav" aria-label="القائمة الرئيسية" data-testid="main-navigation">
        <a href="#menu">المنيو</a><a href="#order">اطلب بن</a><a href="#contact">تواصل معنا</a>
        <a class="nav-cta" href="#order">اختار بنك</a>
      </nav>
    </div>
  </header>
  <main>
    <section class="hero" id="home" aria-labelledby="hero-title">
      <div class="wrap hero-inner">
        <div class="hero-copy">
          <div class="hero-kicker">قهوة على أصولها، وأهلاً بيك في بيتك</div>
          <h1 id="hero-title">دار البن<span>قهوة تتعمل على مهل.</span></h1>
          <p class="hero-lede">ريحة البن أول الحكاية. فنجان مظبوط، قعدة دافية، وبن محمص بعناية تاخده معاك البيت.</p>
          <div class="hero-actions">
            <a class="button-primary" href="#order">اطلب البن ${icon("arrow")}</a>
            <a class="button-quiet" href="#menu">شوف المنيو</a>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="cup-orbit"><span class="orbit-label one">فنجان على مزاجك</span><span class="orbit-label two">تحميص بعناية</span><span class="steam">~ &nbsp; ~</span><div class="coffee-cup"></div><div class="saucer"></div></div>
        </div>
      </div>
      <div class="hero-footnote">قهوة طازة · تحضير بمحبة · من قلب مصر</div>
    </section>
    <div class="welcome-strip"><div class="wrap strip-inner"><span class="strip-message">قعدتك الحلوة تبدأ من أول رشفة.</span><span class="strip-detail">من أول حبة بن لآخر نقطة في الفنجان</span></div></div>
    <section class="menu-section" id="menu" aria-labelledby="menu-title">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">فنجانك المفضل مستنيك</span><h2 class="section-title" id="menu-title">منيو دار البن</h2>
          <p class="section-intro">اختار حاجة تروق عليك — سخنة، باردة، أو فريش.</p>
          <p class="menu-note" data-testid="menu-order-note">المنيو للعرض، والطلب عبر الواتساب متاح لقسم البن</p>
        </div>
        <nav class="category-rail" aria-label="أقسام المنيو" data-testid="menu-category-rail"></nav>
        <div class="menu-groups" data-testid="menu-items"></div>
      </div>
    </section>
    <section class="beans-section" id="order" aria-labelledby="beans-title">
      <div class="wrap">
        <div class="beans-head">
          <span class="eyebrow">خد ريحة دار البن معاك</span><h2 class="section-title" id="beans-title">بن يتظبط على مزاجك</h2>
          <p class="section-intro">اختار النوع والوزن، والسعر هيتحسب قدامك. طلبك يوصلك على واتساب — من غير سلة ولا دفع أونلاين.</p>
        </div>
        <div class="bean-groups" data-testid="bean-products"></div>
        <p class="beans-foot">تحميص بعناية، يتوزن على قد طلبك.</p>
      </div>
    </section>
    <section class="visit-section" id="contact" aria-labelledby="visit-title">
      <div class="wrap visit-layout">
        <div class="visit-copy">
          <span class="eyebrow">مستنيينك</span><h2 class="section-title" id="visit-title">تعالى على فنجان.</h2>
          <p>في دار البن، مفيش أحلى من قعدة هادية وفنجان معمول مخصوص. شرفنا في أقرب فرع ليك.</p>
          <div class="visit-hours"><strong>العنوان</strong><span>${ADDRESS}</span></div>
          <div class="visit-hours"><strong>مواعيدنا</strong><span>${HOURS}</span></div>
        </div>
        <div class="location-panel">
          <h3>فروع دار البن</h3>
          <div class="branch-list">${MAPS.map((branch) => `<a class="branch-link" href="${branch.url}" target="_blank" rel="noopener noreferrer" data-testid="map-${branch.name.replaceAll(" ", "-")}"><span><strong>${branch.name}</strong><small>افتح الموقع على الخريطة</small></span>${icon("map")}</a>`).join("")}</div>
          <div class="address-line">لو محتاج مساعدة في الطلب أو الوصول، ابعتلنا على واتساب.</div>
        </div>
      </div>
    </section>
  </main>
  <footer class="contact-section">
    <div class="wrap">
      <div class="contact-top">
        <div><span class="eyebrow">دايماً قريبين</span><h2>ريحة البن تجمعنا.</h2><p>اسألنا، اطلب بنك، أو تابع جديد دار البن.</p></div>
        <div class="contact-links">
          <a class="contact-chip" href="https://wa.me/${WHATSAPP_PHONE}" target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp">${icon("whatsapp")}<span>01515362792</span></a>
          <a class="contact-chip" href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer" data-testid="contact-instagram">${icon("instagram")}<span>إنستجرام</span></a>
          <a class="contact-chip" href="${FACEBOOK}" target="_blank" rel="noopener noreferrer" data-testid="contact-facebook">${icon("facebook")}<span>فيسبوك</span></a>
        </div>
      </div>
      <div class="footer-bottom"><span class="footer-wordmark">دار البن · DAR ELBON</span><span>قهوة متظبطة، وناس على راحتها.</span><span>© <span id="year"></span> دار البن</span></div>
    </div>
  </footer>
  <a class="floating-whatsapp" href="https://wa.me/${WHATSAPP_PHONE}" target="_blank" rel="noopener noreferrer" aria-label="تواصل معنا على واتساب" data-testid="floating-whatsapp">${icon("whatsapp")}</a>
`;

const rail = document.querySelector(".category-rail");
const menuHost = document.querySelector(".menu-groups");
menuCategories.forEach((category, index) => {
  const id = `menu-category-${index + 1}`;
  const tab = document.createElement("a");
  tab.href = `#${id}`;
  tab.textContent = category.name;
  tab.dataset.testid = `menu-category-link-${index + 1}`;
  rail.append(tab);
  const section = document.createElement("section");
  section.className = "menu-group";
  section.id = id;
  section.setAttribute("aria-labelledby", `${id}-title`);
  section.dataset.testid = `menu-category-${index + 1}-items`;
  const entries = category.items.map((item) => {
    const price = item.prices.length === 2
      ? `<span class="size-price"><span>M</span>${item.prices[0]} <span>/ L</span>${item.prices[1]} جنيه</span>`
      : `<span class="menu-price">${item.prices[0]} جنيه</span>`;
    return `<div class="menu-item" data-testid="menu-entry"><span class="menu-name">${item.name}</span><span class="menu-price">${price}</span></div>`;
  }).join("");
  section.innerHTML = `<div class="menu-group-heading"><h3 id="${id}-title">${category.name}</h3><span class="group-count">${category.items.length} اختيار</span></div><div class="menu-items">${entries}</div>`;
  menuHost.append(section);
});

const sizes = [
  { label: "125 جرام", grams: 125 },
  { label: "250 جرام", grams: 250 },
  { label: "500 جرام", grams: 500 },
  { label: "1 كيلو", grams: 1000 },
];
const beanHost = document.querySelector(".bean-groups");
beanGroups.forEach((group, groupIndex) => {
  const section = document.createElement("section");
  section.className = "bean-group";
  section.innerHTML = `<div class="bean-group-head"><h3>${group.name}</h3><p>${group.products.length} نوع متاح</p></div><div class="bean-grid"></div>`;
  const grid = section.querySelector(".bean-grid");
  group.products.forEach((product, productIndex) => {
    const card = document.createElement("article");
    card.className = "bean-card";
    card.dataset.testid = `bean-product-${groupIndex + 1}-${productIndex + 1}`;
    card.dataset.basePrices = product.prices.join(",");
    card.dataset.selectedPrice = "0";
    card.dataset.selectedWeight = "250";
    card.dataset.name = product.name;
    const typeControls = product.types ? `<div class="type-select" role="group" aria-label="اختيار نوع ${product.name}">${product.types.map((type, i) => `<button type="button" class="type-btn" aria-pressed="${i === 0}" data-price-index="${i}" data-testid="bean-type">${type}</button>`).join("")}</div>` : `<span class="bean-price-caption">سعر الكيلو: ${product.prices[0]} جنيه</span>`;
    card.innerHTML = `<h4>${product.name}</h4>${typeControls}<span class="weight-label">اختار الوزن</span><div class="weight-options" role="group" aria-label="وزن ${product.name}">${sizes.map((size) => `<button type="button" class="weight-btn" data-grams="${size.grams}" aria-pressed="${size.grams === 250}" data-testid="bean-weight">${size.label}</button>`).join("")}</div><div class="bean-order-row"><div class="bean-price" aria-live="polite" data-testid="bean-price"></div><button type="button" class="order-button" data-testid="bean-order">${icon("whatsapp")}اطلب عبر واتساب</button></div>`;
    grid.append(card);
  });
  beanHost.append(section);
});

function updatePrice(card) {
  const prices = card.dataset.basePrices.split(",").map(Number);
  const perKg = prices[Number(card.dataset.selectedPrice)];
  const grams = Number(card.dataset.selectedWeight);
  const price = (perKg * grams) / 1000;
  const formatted = Number.isInteger(price) ? String(price) : price.toFixed(1);
  card.querySelector(".bean-price").innerHTML = `${formatted} <small>جنيه</small>`;
}
document.querySelectorAll(".bean-card").forEach((card) => updatePrice(card));
document.querySelector(".bean-groups").addEventListener("click", async (event) => {
  const typeButton = event.target.closest(".type-btn");
  const weightButton = event.target.closest(".weight-btn");
  const orderButton = event.target.closest(".order-button");
  if (typeButton) {
    const card = typeButton.closest(".bean-card");
    card.dataset.selectedPrice = typeButton.dataset.priceIndex;
    card.querySelectorAll(".type-btn").forEach((button) => button.setAttribute("aria-pressed", String(button === typeButton)));
    updatePrice(card);
  }
  if (weightButton) {
    const card = weightButton.closest(".bean-card");
    card.dataset.selectedWeight = weightButton.dataset.grams;
    card.querySelectorAll(".weight-btn").forEach((button) => button.setAttribute("aria-pressed", String(button === weightButton)));
    updatePrice(card);
  }
  if (orderButton) {
    const card = orderButton.closest(".bean-card");
    const groupName = card.closest(".bean-group").querySelector("h3").textContent;
    const typeButtonSelected = card.querySelector('.type-btn[aria-pressed="true"]');
    const typeText = typeButtonSelected ? ` (${typeButtonSelected.textContent})` : "";
    const weight = sizes.find((size) => size.grams === Number(card.dataset.selectedWeight)).label;
    const priceText = card.querySelector(".bean-price").childNodes[0].textContent.trim();
    const message = `السلام عليكم، عايز أطلب ${card.dataset.name}${typeText} ${weight} بسعر ${priceText} جنيه`;
    const hasPhone = typeof WHATSAPP_PHONE === "string" && WHATSAPP_PHONE.trim().length > 0;
    const url = hasPhone
      ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
      : `https://wa.me/${WHATSAPP_USERNAME}?text=${encodeURIComponent(message)}`;
    if (!hasPhone && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(message).catch(() => {
        /* Chat still opens if clipboard access is unavailable. */
      });
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }
});

const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const nav = document.querySelector(".main-nav");
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
  menuToggle.innerHTML = isOpen ? icon("close") : icon("menu");
});
document.querySelectorAll(".main-nav a").forEach((link) => link.addEventListener("click", () => {
  document.querySelector(".main-nav").classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "فتح القائمة");
  menuToggle.innerHTML = icon("menu");
}));
const categoryLinks = [...rail.querySelectorAll("a")];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) categoryLinks.forEach((link) => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: "-28% 0px -60% 0px" });
document.querySelectorAll(".menu-group").forEach((section) => observer.observe(section));
document.querySelector("#year").textContent = new Date().getFullYear();