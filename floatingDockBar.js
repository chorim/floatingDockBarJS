/**
 * Constructor
 * @param config FloatingDockBar options
 *
 * @constructor
 */
function FloatingDockBar(config) {
    var t = this;
    t.config = $.extend({}, t.config, config);
}

FloatingDockBar.prototype.config = {
    dockBar: false,
    baseline: false,
    activeCss: {
        "position": "fixed",
        "top": "0px",
        "width": "1280px",
        "z-index": "99999",
        "background-color": "white"
    },
    inActiveCss: {
        "position": "inherit",
        "top": "auto"
    },
    delay: 250
};


/**
 * Initialize.
 *
 * @return {Void}
 */
FloatingDockBar.prototype.init = function () {
    var t = this;

    // Validate configs
    if (!(t.config.dockBar instanceof $) || !(t.config.baseline instanceof $)) {
        console.error("FloatingDockBar: Instance Error has occurred. Please checking your config options.");
        return;
    }

    var baselinePos = parseInt(t.config.baseline.offset().top);

    var activeCss = t.config.activeCss;
    var inActiveCss = t.config.inActiveCss;

    $(window).scroll($.throttle(t.config.delay, function () {
        var currentPos = parseInt($(window).scrollTop());

        if (currentPos <= baselinePos) {
            t.config.dockBar.css(inActiveCss);
        } else {
            t.config.dockBar.css(activeCss);
        }
    }));
};