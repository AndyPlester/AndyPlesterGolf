/* Scroll-triggered fade-in for performance call page */
(function () {
  var sections = document.querySelectorAll(".call-scroll-section");
  if (!sections.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("call-visible");
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0 }
  );

  sections.forEach(function (section) {
    section.classList.add("call-animate");
    observer.observe(section);
  });
})();

// Privacy / cookie consent banner — same key as main site, show until accepted
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
