import { animate } from "./helpers.js";

const modal = () => {
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')

  function isMobile() {
    return window.innerWidth < 768;
  }

  function toggleScroll(disable) {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function openModal() {
    modal.style.display = 'block';
    toggleScroll(true);

    if (isMobile()) {
      modal.style.opacity = '1';
      modal.style.transform = 'scale(1) translateY(0)';
      return;
    }

    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.7) translateY(40px)';

    function easing(t) {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }

    animate({
      duration: 400,
      timing: easing,
      draw: function (progress) {
        modal.style.opacity = Math.min(progress * 1.2, 1);
        const scale = 0.7 + (1 - 0.7) * progress;
        const translateY = 40 * (1 - progress);
        modal.style.transform = `scale(${scale}) translateY(${translateY}px)`;

        if (progress === 1) {
          modal.style.opacity = '1';
          modal.style.transform = 'scale(1) translateY(0)';
        }
      }
    });
  }
  function closeModal() {
    if (isMobile()) {
      modal.style.display = 'none';
      modal.style.opacity = '0';
      modal.style.transform = 'scale(0.7) translateY(40px)';
      toggleScroll(false);
      return;
    }

    function easing(t) {
      return t * t * t;
    }

    animate({
      duration: 300,
      timing: easing,
      draw: function (progress) {
        modal.style.opacity = 1 - progress;
        const scale = 1 - (1 - 0.8) * progress;
        const translateY = 30 * progress;

        modal.style.transform = `scale(${scale}) translateY(${translateY}px)`;

        if (progress === 1) {
          modal.style.display = 'none';
          modal.style.opacity = '0';
          modal.style.transform = 'scale(0.7) translateY(40px)';
          toggleScroll(false);
        }
      }
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', openModal)
  })

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      closeModal()
    }
  })

}

export default modal