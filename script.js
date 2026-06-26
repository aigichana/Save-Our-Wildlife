// ─── Wildlife Video Toggle ────────────────────────────────────────────────────
// Toggles video play/pause state and updates button label + aria-pressed.

(function () {
  const video     = document.getElementById('wildlifeVideo');
  const btn       = document.getElementById('toggleBtn');
  const btnIcon   = btn.querySelector('.btn-icon');
  const btnLabel  = btn.querySelector('.btn-label');

  /**
   * Sync the button's visual state to the current video state.
   * Called whenever the video's play/pause status changes.
   */
  function syncButton() {
    const isPlaying = !video.paused && !video.ended;

    btnLabel.textContent      = isPlaying ? 'Pause Video' : 'Play Video';
    btnIcon.textContent       = isPlaying ? '⏸'           : '▶';
    btn.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
  }

  /**
   * Handle button click:
   *  - If video is paused or ended → play it.
   *  - If video is playing         → pause it (hide effect: pause + reset).
   */
  btn.addEventListener('click', function () {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  });

  // Keep button in sync with native controls (user may use the built-in bar).
  video.addEventListener('play',  syncButton);
  video.addEventListener('pause', syncButton);
  video.addEventListener('ended', syncButton);

  // Set initial state once DOM is ready.
  syncButton();
})();