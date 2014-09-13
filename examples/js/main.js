require.config({
    paths: {
        "jquery": "js/libs/jquery/jquery-2.1.1.min",
        "broiler": "../broiler.js"
    }
});

require(['app'], function (App) {
    App.initialize();
});
