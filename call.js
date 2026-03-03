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
