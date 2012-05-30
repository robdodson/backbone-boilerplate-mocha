require.config({
    // Base URL relative to the test runner
    // Paths are relative to this
    baseUrl: '../app',
    paths: {
        // Testing libs
        'chai'          : '../test/chai/chai',
        'common'        : '../test/common',
        'jquery'        : '../assets/js/libs/jquery',
        'underscore'    : '../assets/js/libs/underscore',
        'backbone'      : '../assets/js/libs/backbone',
        'use'           : '../assets/js/plugins/use'
    },
    use: {
        backbone: {
            deps: ['use!underscore', 'jquery'],
            attach: 'Backbone'
        },
        underscore: {
            attach: '_'
        },
        mocha: {
            attach: 'mocha'
        }
    },
    priority: [
        'jquery',
        'underscore',
        'common'
    ]
});

mocha.setup({
    ui: 'bdd',
    ignoreLeaks: true
});

// Protect from barfs
console = window.console || function() {};

var runMocha = function() {
    mocha.run();
};