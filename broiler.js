define([
    "jquery"
], function($) {
    function Broiler(identifier, callBack) {
        var image = $(identifier)[0];
        var canvas = $('<canvas/>')[0];
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
        imageData = canvas.getContext('2d').getImageData(0, 0, image.width, image.height).data;
        delete canvas;
        $(identifier).click(function (event) {
            var offset = $(this).offset();
            var x = Math.round(event.clientX-offset.left);
            var y = Math.round(event.clientY-offset.top);
            var start = (x+y*image.width)*4;
            var color = {
                'r': imageData[start],
                'g': imageData[start+1],
                'b': imageData[start+2],
                'a': imageData[start+3]
            }
            callBack(color);
        });
    }

    return Broiler;
});
