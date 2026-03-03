// YouTube hero: force muted autoplay via IFrame API (avoids thumbnail-only + audio issues)
(function () {
  var videoId = "3l00_yJ6STg";
  var container = document.getElementById("hero-youtube-player");
  if (container && container.dataset.videoId) {
    videoId = container.dataset.videoId;
  }

  function initHeroVideo() {
    if (!window.YT || !window.YT.Player) return;
    var player = new YT.Player("hero-youtube-player", {
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        loop: 1,
        playlist: videoId,
        controls: 0,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        playsinline: 1,
        fs: 0
      },
      events: {
        onReady: function (e) {
          var p = e.target;
          p.mute();
          p.playVideo();
        }
      }
    });
  }

  if (window.YT && window.YT.Player) {
    initHeroVideo();
    return;
  }

  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(tag, firstScript);

  window.onYouTubeIframeAPIReady = function () {
    initHeroVideo();
  };
})();

// Mobile hamburger menu
(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var backdrop = document.querySelector(".mobile-menu-backdrop");
  var mobileLinks = document.querySelectorAll(".mobile-menu-link, .mobile-menu-cta");

  var menuPanel = document.querySelector(".mobile-menu");

  function openMenu() {
    if (!header) return;
    header.classList.add("is-open");
    header.querySelector(".menu-toggle").setAttribute("aria-label", "Close menu");
    header.querySelector(".menu-toggle").setAttribute("aria-expanded", "true");
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

  if (toggle) {
    toggle.addEventListener("click", function () {
      header.classList.contains("is-open") ? closeMenu() : openMenu();
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
})();

// Smooth scroll and header background
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
      header.style.background = window.scrollY > 80
        ? "rgba(10, 10, 10, 0.9)"
        : "transparent";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
