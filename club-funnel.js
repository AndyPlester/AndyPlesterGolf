(function () {
  try {
    if (new URLSearchParams(window.location.search).get("thanks") === "1") {
      var mainBlock = document.getElementById("udc-main-content");
      var thanks = document.getElementById("udc-thanks");
      if (mainBlock) mainBlock.setAttribute("hidden", "");
      if (thanks) thanks.removeAttribute("hidden");
      document.title = "You’re in | Up & Down Club";
    }
  } catch (e) {}
})();

(function () {
  var url =
    typeof window.UDC_GOOGLE_FORM_EMBED_URL === "string"
      ? window.UDC_GOOGLE_FORM_EMBED_URL.trim()
      : "";
  var wrap = document.getElementById("udc-form-embed-wrap");
  var frame = document.getElementById("udc-form-iframe");
  var native = document.getElementById("udc-native-form");
  if (url && wrap && frame) {
    frame.src = url;
    wrap.removeAttribute("hidden");
    if (native) native.setAttribute("hidden", "");
  }
})();

(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var backdrop = document.querySelector(".mobile-menu-backdrop");
  var mobileLinks = document.querySelectorAll(".mobile-menu-link, .mobile-menu-cta");
  var menuPanel = document.querySelector(".mobile-menu");

  function openMenu() {
    if (!header) return;
    header.classList.add("is-open");
    var btn = header.querySelector(".menu-toggle");
    if (btn) {
      btn.setAttribute("aria-label", "Close menu");
      btn.setAttribute("aria-expanded", "true");
    }
    document.body.style.overflow = "hidden";
    if (backdrop) backdrop.classList.add("is-visible");
    if (menuPanel) menuPanel.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    if (!header) return;
    header.classList.remove("is-open");
    var btn = header.querySelector(".menu-toggle");
    if (btn) {
      btn.setAttribute("aria-label", "Open menu");
      btn.setAttribute("aria-expanded", "false");
    }
    document.body.style.overflow = "";
    if (backdrop) backdrop.classList.remove("is-visible");
    if (menuPanel) menuPanel.setAttribute("aria-hidden", "true");
  }

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.contains("is-open") ? closeMenu() : openMenu();
    });
  }
  if (backdrop) backdrop.addEventListener("click", closeMenu);
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
})();

(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  var header = document.querySelector(".site-header");
  if (header) {
    function onScroll() {
      header.style.background =
        window.scrollY > 40 ? "rgba(10, 10, 10, 0.92)" : "transparent";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();

(function () {
  var STORAGE_KEY = "andyplestergolf-privacy-accepted";
  var banner = document.getElementById("privacy-banner");
  var acceptBtn = document.getElementById("privacy-banner-accept");

  function hideBanner() {
    if (banner) banner.setAttribute("hidden", "");
  }

  function showBanner() {
    if (banner) banner.removeAttribute("hidden");
  }

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch (e) {}
    hideBanner();
  }

  if (!banner) return;

  try {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      hideBanner();
      return;
    }
  } catch (e) {}

  showBanner();
  if (acceptBtn) acceptBtn.addEventListener("click", accept);
})();
