define([
    "jquery"
], function($) {
    function Broiler(identifier, callBack) {
        var image = $(identifier)[0],
            canvas = $("<canvas/>")[0],
            imageData;
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height);
        imageData = canvas.getContext("2d").getImageData(0, 0, image.width, image.height).data;
        $(identifier).click(function(event) {
            var offset = $(this).offset(), x, y, start;
            x = Math.round(event.clientX - offset.left);
            y = Math.round(event.clientY - offset.top);
            start = (x + y * image.width) * 4;
            callBack({
                "r": imageData[start],
                "g": imageData[start + 1],
                "b": imageData[start + 2],
                "a": imageData[start + 3]
            });
        });
    }

    return Broiler;
});
