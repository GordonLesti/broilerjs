require.config({
    paths: {
        "jquery": "libs/jquery/jquery-2.1.1.min",
        "broiler": "../../broiler"
    }
});

require([ "app" ], function(App) {
    "use strict";
    App.initialize();
});
