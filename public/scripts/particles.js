particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 900 } },
    color: { value: ['#7dd3fc', '#60a5fa', '#93c5fd', '#22d3ee', '#84c5f4'] },
    shape: { type: ['circle', 'triangle'], stroke: { width: 0 } },
    opacity: {
      value: 0.55,
      random: true,
      anim: { enable: true, speed: 0.8, opacity_min: 0.2 }
    },
    size: {
      value: 3,
      random: { enable: true, minimumValue: 1 },
      anim: { enable: true, speed: 2, size_min: 0.8 }
    },
    /* Lignes subtiles qui relient les particules (look moderne) */
    line_linked: {
      enable: true,
      distance: 140,
      color: '#84c5f4',
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out'
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      /* Hover subtil : "grab" rend les lignes plus visibles près du curseur */
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: false }
    },
    modes: {
      grab: { distance: 160, line_linked: { opacity: 0.35 } },
      repulse: { distance: 120, duration: 0.4 }
    }
  },
  retina_detect: true
});
