require.config({
    paths: {
        "jquery": "libs/jquery/jquery-2.1.1.min",
        "broiler": "../../broiler"
    }
});

require([ "app" ], function(App) {
    App.initialize();
});
