document.addEventListener('DOMContentLoaded', function () {
    // Current year in the footer
    var yearEl = document.getElementById('year');
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

    // Hide optional screenshots that haven't been uploaded yet, so no broken image shows
    document.querySelectorAll('img[data-optional]').forEach(function (img) {
        var hideFigure = function () {
            var figure = img.closest('figure');
            if (figure) { figure.hidden = true; }
            var build = img.closest('.build');
            if (build) { build.classList.add('build--no-shot'); }
        };
        if (img.complete && img.naturalWidth === 0) {
            hideFigure();
        } else {
            img.addEventListener('error', hideFigure);
        }
    });
});
