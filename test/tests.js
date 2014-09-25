// https://github.com/axemclion/grunt-saucelabs/issues/84
QUnit.done(function(details) {
    "use strict";
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    window.global_test_results = details;
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
});

QUnit.test( "rainbow test", function( assert ) {
    "use strict";
    var offset = $("#rainbow").offset(),
        scrollLeft = $(window).scrollLeft(),
        scrollTop = $(window).scrollTop(),
        event = $.Event("click"),
        result;
    $("#rainbow").broiler(function(color) {
        result = color;
    });
    event.clientX = 75 + offset.left - scrollLeft;
    event.clientY = 15 + offset.top - scrollTop;
    $("#rainbow").trigger(event);
    assert.deepEqual(result, {
        r: 255,
        g: 153,
        b: 0,
        a: 255
    });
});
