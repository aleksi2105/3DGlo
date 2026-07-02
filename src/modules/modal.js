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

    requestAnimationFrame(() => {
      let start = null;
      const duration = 400;

      function animate(time) {
        if (!start) start = time;
        const progress = Math.min((time - start) / duration, 1);

        const c1 = 1.70158;
        const c3 = c1 + 1;
        const eased = 1 + c3 * Math.pow(progress - 1, 3) + c1 * Math.pow(progress - 1, 2);

        modal.style.opacity = Math.min(progress * 1.2, 1);

        const scale = 0.7 + (1 - 0.7) * eased;
        const translateY = 40 * (1 - eased);
        modal.style.transform = `scale(${scale}) translateY(${translateY}px)`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          modal.style.opacity = '1';
          modal.style.transform = 'scale(1) translateY(0)';
        }
      }
      requestAnimationFrame(animate);
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

    let start = null;
    const duration = 300;

    function animate(time) {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);

      const eased = progress * progress * progress;

      modal.style.opacity = 1 - eased;
      const scale = 1 - (1 - 0.8) * eased;
      const translateY = 30 * eased;
      modal.style.transform = `scale(${scale}) translateY(${translateY}px)`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        modal.style.display = 'none';
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.7) translateY(40px)';
        toggleScroll(false);
      }
    }
    requestAnimationFrame(animate);
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