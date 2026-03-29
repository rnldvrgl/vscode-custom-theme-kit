(function () {
    'use strict';

    // ── Helpers ────────────────────────────────────────────────────────
    function setStickyWidgetsOpacity(value) {
        document.querySelectorAll('.sticky-widget').forEach(function (w) {
            w.style.opacity = value;
        });
        var tree = document.querySelector('.monaco-tree-sticky-container');
        if (tree) tree.style.opacity = value;
    }

    // ── Create the backdrop overlay once ────────────────────────────────
    function initOverlay() {
        if (document.getElementById('command-blur')) return;
        var workbench = document.querySelector('.monaco-workbench');
        if (!workbench) return;
        var overlay = document.createElement('div');
        overlay.id = 'command-blur';
        workbench.appendChild(overlay);
    }

    // ── Show / hide backdrop blur ──────────────────────────────────────
    function showBlur() {
        var overlay = document.getElementById('command-blur');
        if (overlay) {
            overlay.classList.add('visible');
            // Add a body class so CSS can react to palette-open state
            document.body.classList.add('command-palette-open');
        }
        setStickyWidgetsOpacity(0);
    }

    function hideBlur() {
        var overlay = document.getElementById('command-blur');
        if (overlay) {
            overlay.classList.remove('visible');
            document.body.classList.remove('command-palette-open');
        }
        setStickyWidgetsOpacity(1);
    }

    // ── Zen: fade sidebar on idle (subtle focus mode) ──────────────────
    var idleTimer = null;
    var IDLE_MS = 60000; // 1 minute

    function resetIdleTimer() {
        if (idleTimer) clearTimeout(idleTimer);
        // Restore sidebar if it was dimmed
        var sidebar = document.querySelector('.part.sidebar');
        if (sidebar) sidebar.style.opacity = '';

        idleTimer = setTimeout(function () {
            var sb = document.querySelector('.part.sidebar');
            if (sb) {
                sb.style.transition = 'opacity 1.5s ease';
                sb.style.opacity = '0.5';
            }
        }, IDLE_MS);
    }

    document.addEventListener('keydown', resetIdleTimer, true);
    document.addEventListener('mousemove', resetIdleTimer, { passive: true, capture: true });
    resetIdleTimer();

    // ── Wait for the command palette widget, then observe it ───────────
    var poll = setInterval(function () {
        var widget = document.querySelector('.quick-input-widget');
        if (!widget) return;

        clearInterval(poll);
        initOverlay();

        // If already open on load
        if (widget.style.display !== 'none') showBlur();

        new MutationObserver(function (mutations) {
            for (var i = 0; i < mutations.length; i++) {
                if (mutations[i].attributeName === 'style') {
                    if (widget.style.display === 'none') {
                        hideBlur();
                    } else {
                        showBlur();
                    }
                }
            }
        }).observe(widget, { attributes: true });
    }, 500);

    // ── Keyboard shortcut listener (single, capture phase) ─────────────
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            hideBlur();
        }
    }, true);
})();
