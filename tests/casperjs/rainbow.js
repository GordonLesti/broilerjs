/* global $ */
casper.test.begin("Test Rainbow", 1, function suite(test) {
    "use strict";
    casper.start("http://localhost:8080/tests/rainbow.html", function() {
        var offset, width, height;
        this.then(function() {
            offset = this.evaluate(function() {
                return $("#rainbow").offset();
            });
        });
        this.then(function() {
            width = offset.left + 600;
            height = offset.top + 30;
            this.viewport(width, height);
        });
        this.then(function() {
            this.mouse.click(offset.left + 75, offset.top + 15);
        });
        this.then(function() {
            test.assertEquals(this.evaluate(function() {
                return $("#panel").css("background-color");
            }), "rgb(255, 153, 0)");
        });
    }).run(function() {
            test.done();
        });
});
