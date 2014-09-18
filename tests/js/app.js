define([
    "jquery",
    "broiler"
], function($, Broiler) {
    "use strict";
    var initialize = function() {
        $(function() {
            new Broiler("#rainbow", function(color) {
                var hex = "#" + ((1 << 24) + (color.r << 16) + (color.g << 8) +
                    color.b).toString(16).slice(1);
                $("#panel").css("background-color", hex);
            });
        });
    };

    return {
        initialize:initialize
    };
});
