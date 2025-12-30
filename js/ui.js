(function(){
  function observeAnimateTargets(){
    const targets = document.querySelectorAll('[data-animate]');
    if(!targets.length) return;

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, {threshold: 0.15});

    targets.forEach(t => io.observe(t));
  }

  document.addEventListener('DOMContentLoaded', observeAnimateTargets);
})();
